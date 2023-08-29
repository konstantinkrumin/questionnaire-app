import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

import Question from '../components/Question';
import { getQuestions } from '../apis/questionnaire';
import { IQuestion } from '../types';

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [questions, setQuestions] = useState<IQuestion[]>();
	// const [answers, setAnswers] = useState<IQuestionnaireAnswer[]>();

	const [currentStep, setCurrentStep] = useState<number>(1);
	const [questionsCount, setQuestionsCount] = useState<number>(0);

	useEffect(() => {
		setIsLoading(true);

		getQuestions()
			.then(result => {
				if (result.questions) setQuestions(result.questions);
				if (result.count) setQuestionsCount(result.count);

				setIsLoading(false);
			})
			.catch(err => {
				console.log(err);

				setIsLoading(false);
			});
	}, []);

	const handleStepChange = (type: 'next' | 'previous') => {
		if (type === 'next' && currentStep < questionsCount) setCurrentStep(currentStep + 1);
		if (type === 'previous' && currentStep > 1) setCurrentStep(currentStep - 1);
	};

	if (isLoading) {
		return <div>Loading</div>;
	}

	if (!questions) {
		return <Typography variant="h5">No questions to show</Typography>;
	}

	return (
		<>
			<Typography variant="h5">Questionnaire Title</Typography>

			<Question questionInfo={questions[currentStep - 1]} onStepChange={handleStepChange} />

			<div>
				Question {currentStep}/{questionsCount}
			</div>
		</>
	);
};

export default Questionnaire;
