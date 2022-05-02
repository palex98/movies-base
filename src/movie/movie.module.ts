import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [HttpModule.register({
    baseURL: 'http://www.omdbapi.com',
  })],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule { }
