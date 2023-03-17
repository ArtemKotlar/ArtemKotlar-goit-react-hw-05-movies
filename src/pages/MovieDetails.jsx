import { MovieCard } from 'components/MovieCart/MovieCart';
import { getDetails } from 'api/MoviesApi';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';
import { Back, Container } from './MovieDetails.styled';


const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getDetails(movieId).then(res => setMovieDetails(res.data));
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }
  const backLink = location.state?.from ?? '/';

  return (
    <>
      <Container>
        <Back to={backLink}>← Go back</Back>
        <MovieCard movie={movieDetails} />
      </Container>
      <div>
        <Back to={'cast'} state={{ from: backLink }}>
          Cast
        </Back>
        <Back to={'reviews'} state={{ from: backLink }}>
          Reviews
        </Back>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
