import { Box } from 'components/Box';
import { NavItem } from './AppBar.styled';
import { BiHomeSmile, BiCameraMovie } from 'react-icons/bi';

const navItems = [
  { href: '/', text: 'Home', icon: BiHomeSmile },
  { href: 'movies', text: 'Movies', icon: BiCameraMovie },
];

export const AppBar = () => {
  return (
    <Box as="header" bg="background" p={4} boxShadow="shadow">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavItem to={href} key={href}>
            <Icon size="20" />
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
