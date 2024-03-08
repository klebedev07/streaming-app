import { User } from './user.interface'

export interface IAuthFormData extends Pick<User, 'email' | 'password'> {}
