import { Response } from '../entities'
import { Dependencies } from '../protocols'
import { UseCase } from '../protocols/use-case'

export class ListUsers extends UseCase {
  constructor(private readonly container: Dependencies.Container) {
    super()
  }

  async execute(): Promise<Response> {
    const users = await this.container.repository.users.list()

    return Response.ok(users)
  }
}
