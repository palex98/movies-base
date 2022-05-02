import { Controller, Get, Req } from '@nestjs/common';


import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) { }
  @Get()
  findInfo(@Req() title: string) {
    const BASE_URL = 'http://www.omdbapi.com/';
    const API_KEY = 'b53c371c';

    return this.movieService.getMovieInfo(
      `${BASE_URL}?t=${title}&apikey=${API_KEY}`);
  }
}
