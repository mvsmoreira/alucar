import { ErrorEntity, Response } from "../../domain/entities";
import { User } from "../../domain/entities/user";
import { Dependencies, Domain } from "../../domain/protocols";

export class FindUser implements Domain.UseCase {
  constructor(private readonly container: Dependencies.Container) { }

  async execute(req: Domain.Request): Promise<Response> {
    const { username } = req.params
    const user = await this.container.repository.users.find(username)

    if (!user) {
      return Response.notFound('User not found')
    }

    return Response.ok(user)
  }
}
