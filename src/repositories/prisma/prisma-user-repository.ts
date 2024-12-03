import { PrismaService } from 'src/database/prisma.service';
import { IUserRepository } from '../user-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { User } from 'src/Modal/User';

@Injectable()
export class PrismaUserRepository extends IUserRepository {
  constructor(private _prisma: PrismaService) {
    super();
  }

  findById(id: string): Promise<User | null> {
    const user = this._prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        function: false,
      },
    });

    return user;
  }

  async create(name: string, fuctionUser: string): Promise<User> {
    const userCreate = await this._prisma.user.create({
      data: {
        id: randomUUID(),
        name,
        function: fuctionUser,
      },
    });

    return userCreate;
  }
}
