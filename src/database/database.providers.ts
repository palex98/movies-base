import { Connection, createConnection } from 'typeorm';

export const databaseProviders = [
	{
		provide: 'DATABASE_CONNECTION',
		useFactory: async (): Promise<Connection> => {
			return await createConnection({
				type: 'mysql',
				host: 'localhost',
				port: 3306,
				username: 'theusername',
				password: 'thepw',
				database: 'mydb',
				synchronize: true,
				entities: [__dirname + '/../**/*.entity{.ts,.js}'],
			});

		},
	},];	