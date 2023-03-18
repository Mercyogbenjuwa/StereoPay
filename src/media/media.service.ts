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
}
