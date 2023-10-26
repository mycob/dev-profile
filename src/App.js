import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomeComponent from './app/home.component';
import AboutComponent from './app/about.component';
import WorkComponent from './app/work.component';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const App = () => {

  const [ loading, setLoading ] = useState(false);
  const [ page, setPage ] = useState('Home');
  const [ drawerOpen, setDrawer ] = useState(false);

  useEffect(() => {
    
    

  },[]);

  const toggleDrawer = (selectedPage=page) => {
    setPage(selectedPage);
    setDrawer(!drawerOpen);
  }

  const list = () => (
    <Box
      sx={{ width: 150 }}
      role="presentation"
      //onClick={toggleDrawer}
    >
      <List>
          <ListItem >
            <Link to="/" className="link">
              <ListItemButton onClick={() => toggleDrawer('Home')}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider />
          <ListItem >
            <Link to="about" className="link">
              <ListItemButton onClick={() => toggleDrawer('About')}>
                <ListItemText primary="About" />
              </ListItemButton>
            </Link>
          </ListItem>
          <Divider />
          <ListItem >
            <Link to="/work" className="link">
              <ListItemButton onClick={() => toggleDrawer('Work')}>
                <ListItemText primary="Work" />
              </ListItemButton>
            </Link>
          </ListItem>
      </List>

    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(page)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { page }
          </Typography>
        </Toolbar>
      </AppBar>

      <React.Fragment>
        <Drawer
          open={drawerOpen}
          onClose={() => toggleDrawer(page)}
        >
         { list() }
        </Drawer>
      </React.Fragment>

      <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/work" element={<WorkComponent />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/*<Route path="*" element={<NoMatch />} />*/}
      </Routes>
    </Box>
  )
}

export default App;
