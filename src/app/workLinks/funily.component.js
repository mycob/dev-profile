import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../../App.css';
import { PriorityHighSharp } from '@mui/icons-material';

const FunilyComponent = (props) => {
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
				<Typography align='center' variant='h4' gutterBottom>Funily</Typography>
				<Typography align='center'>2017-2019</Typography>
				
				<Typography>
					An app made for parents by parents to easily find local things to do with their children.
				</Typography>
			</Box>

			<ul>
				<li>
					<a className="no-decoration" href="https://myfunily.com/#home" target="_blank">Website
					<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
					</a>
				</li>
			</ul>

			<hr />

			<Grid container alignItems='center' justifyContent='center' spacing={2} style={{ marginBottom: 20 }}>
		        <Grid item xs={3}>
		          <Item>Javascript</Item>
		        </Grid>
		        <Grid item xs={4}>
		          <Item>React Native</Item>
		        </Grid>
		        <Grid item xs={3}>
		          <Item>MobX</Item>
		        </Grid>
		    </Grid>

			<Grid container direction="row" justifyContent="center" spacing={1} style={{ marginBottom: 20}}>
		        <Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
		          <img 
				  	loading='lazy' 
					src={require('./funilyImages/image1.png')}
					style={{
						maxHeight: 800
					}}
					/>
		        </Grid>
		        <Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 6 }} >
					<img 
						loading='lazy' 
						src={require('./funilyImages/image2.png')} 
						style={{
							maxHeight: 750
						}}
					/>
		        </Grid>
		    </Grid>

			<Grid container direction="row" justifyContent="center" spacing={1} style={{ marginBottom: 20}}>
		        <Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
					<img 
						loading='lazy' 
						src={require('./funilyImages/image3.png')} 
						style={{
							maxHeight: 700
						}}
					/>
		        </Grid>
				<Grid item columns={{ xs: 12, sm: 12, md: 12, lg: 6 }}>
					<img 
						loading='lazy' 
						src={require('./funilyImages/image4.png')} 
						style={{
							maxHeight: 700
						}}
					/>
		        </Grid>
		    </Grid>

		</Box>
	)
}

export default FunilyComponent
