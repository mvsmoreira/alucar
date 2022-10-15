import { ErrorEntity } from './error'

export class Response {
  private constructor(readonly statusCode: number, readonly data: any) {}

  static ok(data: any): Response {
    return new Response(200, data)
  }

  static created(data: any): Response {
    return new Response(201, data)
  }

  static noContent(): Response {
    return new Response(204, null)
  }

  static notFound(message: string): Response {
    return new Response(404, message || 'Resource not found')
  }

  static fromErrorEntity(error: ErrorEntity): Response {
    return new Response(error.code, error.message)
  }
}
