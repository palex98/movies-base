import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from './movie';

describe('Movie', () => {
  let provider: Movie;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Movie],
    }).compile();

    provider = module.get<Movie>(Movie);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
