import { IsString } from 'class-validator';

export class GetMovieInfoDto {
	@IsString()
	readonly title: string;
}