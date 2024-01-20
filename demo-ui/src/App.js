import SearchPage from './components/SearchPage';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

function App() {
  return (
    <Box style={{ backgroundColor: grey[900] }}>
      <SearchPage />
    </Box>
  );
}

export default App;
