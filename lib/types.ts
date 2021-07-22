export type ListItem = {
  contents: BlogContent[],
  totalCount: number,
  offset: number,
  limit: number,
}

export type BlogContent = {
  id: number,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  title: string,
  body: string,
  category: Category,
}

export type Category = {
  id: number,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string,
}
