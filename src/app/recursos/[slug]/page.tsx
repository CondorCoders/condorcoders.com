import { Calendar } from "@/icons/Calendar";
import matter from "gray-matter";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import {
  formatResourceDate,
  normalizeResource,
  REVALIDATE_SECONDS,
  type RawResource,
  sortResources,
  resolveResourceImage,
} from "../recursos.service";
import "../resource-content.css";
import {
  Resource,
  ResourceDocument,
  ResourceFrontmatter,
} from "../recursos.types";

interface Props {
  params: Promise<{ slug: string }>;
}

const DEFAULT_AUTHOR = "Condor Coders";
const CONFIG_BASE_URL =
  "https://raw.githubusercontent.com/CondorCoders/condorcoders-config/main";
const RESOURCES_INDEX_URL = `${CONFIG_BASE_URL}/pages/resources/index.json`;

const getResourcesIndex = cache(async () => {
  const response = await fetch(RESOURCES_INDEX_URL, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (response.status === 404) {
    return [] as Resource[];
  }

  if (!response.ok) {
    throw new Error(`No se pudo cargar recursos index (${response.status})`);
  }

  const data = (await response.json()) as RawResource[];
  const normalizedResources = data
    .map(normalizeResource)
    .filter((resource): resource is Resource => resource !== null);

  return sortResources(normalizedResources);
});

const getResourceDocument = cache(
  async (slug: string): Promise<ResourceDocument | null> => {
    const resources = await getResourcesIndex();
    const resource = resources.find((item) => item.slug === slug);

    if (!resource) {
      return null;
    }

    const sourceUrl =
      resource.mdxPath.startsWith("http://") ||
      resource.mdxPath.startsWith("https://")
        ? resource.mdxPath
        : `${CONFIG_BASE_URL}/${resource.mdxPath.replace(/^\/+/, "")}`;

    const response = await fetch(sourceUrl, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(
        `No se pudo cargar ${resource.mdxPath} (${response.status})`,
      );
    }

    const source = await response.text();
    const parsedSource = matter(source);
    const frontmatter = parsedSource.data as ResourceFrontmatter;

    return {
      resource,
      content: parsedSource.content,
      frontmatter,
    };
  },
);

export async function generateStaticParams() {
  const resources = await getResourcesIndex();
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resourceDocument = await getResourceDocument(slug);

  if (!resourceDocument) {
    return {
      title: "Recurso no encontrado | Condor Coders",
    };
  }

  const title = resourceDocument.frontmatter.title ?? resourceDocument.resource.title;
  const description =
    resourceDocument.frontmatter.description ?? resourceDocument.resource.description;
  const image = resolveResourceImage(
    resourceDocument.frontmatter.image ??
      resourceDocument.frontmatter.cover ??
      resourceDocument.resource.image,
  );

  return {
    title: `${title} | Recursos Condor Coders`,
    description,
    openGraph: {
      title,
      description,
      ...(image ? { images: [image] } : {}),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resourceDocument = await getResourceDocument(slug);

  if (!resourceDocument) {
    notFound();
  }

  const { content } = await compileMDX({
    source: resourceDocument.content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark-default",
              keepBackground: false,
              bypassInlineCode: true,
              defaultLang: {
                block: "plaintext",
                inline: "plaintext",
              },
            },
          ],
        ],
      },
    },
  });

  const title = resourceDocument.frontmatter.title ?? resourceDocument.resource.title;
  const description =
    resourceDocument.frontmatter.description ?? resourceDocument.resource.description;
  const author = resourceDocument.frontmatter.author ?? resourceDocument.resource.author ?? DEFAULT_AUTHOR;
  const date = resourceDocument.frontmatter.date ?? resourceDocument.resource.date;
  const image = resolveResourceImage(
    resourceDocument.frontmatter.image ??
      resourceDocument.frontmatter.cover ??
      resourceDocument.resource.image,
  );

  return (
    <article className="mx-auto w-full max-w-4xl px-4 pb-16 pt-24">
      <Link href="/recursos" className="inline-flex text-sm text-light/75 hover:text-light">
        ← Volver a recursos
      </Link>

      <header className="mt-6 space-y-4">
        <h1 className="font-cabinet text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="text-lg text-light/75">{description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-light/70">
          <span>Por {author}</span>
          <span className="inline-flex items-center gap-2">
            <Calendar className="size-4 stroke-2" />
            <time>{formatResourceDate(date)}</time>
          </span>
        </div>
        {image ? (
          <div className="overflow-hidden rounded-2xl border border-light/15">
            <Image
              src={image}
              alt={`Imagen de portada para ${title}`}
              width={1280}
              height={720}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : null}
      </header>

      <section className="resource-content mt-10">{content}</section>
    </article>
  );
}
