import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const pages = ['Portfolio', 'Resume', 'Contact'];

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
            <AppBar position="sticky" sx={{ backgroundColor: '#333' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton
                            color="inherit"
                            onClick={toggleDrawer(true)}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Link to="/">
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    mr: 2,
                                    mb: 0.2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 600,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Home
                            </Typography>
                        </Link>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Link key={page} to={`/${page.toLowerCase()}`}>
                                    <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ width: 200 }}
            >
                <List
                sx={{backgroundColor: '#333', color: 'white'}}>
                    <Link to="/">
                        <ListItem button onClick={toggleDrawer(false)}>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>
                    {pages.map((page) => (
                        <Link key={page} to={`/${page.toLowerCase()}`}>
                            <ListItem button onClick={toggleDrawer(false)}>
                                <ListItemText primary={page} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}

export default ResponsiveAppBar;