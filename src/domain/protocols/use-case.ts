import { Response } from '../entities'
import { Domain } from './domain.protocol'

export abstract class UseCase implements Domain.UseCase {
  async execute(request: Domain.Request): Promise<Response> {
    throw new Error('Method not implemented')
  }

  isAuthenticated(request: Domain.Request): boolean {
    return true
  }
}
