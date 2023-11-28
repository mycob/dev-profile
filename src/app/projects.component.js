import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../App.css';

const ProjectsComponent = (props) => {

	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		props.updatePage ? props.updatePage("projects") : null;
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
			sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}
		>
			<Typography id='work' variant='h4'gutterBottom>freeCodeCamp Projects</Typography>

			<Typography gutterBottom sx={{ marginBottom: 2.5 }}>
				Javascript, HTML, & CSS practice projects.
			</Typography>

			<Grid spacing={2} container justifyContent="center">
				<Grid item xs={3} sx={{ minWidth: 200 }}>
					<a className="no-decoration" href="https://codepen.io/mikeberago/pen/obWKGd" target="_blank">
						<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'darkslategray' }}>
							<Typography>Calculator App</Typography>
							<OpenInNewIcon sx={{ fontSize: "1.25em", marginLeft: 0.5 }} />
						</Item>
					</a>
				</Grid>
				<Grid item xs={3} sx={{ minWidth: 200 }}>
					<a className="no-decoration" href="https://codepen.io/mikeberago/pen/obWKGd" target="_blank">
						<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'darkslategray' }}>
							<Typography>Promodoro Clock</Typography>
							<OpenInNewIcon sx={{ fontSize: "1.25em", marginLeft: 0.5 }} />
						</Item>
					</a>
				</Grid>
				<Grid item xs={3} sx={{ minWidth: 200 }}>
					<a className="no-decoration" href="https://codepen.io/mikeberago/pen/obWKGd" target="_blank">
						<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'darkslategray' }}>
							<Typography>Quote Generator</Typography>
							<OpenInNewIcon sx={{ fontSize: "1.25em", marginLeft: 0.5 }} />
						</Item>
					</a>
				</Grid>
				<Grid item xs={3} sx={{ minWidth: 200 }}>
					<a className="no-decoration" href="https://codepen.io/mikeberago/pen/obWKGd" target="_blank">
						<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'darkslategray' }}>
							<Typography>Tic Tac Toe</Typography>
							<OpenInNewIcon sx={{ fontSize: "1.25em", marginLeft: 0.5 }} />
						</Item>
					</a>
				</Grid>
			</Grid>
			
		</Box>
	)
}

export default ProjectsComponent
