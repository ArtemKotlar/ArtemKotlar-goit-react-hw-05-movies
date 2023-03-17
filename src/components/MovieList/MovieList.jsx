import { useLocation } from 'react-router-dom';
import { Link, MovieImg, MovieItem, MoviesBlock } from './Movie.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    movies && (
      
      <MoviesBlock>
        {movies.map(({ id, title, original_name, poster_path }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={
                  poster_path
                    ? imageBaseUrl + poster_path
                    : 'https://svgsilh.com/svg_v2/1363011.svg'
                }
                alt="Foto"
              />
              <p>{title ?? original_name}</p>
            </Link>
          </MovieItem>
        ))}
      </MoviesBlock>
    )
  );
};
