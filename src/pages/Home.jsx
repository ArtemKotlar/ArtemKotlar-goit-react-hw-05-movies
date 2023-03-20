import { getTrending } from 'api/MoviesAPI';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then(res => setMovies(res.data.results));
  }, []);

  return <MovieList movies={movies} />;
};

export default Home;
