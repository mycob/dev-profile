import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate} from "react-router-dom";
import Loader from './app/loader.component';
const HeaderComponent = lazy(() => import('./app/header.component'));
const HomeComponent = lazy(() => import('./app/home.component'));
const AboutComponent = lazy(() => import('./app/about.component'));
const WorkComponent = lazy(() => import('./app/work.component'));
const ProjectsComponent = lazy(() => import('./app/projects.component'));
const ApproveItComponent = lazy(() => import('./app/workLinks/approve-it.component'));
const ManageItComponent = lazy(() => import('./app/workLinks/manage-it.component'));
const FunilyComponent = lazy(() => import('./app/workLinks/funily.component'));
const AppScriptComponent = lazy(() => import('./app/workLinks/appscript.component'));
const TeachWithAIComponent = lazy(() => import('./app/workLinks/teach-w-ai.component'));
const CertsComponent = lazy(() => import('./app/certificates.component'));
const ToolsComponent = lazy(() => import('./app/tools.component'));

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HandymanIcon from '@mui/icons-material/Handyman';
import { trackEvent } from './utils/analytics';
//node 12.18.3

const actions = [
  { icon: <HomeIcon />, name: 'Home' },
  { icon: <InfoIcon />, name: 'About' },
  { icon: <HandymanIcon />,name: 'Toolbelt' },
  { icon: <WorkIcon />,name: 'Work' },
  { icon: <LocalLibraryIcon />,name: 'Certs' },
  { icon: <AccountTreeIcon />,name: 'Projects' },
];

const App = (props) => {
  const navigate = useNavigate();

  const handleRoute = (route) => {
    trackEvent(`${route}_navigated`);
    if(route === 'Home') {
      return navigate('/');
    }
    navigate(`/${route.toLowerCase()}`)
  }

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>

      <Box 
        component='main' 
        sx={{ 
          marginTop: '5vh', 
          maxWidth: 1000, 
          marginLeft: 2, 
          marginRight: 2
        }}
      >
        <Suspense fallback={<Loader />}>
         <HeaderComponent />
        </Suspense>

        <Routes>
            <Route path="/" 
              element={<Suspense fallback={<Loader />}><HomeComponent /></Suspense>} 
            />
            <Route path="/about" 
              element={<Suspense fallback={<Loader />}><AboutComponent /></Suspense>}
            />
            <Route path="/toolbelt" 
              element={<Suspense fallback={<Loader />}><ToolsComponent /></Suspense>}
            />
            <Route path="/work" 
              element={<Suspense fallback={<Loader />}><WorkComponent /></Suspense>} 
            />
            <Route path="/certs" 
              element={<Suspense fallback={<Loader />}><CertsComponent /></Suspense>}
            />
            <Route path="/projects" 
              element={<Suspense fallback={<Loader />}><ProjectsComponent updatePage={handleRoute} /></Suspense>} 
            />
            <Route path="/funily" 
              element={<Suspense fallback={<Loader />}><FunilyComponent updatePage={handleRoute} /></Suspense>} 
            />
            <Route path="/approve-it" 
              element={<Suspense fallback={<Loader />}><ApproveItComponent updatePage={handleRoute} /></Suspense>} 
            />
            <Route path="/manage-it" 
              element={<Suspense fallback={<Loader />}><ManageItComponent updatePage={handleRoute} /></Suspense>} 
            />
            <Route path="/app-script" 
              element={<Suspense fallback={<Loader />}><AppScriptComponent updatePage={handleRoute} /></Suspense>} 
            />
            <Route path="/teach-with-ai" 
              element={<Suspense fallback={<Loader />}><TeachWithAIComponent updatePage={handleRoute} /></Suspense>} 
            />
        </Routes>

        <SpeedDial
          ariaLabel="SpeedDial basic example"
          className='speed-dial'
          icon={<SpeedDialIcon />}
          FabProps={{
            sx: {
              bgcolor: '#f72585',
              '&:hover': {
                bgcolor: '#4cc9f0'
              }
            }
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              onClick={()=> handleRoute(action.name)}
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              FabProps={{
                sx: {
                  color: '#f72585'
                }
              }}
            />
          ))}
        </SpeedDial>

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
