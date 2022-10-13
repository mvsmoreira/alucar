import { Car } from "./car"
import { MetaData } from "./meta-data"
import { User } from "./user"

export type Rental = {
  id: string
  start_date: Date
  end_date: Date
  expected_return_date: Date
  total: number
  car: Car
  user: User
  meta_data: MetaData
}
