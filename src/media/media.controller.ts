import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Query,
  Get,
  Param,
  Patch,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaDto } from './dtos/media.dto';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  public async createMedia(@Body() mediaDto: MediaDto) {
    try {
      const media = await this.mediaService.createMedia(mediaDto);
      return {
        status: 'success',
        message: 'Media successfully created',
        data: media,
      };
    } catch (error) {
      throw new HttpException('Failed to create media', HttpStatus.NOT_FOUND);
    }
  }

  @Get('search')
  public async searchMedia(@Query('query') query: string) {
    const media = await this.mediaService.searchMedia(query);
    return {
      status: 'success',
      message: `${media.length} media found`,
      data: media,
    };
  }  

  @Get()
  async findAll(
    @Query('page') page: number,
    @Query('perPage') perPage: number,
  ) {
    try {
      const { data, count } = await this.mediaService.findAll(page, perPage);
      return {
        status: 'success',
        message: 'Fetched successfully',
        data,
        count,
      };
    } catch (error) {
      throw new HttpException('Failed to fetch results', HttpStatus.NOT_FOUND);
    }
  }


  @Get(':id')
  async getMediaById(@Param('id') id: string) {
    try {
      const media = await this.mediaService.getMediaById(Number(id));
      return {
        status: 'success',
        message: 'Media fetched successfully',
        data: media,
      };
    } catch (error) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }
  }

@Patch(':id')
    public async updateMedia(@Param('id') id: number, @Body() mediaDto: MediaDto) {
  try {
    const media = await this.mediaService.updateMedia(id, mediaDto);
    return { status: 'success', message:'Updated successfully', data: media };
  } catch (error) {
    throw new HttpException('Failed to update media', HttpStatus.NOT_FOUND);
  }
}

}
