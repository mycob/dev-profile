import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomeComponent from './app/home.component';
import AboutComponent from './app/about.component';
import WorkComponent from './app/work.component';
import ProjectsComponent from './app/projects.component';
import ApproveItComponent from './app/workLinks/approve-it.component';
import ManageItComponent from './app/workLinks/manage-it.component';
import FunilyComponent from './app/workLinks/funily.component';
import AppScriptComponent from './app/workLinks/appscript.component';
import TeachWithAIComponent from './app/workLinks/teach-w-ai.component';

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
import CssBaseline from '@mui/material/CssBaseline';

//node 12.18.3

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
          <Divider />
          <ListItem >
            <Link to="/projects" className="link">
              <ListItemButton onClick={() => toggleDrawer('Projects')}>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </Link>
          </ListItem>
      </List>

    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={ () => toggleDrawer(page) }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { 
              page === "Home" ? "Home" 
                : page === "work" ? "Mike Berago | Work" 
                : page === 'projects' ? "Mike Berago | Projects" 
                : "Mike Berago" 
            }
          </Typography>
        </Toolbar>
      </AppBar>

      <CssBaseline />
     
      <React.Fragment>
        <Drawer
          open={drawerOpen}
          onClose={() => toggleDrawer(page)}
        >
         { list() }
        </Drawer>
      </React.Fragment>

      <Box 
        component='main' 
        sx={{ 
          marginTop: '12vh', 
          maxWidth: 1000, 
          marginLeft: 2, 
          marginRight: 2
        }}
      >
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/work" element={<WorkComponent />} />
            <Route path="/projects" element={<ProjectsComponent updatePage={setPage} />} />
            <Route path="/funily" element={<FunilyComponent updatePage={setPage} />} />
            <Route path="/approve-it" element={<ApproveItComponent updatePage={setPage} />} />
            <Route path="/manage-it" element={<ManageItComponent updatePage={setPage} />} />
            <Route path="/app-script" element={<AppScriptComponent updatePage={setPage} />} />
            <Route path="/teach-w-ai" element={<TeachWithAIComponent updatePage={setPage} />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            {/*<Route path="*" element={<NoMatch />} />*/}
        </Routes>

        <hr style={{ marginTop: '30vh' }} />

        <Typography align='center' sx={{ marginTop: 5, marginBottom: 2.5}}>
          The website is built with React, Javascript, Material UI, Material Icon, and Firebase for hosting.
        </Typography>

        <Typography align='center' sx={{ marginBottom: 20 }}>
          2015 - { new Date().getFullYear() }
        </Typography>

      </Box>
    </Box>
  )
}

export default App;
