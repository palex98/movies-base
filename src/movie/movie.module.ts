import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { movieProviders } from 'src/movie.providers';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [HttpModule.register({
    baseURL: 'http://www.omdbapi.com',
  }), DatabaseModule],
  controllers: [MovieController],
  providers: [...movieProviders, MovieService],
})
export class MovieModule { }
