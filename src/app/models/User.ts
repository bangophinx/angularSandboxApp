export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    county?: string
  },
  image?: string,
  isActive?: boolean,
  balance?: number,
  registered?: any
}