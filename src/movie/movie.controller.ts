import { Controller, Get, Query, Req } from '@nestjs/common';
import { GetMovieInfoDto } from './dto/get.Movie.Info.dto';
import { MovieEntity } from './movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }
  @Get()
  findInfo(@Query() params: GetMovieInfoDto) {
  const result = this.movieService.getMovieInfo(params.title);
  const movieEntity: MovieEntity = new MovieEntity(); 
    this.movieService.saveMovie(movieEntity);
  return result;
   
  }
}
