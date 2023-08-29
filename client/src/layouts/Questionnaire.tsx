import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

import Question from '../components/Question';
import { getQuestions } from '../apis/questionnaire';
import { IQuestion, IQuestionnaireAnswer } from '../types';

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [questions, setQuestions] = useState<IQuestion[]>();
	const [answers, setAnswers] = useState<IQuestionnaireAnswer[]>([]);

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

	const handleStepChange = (type: 'next' | 'back', questionAnswer: IQuestionnaireAnswer) => {
		if (type === 'next' && currentStep < questionsCount) {
			setCurrentStep(currentStep + 1);
			setAnswers([...answers, questionAnswer]);
		}

		if (type === 'back' && currentStep > 1) {
			setCurrentStep(currentStep - 1);

			const tempAnswers = [...answers].filter(
				answer => answer.questionId !== questionAnswer.questionId
			);

			setAnswers(tempAnswers);
		}
	};

	if (isLoading) {
		return <Typography variant="h5">Loading</Typography>;
	}

	if (!questions) {
		return <Typography variant="h5">No questions to show</Typography>;
	}

	return (
		<>
			<Typography p={2} variant="h5">
				Questionnaire Title
			</Typography>

			<Question questionInfo={questions[currentStep - 1]} onStepChange={handleStepChange} />

			<Typography p={2}>
				Question {currentStep}/{questionsCount}
			</Typography>
		</>
	);
};

export default Questionnaire;
