import { Connection } from 'typeorm';
import { MovieEntity } from './movie/movie.entity';

export const photoProviders = [
	{
		provide: 'MOVIE_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(MovieEntity),
		inject: ['DATABASE_CONNECTION'],
	},
];
