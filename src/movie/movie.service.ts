import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { GetMovieInfoDto } from './dto/getMovieInfo.dto';
@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) { }
  async getMovieInfo(url: string): Promise<GetMovieInfoDto> {

    const { data } = await firstValueFrom(
      this.httpService.get(url),
    );
    return data;
  }
}
