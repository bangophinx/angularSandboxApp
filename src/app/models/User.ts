export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  address?: {
    street?: string,
    city?: string,
    county?: string
  },
  isActive?: boolean,
  registered?: any,
  hide?: boolean;
}