import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../App.css';

const ToolsComponent = (props) => {

	useEffect(() => {
		props.updatePage ? props.updatePage("tools") : null;
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
			<Typography id='tools' variant='h4'gutterBottom>Toolbelt</Typography>

			<Grid spacing={2} container justifyContent="center">
				<Grid item xs={2}  md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>React</Typography>
					</Item>
				</Grid>

				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>NextJS</Typography>
					</Item>
				</Grid>

				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>NodeJS</Typography>
					</Item>
				</Grid>

				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>React Native</Typography>
					</Item>
				</Grid>
				
				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Firebase</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Google Cloud</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Tailwind</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Bootstrap</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Material UI</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Serverless</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Cloud Functions</Typography>
					</Item>
				</Grid>

				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Storybook</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Chromatic UI</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>Figma</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
						<Typography>A11y</Typography>
					</Item>
				</Grid>
				
			</Grid>
			
		</Box>
	)
}

export default ToolsComponent
