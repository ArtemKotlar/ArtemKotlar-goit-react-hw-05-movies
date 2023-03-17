import { Box } from 'components/Box';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const release = release_date.slice(0, 4);
  const rating = vote_average.toFixed(1);
  const genresList = genres.map(genre => genre.name).join(', ');

  return (
    <Box display="flex" gridGap={6}>
      <div>
        <img src={imgUrl} alt={title} width="350" />
      </div>
      <div>
        <h2>
          {title} <span>({release})</span>
        </h2>
        <p>User score: {rating}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres:</h3>
        <p>{genresList}</p>
      </div>
    </Box>
  );
};
