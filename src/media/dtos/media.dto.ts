import {
  IsNotEmpty,
  IsEnum,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

enum MediaStatus {
  Active = 'Active',
  Inactive = 'Inactive',
}

enum MediaType {
  audio = 'audio',
  image = 'image',
}

export class MediaDto {
  @IsOptional()
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
}
