export interface ResourceFrontmatter {
  title?: string;
  description?: string;
  date?: string;
  author?: string;
  image?: string;
  cover?: string;
  tags?: string[];
}

export interface Resource {
  slug: string;
  title: string;
  description: string;
  mdxPath: string;
  image?: string;
  author?: string;
  date?: string;
  tags?: string[];
}

export interface ResourceDocument {
  resource: Resource;
  content: string;
  frontmatter: ResourceFrontmatter;
}
