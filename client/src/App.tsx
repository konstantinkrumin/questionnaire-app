import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Questionnaire from './layouts/Questionnaire';

const CenteredContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<Box
		display="flex"
		flexDirection="column"
		alignItems="center"
		justifyContent="center"
		height="100vh"
		padding="16px"
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
