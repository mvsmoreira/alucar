// DTO = Data Transfer Object

import { Category } from "domain/entities/category"
import { User } from "domain/entities/user"

export declare namespace Dependencies {
  export interface Repository<T> {
    create(data: Partial<T>): Promise<void>
    list(): Promise<T[]>
    findUnique(reference: string): Promise<Partial<T | undefined>>
  }

  export interface Container {
    repository?: {
      users: Repository<User>
      categories: Repository<Category>
    }
  }
}
