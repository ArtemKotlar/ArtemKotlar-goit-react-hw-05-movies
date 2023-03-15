import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';
import { BiHomeSmile, BiCameraMovie } from 'react-icons/bi';

const navItems = [
  { href: 'home', text: 'Home', icon: BiHomeSmile },
  { href: 'movies', text: 'Movies', icon: BiCameraMovie },
];

export const AppBar = () => {
  <Box as="header" p={4} height="100vw" borderRight="1px solid black">
    <Box as="nav" display="flex">
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavItem to={href} key={href}>
          <Icon size="16" />
          {text}
        </NavItem>
      ))}
    </Box>
  </Box>;
};
