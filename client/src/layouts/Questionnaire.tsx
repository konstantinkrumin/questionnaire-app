import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

import Question from '../components/Question';
import { getQuestions } from '../apis/questionnaire';
import { IQuestion } from '../types';

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	const [questions, setQuestions] = useState<IQuestion[]>();

	const [currentStep, setCurrentStep] = useState<number>(1);
	const [questionsCount, setQuestionsCount] = useState<number>(0);

	useEffect(() => {
		getQuestions()
			.then(result => {
				if (result.questions) setQuestions(result.questions);
				if (result.count) setQuestionsCount(result.count);
			})
			.catch(err => console.log(err));
	}, []);

	const handleStepChange = (type: 'next' | 'previous') => {
		if (type === 'next' && currentStep < questionsCount) setCurrentStep(currentStep + 1);
		if (type === 'previous' && currentStep > 1) setCurrentStep(currentStep - 1);
	};

	if (!questions) {
		return <div>Loading</div>;
	}

	return (
		<>
			<Typography variant="h5">Questionnaire Title</Typography>

			<Question questionInfo={questions[currentStep - 1]} onStepChange={handleStepChange} />

			<div>Total Questions: {questionsCount}</div>
		</>
	);
};

export default Questionnaire;
