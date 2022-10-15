import { Category } from '../entities/category'
import { User } from '../entities/user'

export declare namespace Dependencies {
  export interface Repository<T> {
    create: (entity: T) => Promise<void>
    list: () => Promise<T[]>
    find: (reference: any) => Promise<T | undefined>
  }

  export interface Container {
    repository: {
      users: Repository<User>
      categories?: Repository<Category>
    }
  }
}
