import { getByName } from 'api/MoviesApi';

import { MovieSearch } from 'components/MovieList/MovieSearch';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    getByName(query).then(res => setMovies(res.data.results));
  }, [query, searchParams]);

  const handleChange = element => setQuery(element.target.value);

  const handleSubmit = element => {
    element.preventDefault();

    setSearchParams(query !== '' ? { query } : {});
  };
  return (
    <>
      <SearchBox onChange={handleChange} onSubmit={handleSubmit} />
      <MovieSearch movies={movies} />
    </>
  );
};

export default Movies;
