import { IsNotEmpty, Length } from 'class-validator';

export class UserCrate {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty()
  functionUser: string;
}
