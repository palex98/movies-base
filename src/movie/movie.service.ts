import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
  getMovieInfo(titleName: string): any {
    const movieName = titleName.trim();
    return `http://www.omdbapi.com/?t=${movieName}&apikey=b53c371c`;
  }
}
