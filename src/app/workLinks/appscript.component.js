import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import '../../App.css';

const AppScriptComponent = (props) => {

	const [ loading, setLoading ] = useState(false);

	useEffect(() => {
		props.updatePage("work");
	},[]);

	return (
		<Box
			sx={{ 
				flexGrow: 1,
				maxWidth: '100vw',
				marginLeft: 2
		  	}}
		>	
			<Box>
				<Typography align='center' variant='h4' gutterBottom>Google AppScript Developer</Typography>
				<Typography align='center'>2014-Present</Typography>
				
				<Typography gutterBottom>
					Since becoming a Google Education Trainer in 2013 and implementing Google Workspace for Education (formerly Google for Education) for school districts, I have leveraged Google AppScript to develop hundreds of solutions for schools.
				</Typography>

				<Typography gutterBottom>
					Below are web applications that I have developed to improve and automate workflows in schools:
				</Typography>
				
				<ul>
					<li>
						<Typography sx={{ fontSize: '1.15em', textDecoration: 'underline' }}>Sub Plan Request Form</Typography>
						<Typography gutterBottom>
							The form automated the entire process from request all the way to the creation and distribution of lesson plans.  It also handled all communications to leadership, HR, and other entities involved in the process.
						</Typography>
					</li>
					<li>
						<Typography sx={{ fontSize: '1.15em', textDecoration: 'underline' }}>Resource Scheduler</Typography>
						<Typography gutterBottom>
							This application allowed students to request resource support that required approval from teachers.  It automated the process of requesting and approving as well as daily reminders for students.  The application kept track of attendance and, more importantly, it provided analytics of resource usage and availability in the school.
						</Typography>
					</li>
					<li>
						<Typography sx={{ fontSize: '1.15em', textDecoration: 'underline' }}>School Business, Personal, & Sick Leave Requests</Typography>
						<Typography gutterBottom>
							The application streamlined the different processes and requirements for the various leaves that staff members had the ability to request.  Communication and approval process was automated.  In addition, situations that required travel reimbursement or mileage credit, the application accounted for them and ensured that requested received their reimbursements.
						</Typography>
					</li>
					<li>
						<Typography sx={{ fontSize: '1.15em', textDecoration: 'underline' }}>Credit Card Requests</Typography>
						<Typography gutterBottom>
							Allowed school districts to track credit card requests, status of credit cards, and pull data on credit card usage by department, person, clubs, sports, and activities.
						</Typography>
					</li>
					<li>
						<Typography sx={{ fontSize: '1.15em', textDecoration: 'underline' }}>Check-in & Check-out Kiosks</Typography>
						<Typography gutterBottom>
							The application tracked resource usage throughout a school building and allowed leadership to determine most and least used resource in the building.  In addition, it also allowed the school to determine where students are located.
						</Typography>
					</li>
					<li>
						<Typography sx={{ fontSize: '1.15em', textDecoration: 'underline' }}>Chrome Extension</Typography>
						<Typography gutterBottom>
							The extension allowed schools to configure quick access to the most important resources that staff and students accessed on the daily basis.  Within the extension, staff were able to search staff directory that normally would have taken five extra steps to access.  The extension improved resource access workflow within the organiations.
						</Typography>
					</li>
				</ul>
			</Box>			

		</Box>
	)
}

export default AppScriptComponent
