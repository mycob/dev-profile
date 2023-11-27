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
			<Typography style={{marginBottom: '12px'}} gutterBottom>
			I am a school administrator who, a decade ago, discovered a love for software development. Over the years, I have seamlessly merged my educational background with the dynamic world of technology. As an advocate for innovation in education, I've dedicated myself to crafting software solutions that enhance the learning experience.
			</Typography>

			<Typography style={{marginBottom: '12px'}} gutterBottom>
			In pursuit of this vision, I founded Approve iT, LLC, an entity committed to developing Software as a Service products for school districts.  My goal was to create services that were affordable to schools that made real impact.  I leveraged React, NodeJS, Firebase, and Google Cloud to create robust and user-friendly solutions tailored for educational institutions.
			</Typography>

			<Typography style={{marginBottom: '12px'}} gutterBottom>
			I have worked in all phases of software development (infrastructure, backend, front end, mobile), however I gravitate more with great confidence when working on the front end.
			</Typography>

			<Typography style={{marginBottom: '12px'}} gutterBottom>
			I am seeking a collaborative team where I can apply my expertise in software development to create impactful and user-friendly solutions. I aim to contribute my strong teamwork and leadership skills in situations where they are most beneficial.
			</Typography>

		</Box>
	)
}

export default AboutComponent
