import { UseCase } from '../../infra/http/express.adapter'
import { Response } from '../entities/response'
import { Dependencies } from '../protocols'

export class ListUsers extends UseCase {
  constructor(private readonly container: Dependencies.Container) {
    super(container)
  }

  async execute(): Promise<Response> {
    const users = await this.container.repository.users.list()

    return Response.ok(users)
  }
}
