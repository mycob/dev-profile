import React, { lazy,Suspense } from 'react';
import Box from '@mui/material/Box';
import Loader from './loader.component';
import ToolsComponent from './tools.component';

const AboutComponent = lazy(() => import('./about.component'));
const WorkComponent = lazy(() => import('./work.component'));
const ProjectsComponent = lazy(() => import('./projects.component'));
const CertsComponent = lazy(() => import('./certificates.component'));

const HomeComponent = () => {

	return (
		<Box sx={{ flexGrow: 1 }}>
			
			  <Suspense fallback={<Loader />}>
				<AboutComponent />

				<ToolsComponent />

				<WorkComponent />

				<CertsComponent />

				<ProjectsComponent />
			  </Suspense>

		</Box>
	)
}

export default HomeComponent
