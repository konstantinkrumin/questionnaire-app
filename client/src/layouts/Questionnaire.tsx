import { useEffect } from 'react';
import Button from '@mui/material/Button';

import Question from '../components/Question';
import { getQuestions } from '../apis/questionnaire';

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	// const [] = useState<>;

	useEffect(() => {
		getQuestions()
			.then(result => {
				console.log(result.questions);
			})
			.catch(err => console.log(err));
	}, []);

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
