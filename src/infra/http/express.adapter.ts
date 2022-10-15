import { App, Dependencies, Domain } from '@/domain/protocols'
import { CreateUser } from '@/domain/use-cases/create-user'
import { FindUser } from '@/domain/use-cases/find-user'
import { ListUsers } from '@/domain/use-cases/list-user'
import express, {
  Express,
  json,
  Request,
  Response as ExpressResponse
} from 'express'

export class ExpressAdapter implements App.Http {
  app: Express

  constructor(private readonly container: Dependencies.Container) {
    this.app = express()
    this.app.use(json())

    this.app.get('/', (req, res) => res.send('Hello World'))

    this.app.get('/users', this.useCaseToRoute(ListUsers))
    this.app.post('/users', this.useCaseToRoute(CreateUser))
    this.app.get('/users/:username', this.useCaseToRoute(FindUser))
  }

  listen(port: number): void {
    this.app.listen(port, () => console.log(`App is running at http://localhost:${port}`))
  }

  useCaseToRoute(UseCase: any) {
    return async (
      { body, params, query, headers }: Request,
      res: ExpressResponse
    ): Promise<void> => {
      const request: Domain.Request = { body, params, query, headers }
      const useCase = new UseCase(this.container)
      const response = await useCase.execute(request)
      res.status(response.statusCode).json(response.data)
    }
  }
}
