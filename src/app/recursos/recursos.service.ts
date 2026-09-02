import { Resource } from "./recursos.types";

const CONFIG_BASE_URL =
  "https://raw.githubusercontent.com/CondorCoders/condorcoders-config/main";
export const REVALIDATE_SECONDS = 30;

export interface RawResource {
  slug?: unknown;
  title?: unknown;
  description?: unknown;
  mdxPath?: unknown;
  path?: unknown;
  image?: unknown;
  author?: unknown;
  date?: unknown;
  tags?: unknown;
}

const toStringValue = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : undefined;

const toStringArray = (value: unknown) =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : undefined;

export const normalizeResource = (resource: RawResource): Resource | null => {
  const slug = toStringValue(resource.slug);
  const title = toStringValue(resource.title);
  const description = toStringValue(resource.description);
  const mdxPath =
    toStringValue(resource.mdxPath) ?? toStringValue(resource.path);

  if (!slug || !title || !description || !mdxPath) {
    return null;
  }

  return {
    slug,
    title,
    description,
    mdxPath,
    image: toStringValue(resource.image),
    author: toStringValue(resource.author),
    date: toStringValue(resource.date),
    tags: toStringArray(resource.tags),
  };
};

export const sortResources = (resources: Resource[]) =>
  resources.sort((current, next) => {
    const currentDate = current.date ? Date.parse(current.date) : 0;
    const nextDate = next.date ? Date.parse(next.date) : 0;
    return nextDate - currentDate;
  });

const getDateTimestamp = (date?: string) => {
  if (!date) {
    return 0;
  }

  const parsedDate = Date.parse(date);
  return Number.isNaN(parsedDate) ? 0 : parsedDate;
};

export const formatResourceDate = (date?: string) => {
  if (!date) {
    return "Fecha por confirmar";
  }

  const timestamp = getDateTimestamp(date);
  if (!timestamp) {
    return "Fecha por confirmar";
  }

  return new Intl.DateTimeFormat("es-EC", { dateStyle: "long" }).format(
    new Date(timestamp),
  );
};

export const resolveResourceImage = (image?: string) => {
  if (!image) {
    return undefined;
  }

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${CONFIG_BASE_URL}/${image.replace(/^\/+/, "")}`;
};
