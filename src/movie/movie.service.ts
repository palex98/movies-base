import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) {}
  getMovieInfo(titleName: string): any {
    const movieName = titleName.trim();
    return this.httpService.get(
      `http://www.omdbapi.com/?t=${movieName}&apikey=b53c371c`,
    );
  }
}
