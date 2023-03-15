import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <>
      <div>uihkhkjhkjhnkj</div>
      {/* <AppBar /> */}
      <Routes>
        <Route path="/" element={<AppBar />} />
        {/* <Route path="movies" element={<div>Movies</div>} /> */}
      </Routes>
    </>
  );
};
