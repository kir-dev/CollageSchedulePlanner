import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class User {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  @IsNotEmpty()
  authSchId: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  profilePicture: string;

  @IsInt()
  @Min(0)
  groups: number;

  @IsInt()
  @Min(0)
  events: number;
}
