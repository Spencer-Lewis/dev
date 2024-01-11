import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'Home', icon: <HomeIcon />, route: './dev' },
  { label: 'Portfolio', icon: <WorkIcon />, route: './dev/portfolio' },
  { label: 'Resume', icon: <DescriptionIcon />, route: './dev/resume' },
  { label: 'Contact', icon: <MailOutlineIcon />, route: './dev/contact' },
];

function ResponsiveAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      ((event.key === 'Tab' || event.key === 'Shift'))
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: '#333', top: 0 }}>
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            onClick={toggleDrawer(true)}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {pages.map((page) => (
              <Link key={page.label} to={`${page.route}`} style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    mx: 1,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Segoe UI',
                  }}
                >
                  <ListItemIcon sx={{ color: 'white', mr: -3, mb: 0.25 }}>{page.icon}</ListItemIcon>
                  <p className='font-sans'>{page.label}</p>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ width: 200 }}
      >
        <List sx={{ backgroundColor: '#333', color: 'white' }}>
          {pages.map((page) => (
            <Link key={page.label} to={`${page.route}`} style={{ textDecoration: 'none' }}>
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemIcon sx={{ color: 'white', mr: -3, mb: 0 }}>{page.icon}</ListItemIcon>
                <ListItemText primary={<p className='font-sans'>{page.label}</p>} />
                
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default ResponsiveAppBar;
