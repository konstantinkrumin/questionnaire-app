import { Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
	console.log('Hello');
	console.log(import.meta.env.VITE_APP_SERVER_URL);
	return (
		<>
			<CssBaseline />
			<Button variant="contained">Hello world</Button>
		</>
	);
}

export default App;
