import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.providers';
import { Movie } from './movie.providers';
import ormconfig from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), MovieModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['./env/development.env'],
    validationSchema: Joi.object({
      API_KEY: Joi.string().required(),
    }),
    validationOptions: {
      allowUnknown: true,
      abortEarly: true,
    },
  })],
  controllers: [AppController],
  providers: [AppService, Movie],
})
export class AppModule { }
