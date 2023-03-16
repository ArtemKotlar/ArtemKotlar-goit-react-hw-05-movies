import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getCast } from 'api/MoviesApi';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getCast(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div>
      {cast.length === 0 && <p>Sorry, we don't have any cast on this movie</p>}

      {cast.map(({ id, profile_path, name, original_name, character }) => (
        <NavLink key={id}>
          <img
            width="200"
            src={
              profile_path
                ? imgBaseUrl + profile_path
                : 'https://svgsilh.com/svg_v2/1363011.svg'
            }
            alt="Foto"
          />
          <div>
            <h2>{name && original_name}</h2>
            <p>{character}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Cast;
