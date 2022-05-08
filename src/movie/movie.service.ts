import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { MovieInfoResponseDto } from './dto/movie.Info.Response.dto';
import { ConfigService } from '@nestjs/config';
import { MovieRepository } from 'src/database/repositories/movie.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MovieService {
  private readonly API_KEY: string;
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
    @InjectRepository(MovieRepository, 'DATABASE_CONNECTION')
    private movieRepository: MovieRepository,
  ) {
    this.API_KEY = this.configService.get<string>('API_KEY');
  }
  async getMovieInfo(title: string): Promise<MovieInfoResponseDto> {
    const { data } = await firstValueFrom(
      this.httpService.get(`/?t=${title}&apikey=${this.API_KEY}`),
    );
    return data;
  }
  // async saveMovie(movie: MovieInfoResponseDto): Promise<MovieInfoResponseDto> {
  //   const movieEntity = new MovieEntity();
  // }
}
