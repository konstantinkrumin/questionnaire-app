import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Questionnaire from './layouts/Questionnaire';

const CenteredContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<Box height="100vh" display="flex" alignItems="center" justifyContent="center">
		{children}
	</Box>
);

function App() {
	return (
		<>
			<CssBaseline />
			<CenteredContainer>
				<Questionnaire />
			</CenteredContainer>
		</>
	);
}

export default App;
