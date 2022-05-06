import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from '@nestjs/config';
import { movieProviders } from './movie.providers';


@Module({
  imports: [MovieModule, ConfigModule.forRoot({
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
  providers: [AppService, ...movieProviders],
})
export class AppModule { }
