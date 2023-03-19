import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  //***################################ Getting Media By Id***################################//
  public async getMediaById(id: number): Promise<Media> {
    const media = await this.mediaRepository.findOne({ where: { id } });
    if (!media) {
      throw new NotFoundException(`Media with ID ${id} not found`);
    }
    return media;
  }

  //***################################ Search Media ***################################//
  public async searchMedia(query: string): Promise<Media[]> {
    try {
      const qb = this.mediaRepository.createQueryBuilder('media');
      const media = await qb
        .where(`media.name LIKE :query OR media.description LIKE :query`, { query: `%${query}%` })
        .getMany();
      if (media.length === 0) {
        throw new NotFoundException('No media found');
      }
      return media;
    } catch (error) {
      throw new HttpException('No media found', HttpStatus.NOT_FOUND);
    }
  }
//***################################ Update Media ***################################//
  public async updateMedia(id: number, mediaDto: MediaDto): Promise<Media> {
    const media = await this.mediaRepository.findOne({ where: { id } });
    if (!media) {
      throw new HttpException('Media not found', HttpStatus.NOT_FOUND);
    }
    media.status = mediaDto.status;
    return this.mediaRepository.save(media);
  }  

  //***################################ Delete Media ***################################//
  public async removeMedia(id: string): Promise<void> {
    try {
      await this.mediaRepository.softDelete(id);
    } catch (error) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }
  }

}

