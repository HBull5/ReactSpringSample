import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({ onSearch }) => {
	return (
		<TextField
			variant='outlined'
			size='small'
			label='Employee Name'
			fullWidth
			InputLabelProps={{ shrink: true }} 
			onChange={e => onSearch(e?.target?.value)}
			InputProps={{
				endAdornment: <SearchIcon style={{ color: '#fff' }} />
			}}
			sx={{ 
				input: { color: '#fff' },
				label: { color: '#fff' },
				fieldset: { borderColor: '#fff' },
				'&:hover fieldset': { borderColor: '#fff !important' }
			}}
		/>
	)
};

export default Search;