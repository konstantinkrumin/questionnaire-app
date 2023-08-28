import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Question from '../components/Question';
import { getQuestions } from '../apis/questionnaire';
import { IQuestion } from '../types';

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	const [questions, setQuestions] = useState<IQuestion[]>();

	// const [currentStep, setCurrentStep] = useState<number>(1);
	const [questionsCount, setQuestionsCount] = useState<number>();

	useEffect(() => {
		getQuestions()
			.then(result => {
				setQuestions(result.questions);
				setQuestionsCount(result.count);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<>
			<Typography variant="h5">Questionnaire Title</Typography>

			{questions?.map(question => {
				return <Question key={question.id} questionInfo={question} />;
			})}

			<Button variant="contained">Previous</Button>
			<Button variant="contained">Next</Button>

			<div>Total Questions: {questionsCount}</div>
		</>
	);
};

export default Questionnaire;
