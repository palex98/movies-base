import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { GetMovieInfoDto } from './dto/getMovieInfo.dto';
@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) {}
  async getMovieInfo(titleName: string): Promise<GetMovieInfoDto> {
    const movieName = titleName.trim();
    const { data } = await firstValueFrom(
      this.httpService.get(
        `http://www.omdbapi.com/?t=${movieName}&apikey=b53c371c`,
      ),
    );
    return data;
  }
}
