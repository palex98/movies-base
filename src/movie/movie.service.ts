import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { MovieInfoResponseDto } from './dto/movie.Info.Response.dto';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { MovieEntity } from './movie.entity';

@Injectable()
export class MovieService {
  private readonly API_KEY: string;
  constructor(
    private httpService: HttpService,
     private configService: ConfigService,
     @Inject('MOVIE_REPOSITORY')
  private movieRepository: Repository<MovieEntity>) {
    this.API_KEY = this.configService.get<string>('API_KEY');
  }
  async getMovieInfo(title: string): Promise<MovieInfoResponseDto> {
    const { data } = await firstValueFrom(
      this.httpService.get(`/?t=${title}&apikey=${this.API_KEY}`),
    );
    return data;
  }
  async getAllMovies(): Promise<MovieEntity[]> {
    return this.movieRepository.find();
  }
  async saveMovie(movie: MovieEntity): Promise<MovieEntity> {
    return this.movieRepository.save(movie);
  }
}
