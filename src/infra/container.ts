import { Dependencies } from '@/domain/protocols'
import { UserRepository } from './databases/user.repository'

export class Container {
  private constructor(readonly dependencies: Dependencies.Container) {}

  static async init(): Promise<Container> {
    return new Container({
      repository: {
        users: UserRepository.getInstance()
      }
    })
  }
}
