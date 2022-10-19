export interface Response<T> {
  messages: string[];
  body: T;
  status: string
}
