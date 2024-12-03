import { User } from 'src/Modal/User';

export abstract class IUserRepository {
  abstract findById(id: string): Promise<User | null>;
  abstract create(name: string, fuctionUser: string): Promise<User>;
}
