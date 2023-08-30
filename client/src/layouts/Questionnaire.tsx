import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Question from '../components/Question';
import { getQuestions, submitQuestionnaire } from '../apis/questionnaire';
import { IQuestion, IQuestionnaireAnswer, IQuestionnaireResponse } from '../types';

const CenteredContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<Paper
		elevation={3}
		style={{
			padding: 36,
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			justifyContent: 'center',
			borderRadius: 16,
			minWidth: 200,
			minHeight: 150,
			backgroundColor: '#FCF8FF'
		}}
	>
		{children}
	</Paper>
);

interface QuestionnaireProps {}

const Questionnaire: React.FC<QuestionnaireProps> = () => {
	const [isCompleted, setIsCompleted] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

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
			.catch(() => {
				setIsError(true);
				setIsLoading(false);
			});
	}, []);

	const disableNextBtn = (question: IQuestion) => {
		if (question.isRequired && question.answer?.[0] === '') return true;
		return false;
	};

	const handleNext = () => setCurrentQuestion(currQuestion => currQuestion + 1);
	const handleBack = () => setCurrentQuestion(currQuestion => currQuestion - 1);

	const handleQuestionnaireDataChange = (questionInfo: IQuestion) => {
		const tempQuestionnaireData = questionnaireData.map(questionnaireItem => {
			if (questionnaireItem.id === questionInfo.id) {
				return {
					...questionnaireItem,
					answer: questionInfo.answer
				};
			}

			return questionnaireItem;
		});

		setQuestionnaireData(tempQuestionnaireData);
	};

	const handleSubmit = () => {
		const answers: IQuestionnaireAnswer[] = questionnaireData
			?.filter(item => {
				return item?.answer?.[0] !== '';
			})
			?.map(item => {
				return {
					questionId: item.id,
					answer: item.answer
				};
			});

		const responseBody: IQuestionnaireResponse = {
			userId: 123,
			answers
		};

		submitQuestionnaire(responseBody)
			.then(() => {
				setIsCompleted(true);
			})
			.catch(() => {
				setIsError(true);
			});
	};

	if (isLoading) {
		return (
			<CenteredContainer>
				<Typography variant="h5">Loading...</Typography>
			</CenteredContainer>
		);
	}

	if (isError) {
		return (
			<CenteredContainer>
				<Typography variant="h5">
					It did not go according to the plan... Unfortunately, we are experiencing some
					issues. Please reload this page and try again
				</Typography>
			</CenteredContainer>
		);
	}

	if (isCompleted) {
		return (
			<CenteredContainer>
				<Typography variant="h5">
					Your application is completed! We will email you once we review it
				</Typography>
			</CenteredContainer>
		);
	}

	if (!questionnaireData) {
		return (
			<CenteredContainer>
				<Typography variant="h5">No questions to show</Typography>
			</CenteredContainer>
		);
	}

	return (
		<CenteredContainer>
			<Typography p={2} variant="h5">
				Job Application
			</Typography>

			{questionnaireData?.map((question, idx) => {
				return (
					<Box p={2} key={question.id} hidden={idx !== currentQuestion}>
						<Question
							questionInfo={question}
							onQuestionnaireDataChange={handleQuestionnaireDataChange}
						/>

						<Box
							p={2}
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								alignItems: 'center',
								gap: '24px'
							}}
						>
							{currentQuestion !== 0 && (
								<Button variant="contained" onClick={() => handleBack()}>
									Back
								</Button>
							)}

							{currentQuestion < questionsCount - 1 && (
								<Button
									variant="contained"
									disabled={disableNextBtn(question)}
									onClick={() => handleNext()}
								>
									Next
								</Button>
							)}

							{currentQuestion === questionsCount - 1 && (
								<Button variant="contained" onClick={() => handleSubmit()}>
									Submit
								</Button>
							)}
						</Box>
					</Box>
				);
			})}

			<Typography p={2}>
				Question {currentQuestion + 1}/{questionsCount}
			</Typography>
		</CenteredContainer>
	);
};

export default Questionnaire;
