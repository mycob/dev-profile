import React from 'react';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import '../App.css';

const WorkComponent = () => {

	return (
		<Box 
		sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5 }}
		>
			<Typography id='work' variant='h4'>Experience</Typography>
			<Typography>
				Teach w/ AI, Manage iT, Approve iT and Funily are SaaS products that I developed in the past 7 years through my LLC.
			</Typography>
			<ul id='work-list'>
				<li>
					2024-Present | Software Engineer | Costco Wholesale Corporation	
				</li>
				<li>
					2023-Present | <a href='/teach-with-ai'>Teach w/ AI
					<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
					</a>
				
				</li>
				<li>
					2014-Present | <a href='/app-script'>Google AppScript Developer
					<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
					</a>
				</li>
				<li>
					2019-2023 | <a href='/manage-it'>Manage iT
					<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
					</a>
				</li>
				<li>
					2019-2023 | <a href='/approve-it'>Approve iT
					<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
					</a>
				</li>
				<li>
					2017-2019 | <a href='/funily'>Funily
					<OpenInNewIcon color='primary' sx={{ fontSize: "0.9em", marginLeft: 0.5 }} />
					</a>
				</li>
			</ul>
			

		</Box>
	)
}

export default WorkComponent
