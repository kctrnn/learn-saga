export interface PaginationResponse {
  _limit: Number;
  _page: Number;
  _total: Number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationResponse;
}
