import { Category, Group, Priority, Status, User } from '@prisma/client';
import { IsDate, IsDateString, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Event {
  @IsInt()
  @IsOptional()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  location: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  @IsOptional()
  endDate: Date;

  @IsDateString()
  @IsOptional()
  startTime: Date;

  @IsDateString()
  @IsOptional()
  endTime: Date;

  @IsEnum(Priority)
  @IsOptional()
  priority: Priority;

  @IsEnum(Priority)
  @IsOptional()
  status: Status;

  @IsInt()
  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  category: Category;

  @IsInt()
  @IsOptional()
  ownerUserId: number;

  @IsOptional()
  ownerUser: User;

  @IsInt()
  @IsOptional()
  ownerGroupId: number;

  @IsOptional()
  ownerGroup: Group;
}
