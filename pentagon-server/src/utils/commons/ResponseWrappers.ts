export class SuccessResponse<T> {
  statusCode: string;
  message: string;
  data: T;

  constructor({
    statusCode = 'PENTAGON-000',
    message = '',
    data,
  }: {
    statusCode?: string;
    message?: string;
    data?: T;
  }) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
