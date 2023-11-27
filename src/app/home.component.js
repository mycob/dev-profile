import React, { useEffect, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import '../App.css';
import AboutComponent from './about.component';
import WorkComponent from './work.component';
import ProjectsComponent from './projects.component';


const HomeComponent = () => {

	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		
		

	},[]);

	const Item = styled(Paper)(({ theme }) => ({
	  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	  ...theme.typography.body2,
	  padding: theme.spacing(1),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	}));

	return (
		<Box sx={{ flexGrow: 1 }}>
			<Typography variant="h4" align='center' >Mike Berago</Typography>
			<Typography variant='h5' align='center' gutterBottom>Web and Mobile Software Developer</Typography>

			<Grid container spacing={2} style={{ marginBottom: 20}}>
		        <Grid item xs={4}>
		          <a className='bio-links' href="https://github.com/mycoberago" target="_blank"><Item className='link-item'>GitHub</Item></a>
		        </Grid>
		        <Grid item xs={4}>
		          <a className='bio-links' href="https://www.linkedin.com/in/mikeberago/" target="_blank"><Item className='link-item'>Linkedin</Item></a>
		        </Grid>
		        <Grid item xs={4}>
		          <a className='bio-links' href="mailto:mycoberago@gmail.com" target="_blank"><Item className='link-item'>Contact</Item></a>
		        </Grid>
		      </Grid>

		      <AboutComponent />

		      <WorkComponent />

			  <ProjectsComponent />

		</Box>
	)
}

export default HomeComponent
