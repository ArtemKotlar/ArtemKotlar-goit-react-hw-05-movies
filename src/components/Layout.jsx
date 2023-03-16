import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from './Box';
import { AppBar } from './AppBar/AppBar';

export const Layout = () => {
  <Box display="grid" gridTemplateColumns="200px 1fr">
    <AppBar />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </Box>;
};
