import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { AppService } from './app.service';
import { UserCrate } from './dtos/user-create';
import { IUserRepository } from './repositories/user-repository';
import { User } from './Modal/User';

@Controller('app')
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private _userRepository: IUserRepository) {}

  @Get('user/get-by-id/:id')
  async getHello(@Param() params: any): Promise<User> {
    const id = params.id;

    const result = await this._userRepository.findById(id);

    // const member = await this.prisma.user.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     function: functionUser,
    //   },
    // });

    return result;
  }

  @Post('user/create')
  async create(@Body() body: UserCrate): Promise<User> {
    const { name, functionUser } = body;

    const result = await this._userRepository.create(name, functionUser);

    // const member = await this.prisma.user.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     function: functionUser,
    //   },
    // });

    return result;
  }
}
