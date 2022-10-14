import { Response } from "domain/entities";
import { App, Domain } from "domain/protocols";
import { CreateUser } from "domain/use-cases/create-user";
import express, { Express, json, NextFunction, Request, Response as ExpressResponse } from 'express'
import { Container } from "infra/container";

export class ExpressAdapter implements App.Http {
  app: Express
  constructor() {
    this.app = express()
    this.app.use(json())

    this.app.post('/users', this.useCaseToRoute(CreateUser))
  }
  listen(port: number): void {
    this.app.listen(port)
  }

  useCaseToRoute(UseCase: any) {
    return async (
      { body, params, query }: Request,
      res: ExpressResponse,
      next: NextFunction): Promise<void> => {
      const container = await Container.init()

      const request: Domain.Request = { body, params, query }
      const useCase = new UseCase(container.dependencies)
      const response: Response = await useCase.execute(request)
      res.status(response.statusCode).json(response.data)
    }
  }
}
