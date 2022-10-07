import { Response } from "domain/entities/response"

export declare namespace Domain {
  export type Request = {
    headers?: any
    query?: any
    params?: any
    body?: any
    user?: any
  }

  export type MetaData = {
    name: string
    description: string
    route: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  }

  export interface UseCase {
    getMetaData: () => MetaData
    isAuthorized: (request: Request) => void
    execute: (request: Request) => Promise<Response>
  }
}
