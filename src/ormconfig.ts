import { ConnectionOptions } from 'typeorm';
import { MovieEntity } from './movie/movie.entity';

const config: ConnectionOptions = {
	name: 'DATABASE_CONNECTION',
	type: 'mysql',
	host: '127.0.0.1',
	port: 3306,
	username: 'theusername',
	password: 'thepw',
	database: 'mydb',
	entities: [MovieEntity],
	synchronize: true,
};
export default config;