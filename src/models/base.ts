
export type BaseResponse<T> = {
  code: string
  message: string
  data: T
}

export type BasePaginationResponse<T> = BaseResponse<{
  list: T[]
  pagination: {
    total_page: number
    total_record: number
    current_page: number
    page_size: number
  }
}>