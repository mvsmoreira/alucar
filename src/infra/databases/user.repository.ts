import { User } from "domain/entities/user";
import { Dependencies } from "domain/protocols";

export class UserRepository implements Dependencies.Repository<User> {
  private repository: User[]

  private static instance: UserRepository

  private constructor() {
    this.repository = []
  }

  static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository()
    }
    return UserRepository.instance
  }

  create(entity: User): void {
    this.repository.push(entity)
  }

  list(): User[] {
    return this.repository
  }

  find(driver_license: string): User | undefined {
    return this.repository.find(user => driver_license === user.driver_license)
  }

}
