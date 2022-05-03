import { Controller, Get, Query, Req } from '@nestjs/common';
import { GetMovieInfoDto } from './dto/setTitle.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }
  @Get()
  findInfo(@Query() params: GetMovieInfoDto) {

    return this.movieService.getMovieInfo(params.title);
  }
}
