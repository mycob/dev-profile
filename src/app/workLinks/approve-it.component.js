import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../../App.css';

const ApproveItComponent = (props) => {

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
		<Box
			sx={{ 
				flexGrow: 1,
				maxWidth: '100vw',
				marginLeft: 2
		  	}}
		>	
			<Box>
				<Typography align='center' variant='h4' gutterBottom>Approve iT</Typography>
				<Typography align='center'>2019-2023</Typography>
				
				<Typography gutterBottom>
					A digital solution that helps organizations customize approval forms and automate their workflows--from emailing approvers, tracking status, and sending reminders.
				</Typography>

				<Typography gutterBottom>
					Think Google Forms on steriod.
				</Typography>
			</Box>

			<li>
				<a className="no-decoration" href="https://www.approveit.app/home" target="_blank">Website</a>
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

			<Grid container direction="column" justifyContent="center" spacing={1} style={{ marginBottom: 20, marginTop: 10 }}>
		        <Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 8 }}>
		          <img
				    className='approve-it-images'
				  	loading='lazy' 
					src={require('./approveItImages/image1.png')}
					style={{
						width: '90vw',
						boxShadow: 'grey 5px 5px 5px'
					}}
					/>
		        </Grid>
		        <Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 8 }} >
					<img 
						className='approve-it-images'
						loading='lazy' 
						src={require('./approveItImages/image2.png')} 
						style={{
							width: '90vw',
							boxShadow: 'grey 5px 5px 5px'
						}}
					/>
		        </Grid>
				<Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 8 }} >
					<img 
						className='approve-it-images'
						loading='lazy' 
						src={require('./approveItImages/image3.png')} 
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

export default ApproveItComponent
