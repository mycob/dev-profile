import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
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
				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
						src={require('./images/react.png')}
						alt="react-icon-image"
						style={{ width: '50px' }}
						/>
						<Typography>React</Typography>
					</Item>
				</Grid>

				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/next.png')}
							alt="nextjs-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>NextJS</Typography>
					</Item>
				</Grid>

				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/node.png')}
							alt="nodejs-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>NodeJS</Typography>
					</Item>
				</Grid>

				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/react.png')}
							alt="nodejs-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>React Native</Typography>
					</Item>
				</Grid>
				
				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/firebase.png')}
							alt="nodejs-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Firebase</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/gcp.png')}
							alt="google-cloud-platform-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Google Cloud</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<svg xmlns="http://www.w3.org/2000/svg" width="50px" fill="none" viewBox="0 0 54 33"><g clip-path="url(#prefix__clip0)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
						<Typography>Tailwind</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/bootstrap.png')}
							alt="bootstrap-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Bootstrap</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/mui.png')}
							alt="bootstrap-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Material UI</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/serverless.png')}
							alt="bootstrap-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Serverless</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/cloudfuncs.png')}
							alt="bootstrap-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Cloud Functions</Typography>
					</Item>
				</Grid>

				<Grid item xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/storybook.png')}
							alt="storybook-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Storybook</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/chromatic.png')}
							alt="chromatic-ui-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Chromatic UI</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/figma.png')}
							alt="figma-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>Figma</Typography>
					</Item>
				</Grid>

				<Grid item  xs={2} md={3} lg={3} sx={{ minWidth: 100 }}>
					<Item className="projects-link-item" sx={{ minHeight: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'black', gap: '10px' }}>
						<img
							src={require('./images/a11y.webp')}
							alt="a11y-icon-image"
							style={{ width: '50px' }}
						/>
						<Typography>A11y</Typography>
					</Item>
				</Grid>
				
			</Grid>
			
		</Box>
	)
}

export default ToolsComponent
