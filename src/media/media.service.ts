import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Media from './entity/media.entity';
import { MediaDto } from './dtos/media.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}

  //***################################ Create Media ***################################//
  public async createMedia(mediaDto: MediaDto): Promise<Media> {
    try {
      const media = this.mediaRepository.create(mediaDto);
      return this.mediaRepository.save(media);
    } catch (error) {
      throw new HttpException('Failed to create media', HttpStatus.NOT_FOUND);
    }
  }
  //***################################ Find All ***################################//
  public async findAll(
    page = 1,
    perPage = 12,
  ): Promise<{ data: Media[]; count: number }> {
    try {
      const [data, count] = await this.mediaRepository.findAndCount({
        skip: (page - 1) * perPage,
        take: perPage,
        order: { updatedAt: 'DESC' },
      });
      return { data, count };
    } catch (error) {
      throw new HttpException('Failed to find media', HttpStatus.NOT_FOUND);
    }
  }
}
