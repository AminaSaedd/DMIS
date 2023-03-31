export class PaginatedResult<T> {
  page: number = 0;
  size: number = 1000;
  items: T[] = [];
  totalItems: number = 0;
  totalPages: number = 0;
}
