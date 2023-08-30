import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

import Question from '../components/Question';
import { getQuestions } from '../apis/questionnaire';
import { IQuestion } from '../types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [questionnaireData, setQuestionnaireData] = useState<IQuestion[]>([]);

	const [currentQuestion, setCurrentQuestion] = useState<number>(0);
	const [questionsCount, setQuestionsCount] = useState<number>(0);

	useEffect(() => {
		setIsLoading(true);

		getQuestions()
			.then(result => {
				if (result.questions) setQuestionnaireData(result.questions);
				if (result.count) setQuestionsCount(result.count);

				setIsLoading(false);
			})
			.catch(err => {
				console.log(err);

				setIsLoading(false);
			});
	}, []);

	const handleNext = () => {
		if (currentQuestion < questionsCount - 1) {
			setCurrentQuestion(currQuestion => currQuestion + 1);
		}
	};

	const handleBack = () => {
		if (currentQuestion >= 1) {
			setCurrentQuestion(currQuestion => currQuestion - 1);
		}
	};

	const handleQuestionnaireDataChange = (questionInfo: IQuestion) => {
		console.log(questionInfo);
	};

	if (isLoading) {
		return <Typography variant="h5">Loading</Typography>;
	}

	if (!questionnaireData) {
		return <Typography variant="h5">No questions to show</Typography>;
	}

	return (
		<>
			<Typography p={2} variant="h5">
				Job Application
			</Typography>

			{questionnaireData?.map(question => {
				return (
					<Question
						questionInfo={question}
						onQuestionnaireDataChange={handleQuestionnaireDataChange}
					/>
				);
			})}

			<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
				<Button variant="contained" onClick={() => handleBack()}>
					Back
				</Button>

				<Button variant="contained" onClick={() => handleNext()}>
					Next
				</Button>
			</Box>

			<Typography p={2}>
				Question {currentQuestion + 1}/{questionsCount}
			</Typography>
		</>
	);
};

export default Questionnaire;
