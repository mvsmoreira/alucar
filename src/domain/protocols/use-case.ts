import { Response } from '../entities/response'
import { Dependencies } from './dependencies.protocol'
import { Domain } from './domain.protocol'

export class UseCase implements Domain.UseCase {
  constructor(private readonly container: Dependencies.Container) { }

  async execute(request: Domain.Request): Promise<Response> {
    throw new Error('Method not implemented')
  }
}
