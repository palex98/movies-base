import { MovieEntity } from 'src/movie/movie.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(MovieEntity)
export class MovieRepository extends Repository<MovieEntity>{
	getAllMovies(): Promise<MovieEntity[]> {
		return this.find();
	}
	saveMovie(movie: MovieEntity): Promise<MovieEntity> {
		return this.save(movie);
	}
}
