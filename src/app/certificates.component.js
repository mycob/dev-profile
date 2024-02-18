import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../App.css';

const CertsComponent = (props) => {

	useEffect(() => {
		props.updatePage ? props.updatePage("certs") : null;
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
			<Typography id='work' variant='h4'gutterBottom>Certifications</Typography>

			<Grid spacing={2} container justifyContent="start">
				<Grid item  xs={12} md={6} lg={3} sx={{ minWidth: 200 }}>
					<a className="no-decoration" href="https://www.freecodecamp.org/certification/mycoberago/javascript-algorithms-and-data-structures" target="_blank">
						<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
							<Typography>Javascript Algorithms & Data Structures </Typography>
							<OpenInNewIcon sx={{ fontSize: "1.25em", marginLeft: 0.5 }} />
						</Item>
					</a>
				</Grid>

				<Grid item  xs={12} md={6} lg={3} sx={{ minWidth: 200 }}>
					<a className="no-decoration" href="https://www.freecodecamp.org/certification/mycoberago/responsive-web-design" target="_blank">
						<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
							<Typography>Responsive Web Design</Typography>
							<OpenInNewIcon sx={{ fontSize: "1.25em", marginLeft: 0.5 }} />
						</Item>
					</a>
				</Grid>

				<Grid item  xs={12} md={6} lg={3} sx={{ minWidth: 200 }}>
					<a className="no-decoration" href="https://www.freecodecamp.org/certification/mycoberago/back-end-development-and-apis" target="_blank">
						<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
							<Typography>Back End Development & APIs</Typography>
							<OpenInNewIcon sx={{ fontSize: "1.25em", marginLeft: 0.5 }} />
						</Item>
					</a>
				</Grid>

				<Grid item  xs={12} md={6} lg={3} sx={{ minWidth: 200 }}>
					<a className="no-decoration" href="https://www.linkedin.com/learning/certificates/415904342f5724785bbf6a363e0cf6d8074433b5a58b3d605c2174181d4e5aa8" target="_blank">
						<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
							<Typography>Scrum Master</Typography>
							<OpenInNewIcon sx={{ fontSize: "1.25em", marginLeft: 0.5 }} />
						</Item>
					</a>
				</Grid>
				
			</Grid>
			
		</Box>
	)
}

export default CertsComponent
