import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../../App.css';

const ManageItComponent = (props) => {

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
			<Typography align='center' variant='h4' gutterBottom>Manage iT</Typography>
			<Typography align='center'>2019-2023</Typography>
			
			<Typography gutterBottom>
				A multi-faceted digital solution designed to improve workflows for school districts and meet Illinois state compliance requiremetns for managing applications.
			</Typography>
			<li>
				<a className="no-decoration" href="https://manage-it.app/home" target="_blank">Website</a>
				<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
			</li>

			<hr />

			<Grid container alignItems='center' justifyContent='center' spacing={2} style={{ marginBottom: 20 }}>
		        <Grid item xs={3}>
		          <Item>Javascript</Item>
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
		    </Grid>

			<ul id='manage-it-list'>
				<li>Review & Manage Google Classrooms</li>
				<li>Developed predictable workflow for students, teachers, and staff.</li>
				<li>Track & Review student activities through Chrome Extension.</li>
				<li>Track & Review website visits and activities through Chrome Extension.</li>
			</ul>
			
			<Grid container direction="column" justifyContent="center" spacing={1} style={{ marginBottom: 20, marginTop: 10 }}>
		        <Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
		          <img 
				  	className='approve-it-images'
				  	loading='lazy' 
					src="https://firebasestorage.googleapis.com/v0/b/manage-it-extension.appspot.com/o/assets%2FGClassroom.gif?alt=media&token=1df840a7-6191-40ec-a56f-e10a974dcea6"
					style={{
						width: '90vw',
						boxShadow: 'grey 5px 5px 5px'
					}}
					/>
		        </Grid>
		        <Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} >
					<img 
						className='approve-it-images'
						loading='lazy' 
						src="https://firebasestorage.googleapis.com/v0/b/manage-it-extension.appspot.com/o/assets%2Fmanage-apps.gif?alt=media&token=dd148828-65e7-4a29-a37d-534cf28ee2cc"
						style={{
							width: '90vw',
							boxShadow: 'grey 5px 5px 5px'
						}}
					/>
		        </Grid>
				<Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} >
					<img 
						className='approve-it-images'
						loading='lazy' 
						src="https://firebasestorage.googleapis.com/v0/b/manage-it-extension.appspot.com/o/assets%2Fextension-gif-2.gif?alt=media&token=6fae81cc-cfef-4c7f-a0ec-70fa1064d44a"
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

export default ManageItComponent
