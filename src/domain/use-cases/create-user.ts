import { ErrorEntity, Response } from "../../domain/entities";
import { User } from "../../domain/entities/user";
import { Dependencies, Domain } from "../../domain/protocols";

export class CreateUser implements Domain.UseCase {
  constructor(private readonly container: Dependencies.Container) { }

  async execute(req: Domain.Request): Promise<Response> {
    const { name, username, email, password, driver_license } = req.body
    const userExists = await this.container.repository.users.find(username)

    if (userExists) {
      return Response.fromErrorEntity(ErrorEntity.unprocessable('User already exists'))
    }

    const user = User.create(name, username, email, password, driver_license)
    this.container.repository.users.create(user)
    return Response.created(user)
  }
}
