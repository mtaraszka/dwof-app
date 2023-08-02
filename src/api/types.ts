export type PaginationType = {
  page: number,
  pageSize: number,
  pageCount: number,
  total: number,
}

export type MetaType = {
  pagination: {
    pagination: PaginationType,
  }
}

export type IngredientType = {
  id: number,
  slug: string,
  grammage: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  quantity: number,
}

export interface FormulaType {
  id: number,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  title: string,
  description: string,
  recipe: string,
  ingredients: Array<IngredientType>,
}
