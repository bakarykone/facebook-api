export interface PageInfo<T> {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: T;
  endCursor: T;
}
