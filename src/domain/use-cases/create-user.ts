import { ErrorEntity, Response } from "domain/entities";
import { User } from "domain/entities/user";
import { Dependencies, Domain } from "domain/protocols";

export class CreateUser implements Domain.UseCase {
  constructor(private readonly container: Dependencies.Container) {}

  async execute(request: Domain.Request): Promise<Response | ErrorEntity> {
    const {name, username, email, password, driver_license} = request.body
    const userExists = await this.container.repository?.users.findUnique(driver_license)

    if (userExists) {
      return ErrorEntity.unprocessable('User already exists')
    }

    const user = User.create(name, username, email, password, driver_license)
    const createdUser = await this.container.repository?.users.create(user)
    return Response.created(createdUser)
  }
}
