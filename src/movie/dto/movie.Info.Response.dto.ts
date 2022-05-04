import { IsString } from 'class-validator';

export class MovieInfoResponseDto {
  @IsString()
  readonly Title: string;
  @IsString()
  readonly Year: string;
  @IsString()
  readonly Released: string;
  @IsString()
  readonly Runtime: string;
  @IsString()
  readonly Genre: string;
  @IsString()
  readonly Director: string;
  @IsString()
  readonly Actors: string;
  @IsString()
  readonly Plot: string;
  @IsString()
  readonly Language: string;
  @IsString()
  readonly Country: string;
  @IsString()
  readonly Poster: string;
  @IsString()
  readonly imdbRating: string;
}
