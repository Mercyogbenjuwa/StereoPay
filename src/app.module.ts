import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Media from './media/entity/media.entity';
import { MediaModule } from './media/media.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '09027918134',
    database: 'stereo',
    entities: [Media],
    synchronize: true,
  }),
    MediaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
