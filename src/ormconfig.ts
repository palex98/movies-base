import { ConnectionOptions } from 'typeorm';


const config: ConnectionOptions = {
	type: 'mysql',
	host: '127.0.0.1',
	port: 3306,
	username: 'theusername',
	password: 'thepw',
	database: 'mydb',
	entities: [__dirname + '/**/*.entity{.ts,.js}'],
	synchronize: true,
};
export default config;