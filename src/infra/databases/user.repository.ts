import { User } from '@/domain/entities/user'
import { Dependencies } from '@/domain/protocols'

export class UserRepository implements Dependencies.Repository<User> {
  private readonly repository: User[]

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

  async create(entity: User): Promise<void> {
    await this.repository.push(entity)
  }

  async list(): Promise<User[]> {
    return this.repository
  }

  async find(username: string): Promise<User | undefined> {
    return this.repository.find((user) => username === user.username)
  }
}
