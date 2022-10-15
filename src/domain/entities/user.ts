import { randomUUID } from 'crypto'
import { MetaData } from './meta-data'
import { Rental } from './rental'

export class User {
  private constructor(
    private readonly id: string,
    public readonly name: string,
    public readonly username: string,
    private readonly password: string,
    public readonly email: string,
    public readonly driverLicense: string,
    private readonly admin: boolean,
    private readonly rentals: Rental[],
    public readonly metaData: MetaData
  ) {}

  static create(
    name: string,
    username: string,
    email: string,
    password: string,
    driverLicense: string
  ): User {
    const id = randomUUID()
    const metaData: MetaData = {
      id: randomUUID(),
      created_at: new Date()
    }
    const admin = false
    const rentals: Rental[] = []

    return new User(
      id,
      name,
      username,
      password,
      email,
      driverLicense,
      admin,
      rentals,
      metaData
    )
  }
}
