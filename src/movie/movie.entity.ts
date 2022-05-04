import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movie' })
export class MovieEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	yearReleased: string;

	@Column()
	runtime: string;

	@Column()
	genre: string;

	@Column({ default: "N/A" })
	imdbRating: string;
}