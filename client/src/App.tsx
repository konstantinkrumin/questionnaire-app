import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Questionnaire from './layouts/Questionnaire';

const CenteredContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<Box
		display="flex"
		alignItems="center"
		justifyContent="center"
		boxSizing="border-box"
		minHeight="100vh"
		padding="16px"
		style={{ backgroundColor: '#D8ABFF' }}
	>
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
