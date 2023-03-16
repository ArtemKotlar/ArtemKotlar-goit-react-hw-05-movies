import { NavLink, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    movies && (
      <ul>
        {movies.map(({ id, title, original_name, poster_path }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? imageBaseUrl + poster_path
                    : 'https://svgsilh.com/svg_v2/1363011.svg'
                }
                alt="Foto"
              />
              <p>{title ?? original_name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    )
  );
};
