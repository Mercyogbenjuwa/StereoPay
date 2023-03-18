import { IsNotEmpty, IsUUID, IsEnum, IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

enum MediaStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

enum MediaType{
    audio= 'audio',
    image= 'image'
}


export class MediaDto {
  @IsUUID()
  id: number;

  @IsEnum(MediaType)
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  url: string;

  @IsEnum(MediaStatus)
  @IsNotEmpty()
  status: string;

  @IsDateString()
  @IsNotEmpty()
  createdAt: string;

  @IsDateString()
  @IsNotEmpty()
  updatedAt: string;

  @IsDateString()
  @IsOptional()
  deletedAt: string;
}
