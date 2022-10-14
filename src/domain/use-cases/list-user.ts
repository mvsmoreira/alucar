import { Response } from '../entities/response'
import { Dependencies } from '../protocols'

export class ListUsers {
  constructor(private readonly container: Dependencies.Container) { }

  async execute(): Promise<Response> {
    const users = await this.container.repository.users.list()

    return Response.ok(users)
  }
}
