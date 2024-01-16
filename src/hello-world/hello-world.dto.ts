import { IsNotEmpty, IsString } from 'class-validator';

export class createWorldDto {
  hell: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
