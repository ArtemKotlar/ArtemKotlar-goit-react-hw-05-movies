import { Box } from 'components/Box';
import { useLocation } from 'react-router-dom';
import { Link, MovieImg, MovieItem } from './Movie.styled';

export const MovieSearch = ({ movies }) => {
  const location = useLocation();
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    movies && (
      <Box backgroundImage="url(https://blog.kniga.biz.ua/wp-content/uploads/2015/12/wallpaper-color-style-background-color-2015959044.jpg)">
        <Box display="flex" flexWrap="wrap" justifyContent="center" gridGap={5}>
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
        </Box>
      </Box>
    )
  );
};
