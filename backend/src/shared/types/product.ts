export interface productQuery {
  brands?: string | string[];
  categories?: string | string[];
  orderBy?: string;
  orderDirection?: "ASC" | "DESC";
  limit?: string;
}
