import Button from '@mui/material/Button';

import Question from '../components/Question';

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	return (
		<>
			<div>Questionnaire Title</div>

			<Question />
			<Question />
			<Question />

			<Button variant="contained">Previous</Button>
			<Button variant="contained">Next</Button>
		</>
	);
};

export default Questionnaire;
