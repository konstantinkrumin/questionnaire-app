import CssBaseline from '@mui/material/CssBaseline';

import Questionnaire from './layouts/Questionnaire';

function App() {
	console.log('Hello');
	console.log(import.meta.env.VITE_APP_SERVER_URL);
	return (
		<>
			<CssBaseline />
			<Questionnaire />
		</>
	);
}

export default App;
