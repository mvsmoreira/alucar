import { randomUUID } from 'crypto';
import { MetaData } from './meta-data';
import { Rental } from './rental';

export class User {

  private constructor(
    private id: string,
    public readonly name: string,
    public readonly username: string,
    private password: string,
    public readonly email: string,
    public readonly driver_license: string,
    private admin: boolean,
    private rentals: Rental[],
    public readonly meta_data: MetaData
  ) { }

  static create(
    name: string,
    username: string,
    email: string,
    password: string,
    driver_license: string): User {
    const id = randomUUID()
    const meta_data: MetaData = {
      id: randomUUID(),
      created_at: new Date(),
    }
    const admin = false
    const rentals: Rental[] = []

    return new User(
      id,
      name,
      username,
      email,
      password,
      driver_license,
      admin,
      rentals,
      meta_data,
    )
  }
}
