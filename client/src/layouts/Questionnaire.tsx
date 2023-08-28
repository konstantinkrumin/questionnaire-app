import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import Question from '../components/Question';
import { getQuestions } from '../apis/questionnaire';
import { IQuestion } from '../types';

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	const [questions, setQuestions] = useState<IQuestion[]>();

	useEffect(() => {
		getQuestions()
			.then(result => {
				setQuestions(result.questions);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<div>Questionnaire Title</div>

			{questions?.map(question => {
				return <Question key={question.id} />;
			})}

			<Button variant="contained">Previous</Button>
			<Button variant="contained">Next</Button>
		</>
	);
};

export default Questionnaire;
