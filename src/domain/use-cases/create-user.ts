import { Response, ErrorEntity } from '../entities'
import { User } from '../entities/user'
import { Domain, Dependencies } from '../protocols'

export class CreateUser implements Domain.UseCase {
  constructor(private readonly container: Dependencies.Container) {}

  async execute(req: Domain.Request): Promise<Response> {
    const { name, username, email, password, driverLicense } = req.body
    const userExists = await this.container.repository.users.find(username)

    if (userExists) {
      return Response.fromErrorEntity(
        ErrorEntity.unprocessable('User already exists')
      )
    }

    const user = User.create(name, username, email, password, driverLicense)
    this.container.repository.users.create(user)
    return Response.created(user)
  }
}
