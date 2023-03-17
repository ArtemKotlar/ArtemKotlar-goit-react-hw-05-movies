import { MovieCard } from 'components/MovieCart/MovieCart';
import { getDetails } from 'api/MoviesApi';
import { useState, useEffect } from 'react';
import { useParams, useLocation, NavLink, Outlet } from 'react-router-dom';


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
      <div>
        <NavLink to={backLink}>← Go back</NavLink>
        <MovieCard movie={movieDetails} />
      </div>
      <div>
        <NavLink to={'cast'} state={{ from: backLink }}>
          Cast
        </NavLink>
        <NavLink to={'reviews'} state={{ from: backLink }}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
