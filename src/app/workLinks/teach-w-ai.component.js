import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../../App.css';

const TeachWithAIComponent = (props) => {

	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		props.updatePage("work");
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
			<Typography align='center' variant='h4' gutterBottom>Teach w/ AI</Typography>
			<Typography align='center'>2023-Present</Typography>
			
			<Typography gutterBottom>
				Leveraging the power of ChatGPT to save teachers time by automating lesson plans, rubrics, assessments, and more.
			</Typography>
			<li>
				<a className="no-decoration" href="https://teach-with-ai.com" target="_blank">Website
				<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
				</a>
				
			</li>

			<hr />

			<Grid container alignItems='center' justifyContent='center' spacing={2} style={{ marginBottom: 20 }}>
		        <Grid item xs={3}>
		          <Item>Javascript</Item>
		        </Grid>
				<Grid item xs={4}>
		          <Item>NextJS</Item>
		        </Grid>
		        <Grid item xs={4}>
		          <Item>React</Item>
		        </Grid>
				<Grid item xs={4}>
		          <Item>NodeJS</Item>
		        </Grid>
				<Grid item xs={3}>
		          <Item>Material UI</Item>
		        </Grid>
		        <Grid item xs={3}>
		          <Item>React Context</Item>
		        </Grid>
				<Grid item xs={3}>
		          <Item>React Reducers</Item>
		        </Grid>
				<Grid item xs={3}>
		          <Item>Firebase</Item>
		        </Grid>
				<Grid item xs={3}>
		          <Item>Cloud Function</Item>
		        </Grid>
				<Grid item xs={3}>
		          <Item>Stripe</Item>
		        </Grid>
				<Grid item xs={3}>
		          <Item>TypeSense</Item>
		        </Grid>
		    </Grid>

			<ul id='manage-it-list'>
				<li>Create lesson plans with AI</li>
				<li>Save and Share lesson plans</li>
				<li>Access Community Created Lesson Plans</li>
				<li>Create Rubrics with AI</li>
			</ul>
			
			<Grid container direction="column" justifyContent="center" spacing={1} style={{ marginBottom: 20, marginTop: 10 }}>
		        <Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
		          <img 
				  	className='approve-it-images'
				  	loading='lazy' 
					src="https://firebasestorage.googleapis.com/v0/b/teach-with-ai.appspot.com/o/assets%2Ftwai_2.gif?alt=media&token=c12e910f-6b46-46a8-9e7a-f98bd160f399"
					style={{
						width: '90vw',
						boxShadow: 'grey 5px 5px 5px'
					}}
					/>
		        </Grid>
		    </Grid>

		</Box>
	)
}

export default TeachWithAIComponent
