import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { GetMovieInfoDto } from './dto/getMovieInfo.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MovieService {
  private readonly API_KEY: string;
  constructor(private httpService: HttpService, private configService: ConfigService) {
    this.API_KEY = this.configService.get<string>('API_KEY');
  }
  async getMovieInfo(title: string): Promise<GetMovieInfoDto> {
    const { data } = await firstValueFrom(
      this.httpService.get(`/?t=${title}&apikey=${this.API_KEY}`),
    );
    return data;
  }
}
