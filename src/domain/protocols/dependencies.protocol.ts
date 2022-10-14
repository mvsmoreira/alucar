// DTO = Data Transfer Object

import { Category } from "domain/entities/category"
import { User } from "domain/entities/user"

export declare namespace Dependencies {
  export interface Repository<T> {
    create(entity: T): void
    list(): T[]
    find(reference: any): T | undefined
  }

  export interface Container {
    repository: {
      users: Repository<User>
      categories?: Repository<Category>
    }
  }
}
