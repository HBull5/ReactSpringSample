import React, { useState, useEffect } from 'react';
import Search from './Search';
import EmployeeCard from './EmployeeCard';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';
import { grey } from '@mui/material/colors';
import Service from '../lib/Service';

const service = new Service();

const SearchPage = () => {
	const [allEmployees, setAllEmployees] = useState([]);
	const [filteredEmployees, setFilteredEmployees] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const { data } = await service.getEmployees();
				setAllEmployees(data);
				setError(null);
			} catch (error) {
				console.error(error);
				setError(error?.message || 'Could not Retrieve Error Message');
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	useEffect(() => {
		setFilteredEmployees(allEmployees);
	}, [allEmployees]);

	const handleSearch = (searchTerm) => {
		const matches = allEmployees.filter(employee => employee.name.toUpperCase().includes(searchTerm.toUpperCase()));
		setFilteredEmployees(matches);
	};

	return (
		<Container maxWidth='sm' style={{ paddingTop: '3rem' }}>
			<Paper style={{ backgroundColor: grey[800] }}>
				{!error ?
					(<Box p={3}>
						<Search onSearch={handleSearch} />
						<Box mt={2}>
							{!loading ? 
								(filteredEmployees.map((employee, index) => {
									const { id, name, age, gender } = employee;
									return (
										<EmployeeCard
											key={index}
											id={id}
											name={name} 
											age={age}
											gender={gender}
										/>
									)
								}))
								:
								(<Box style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
									<CircularProgress size={30} />
								</Box>)
							}
						</Box>
					</Box>)
					:
					(<Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '1rem' }}>
						<ErrorIcon color='error' style={{ fontSize: '75px', flexBasis: '100%' }} />
						<Box>
							<Typography variant='h5' align='center' style={{ color: '#fff' }}>There was an Error!</Typography>
							<Typography align='center' style={{ color: '#fff', marginTop: '0.5rem' }}>
								{error}
							</Typography>
						</Box>
					</Box>)
				}
			</Paper>
		</Container>
	)
}

export default SearchPage;