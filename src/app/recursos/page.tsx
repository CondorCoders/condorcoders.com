import { FolderCard } from "@/components/FolderCard";
import type { Metadata } from "next";
import {
  formatResourceDate,
  normalizeResource,
  REVALIDATE_SECONDS,
  type RawResource,
  sortResources,
  resolveResourceImage,
} from "./recursos.service";
import { Resource } from "./recursos.types";

export const metadata: Metadata = {
  title: "Recursos | Condor Coders",
  description: "Recursos técnicos de Condor Coders.",
};

const RESOURCES_INDEX_URL =
  "https://raw.githubusercontent.com/CondorCoders/condorcoders-config/main/pages/resources/index.json";

const getResourcesIndex = async () => {
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
};

export default async function RecursosPage() {
  const resources = await getResourcesIndex();

  if (!resources.length) {
    return (
      <section className="mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-4xl items-center justify-center px-6 py-16">
        <div className="flex w-full flex-col items-center gap-6 rounded-3xl border border-light/15 bg-light/5 p-10 text-center backdrop-blur-sm">
          <span className="rounded-full bg-yellow/15 px-4 py-1 text-sm text-yellow">
            Próximamente
          </span>
          <h1 className="font-cabinet text-4xl font-bold md:text-5xl">
            Recursos
          </h1>
          <p className="max-w-2xl text-base text-light/70 md:text-lg">
            Todavía no hay recursos publicados. Súbelos en tu repo de
            configuración y aparecerán aquí automáticamente.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-3 pb-16 pt-24">
      <h1 className="text-3xl font-semibold md:text-5xl">Recursos</h1>
      <p className="mt-3 text-light/70">
        Tutoriales, guías y snippets de código.
      </p>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
          const imageUrl = resolveResourceImage(resource.image);

          return (
            <FolderCard
              key={resource.slug}
              foldText={resource.tags?.[0] || "Recurso"}
              heading={resource.title}
              headingMeta={formatResourceDate(resource.date)}
              headingMetaPosition="before"
              description={resource.description}
              descriptionClassName="text-sm leading-5"
              image={
                imageUrl
                  ? {
                      src: imageUrl,
                      alt: `Imagen de ${resource.title}`,
                    }
                  : undefined
              }
              href={`/recursos/${resource.slug}`}
              actions={[
                {
                  label: "Leer recurso",
                  href: `/recursos/${resource.slug}`,
                },
              ]}
              theme={{
                baseColor: "color-mix(in srgb, var(--color-blue) 65%, black)",
                hoverColor: "color-mix(in srgb, var(--color-blue) 55%, black)",
              }}
            />
          );
        })}
      </section>
    </section>
  );
}
