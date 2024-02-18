import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutComponent = () => {

	return (
		<Box
			sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}
		>
			<Typography id="about" variant='h4' gutterBottom>About</Typography>
			<Typography style={{marginBottom: '12px'}} gutterBottom>
			I am software developer with a decade of experience specializing in web application development. My journey began with a deep curiosity for coding, leading me to master technologies like VanillaJs React/NextJs, NodeJs, Firebase, Google Cloud Functions, and Google Appscript.
			</Typography>

			<Typography style={{marginBottom: '12px'}} gutterBottom>
			While I lean more towards front end development--my expertise spans the entire development stack, allowing me to architect end-to-end solutions. From frontend intricacies with React to server-side logic in NodeJS, and leveraging cloud services like Firebase and Google Cloud Functions--I bring a comprehensive skillset to create seamless and innovative user experiences. I'm dedicated to staying ahead of industry trends, ensuring my work not only meets but surpasses current standards.
			</Typography>

			<Typography style={{marginBottom: '12px'}} gutterBottom>
			I thrive in collaborative environments where diverse perspectives converge to craft exceptional solutions. Beyond writing code, I believe in the power of technology to make a lasting impact. Whether you're looking to collaborate on a project, seeking advice, or just want to discuss the latest tech trends, I'm always open to connecting with fellow developers and enthusiasts. Let's build something great together!
			</Typography>

		</Box>
	)
}

export default AboutComponent
