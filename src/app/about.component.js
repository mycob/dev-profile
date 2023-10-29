import React, { useEffect, useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutComponent = () => {

	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		
		

	},[]);

	return (
		<Box
			sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}
		>
			<Typography id="about" variant='h4' gutterBottom>About</Typography>
			<Typography>
			I am a product-focused and mindful software engineer specialized in web and mobile development with fullstack proficiency.  I strive to create with simplicity and excellence.
			</Typography>

			<Typography>
			My experience consists of designing and building software products leveraging Javascript ecosystems (React, Node.js, React Native).
			</Typography>

			<Typography gutterBottom>
			I have worked in all phases of software development (infrastructure, backend, frontend, mobile), however I specialize in frontend development and software architecture.
			</Typography>

		</Box>
	)
}

export default AboutComponent
