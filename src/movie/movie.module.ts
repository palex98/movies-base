import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import {
  getConnectionToken,
  getRepositoryToken,
} from '@nestjs/typeorm';
import { MovieRepository } from 'src/database/repositories/movie.repository';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'http://www.omdbapi.com',
    }),
  ],
  controllers: [MovieController],
  providers: [
    MovieService,
    {
      provide: getRepositoryToken(MovieRepository, 'DATABASE_CONNECTION'),
      useFactory: (connection) =>
        connection.getCustomRepository(MovieRepository),
      inject: [getConnectionToken('DATABASE_CONNECTION')],
    },
  ],
})
export class MovieModule {}
