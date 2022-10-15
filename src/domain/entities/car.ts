import { Category } from './category'
import { MetaData } from './meta-data'

export type Car = {
  id: string
  name: string
  description: string
  daily_rate: number
  available: boolean
  license_plate: string
  fine_amount: number
  brand: string
  meta_data: MetaData
  category: Category
  images: CarImage[]
  specifications: Specifications
}

export type CarImage = {
  id: string
  image_name: string
  meta_data: MetaData
}

export type Specifications = {
  id: string
  name: string
  description: string
  meta_data: MetaData
}
