import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { grey } from '@mui/material/colors';

const EmployeeCard = ({ name, age, gender}) => {
	return (
		<Box py={1}>
			<Paper style={{ backgroundColor: grey[700], padding: '0.5rem 1.5rem' }}>
				<Typography style={{ color: '#fff' }} variant='h5'>
					<strong>Name:&nbsp;</strong>
					{name}
				</Typography>
				<Box py={1}>
					<Divider style={{ backgroundColor: '#fff' }} />
				</Box>
				<Typography style={{ color: '#fff' }}>
					<strong>Age:&nbsp;</strong>
					{age}
				</Typography>
				<Typography style={{ color: '#fff' }}>
					<strong>Gender:&nbsp;</strong>
					{gender}
				</Typography>
			</Paper>
		</Box>
	)
};

export default EmployeeCard; 