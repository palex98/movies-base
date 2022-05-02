import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { GetMovieInfoDto } from './dto/getMovieInfo.dto';
@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) { }
  async getMovieInfo(title: string): Promise<GetMovieInfoDto> {
    const key = process.env.API_KEY;
    const { data } = await firstValueFrom(
      this.httpService.get(`/?t=${title}&apikey=${key}`),
    );
    return data;
  }
}
