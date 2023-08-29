import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IQuestion, DisplayStyleType, QuestionType, IQuestionnaireAnswer } from '../types';
import RadioButtonsGroup from './UI/Radio';
import Textfield from './UI/Textfield';
import Dropdown from './UI/Dropdown';
import CheckboxGroup from './UI/Checkbox';

interface QuestionProps {
	questionInfo: IQuestion;
	onStepChange: (type: 'next' | 'back', questionAnswer: IQuestionnaireAnswer) => void;
}

const Question: React.FC<QuestionProps> = ({ questionInfo, onStepChange }) => {
	const DEFAULT_INPUT = questionInfo.type === QuestionType.MultipleChoice ? [] : '';

	const [input, setInput] = useState<string | string[]>(DEFAULT_INPUT);

	const handleStepChange = (type: 'next' | 'back') => {
		const questionAnswer: IQuestionnaireAnswer = {
			questionId: questionInfo.id,
			answer: input
		};

		setInput(DEFAULT_INPUT);
		onStepChange(type, questionAnswer);
	};

	const handleInputChange = (newInput: string | string[]) => {
		setInput(newInput);
	};

	const disableNextBtn = (isRequired: boolean, currentInputState: string | string[]) => {
		if (!currentInputState && isRequired) return true;
		return false;
	};

	return (
		<>
			<Typography variant="h6">{questionInfo?.text}</Typography>

			{questionInfo.displayStyle === DisplayStyleType.Radio && (
				<RadioButtonsGroup
					input={input as string}
					questionInfo={questionInfo}
					onInputChange={handleInputChange}
				/>
			)}

			{questionInfo.displayStyle === DisplayStyleType.Checkbox && (
				<CheckboxGroup
					selectedOptions={input as string[]}
					questionInfo={questionInfo}
					onSelectedOptionsChange={handleInputChange}
				/>
			)}

			{questionInfo.displayStyle === DisplayStyleType.Dropdown && (
				<Dropdown
					input={input as string}
					questionInfo={questionInfo}
					onInputChange={handleInputChange}
				/>
			)}

			{(questionInfo.displayStyle === DisplayStyleType.Textfield ||
				questionInfo.displayStyle === DisplayStyleType.Textarea) && (
				<Textfield input={input as string} onInputChange={handleInputChange} />
			)}

			<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}>
				<Button variant="contained" onClick={() => handleStepChange('back')}>
					Back
				</Button>

				<Button
					variant="contained"
					disabled={disableNextBtn(questionInfo.isRequired, input)}
					onClick={() => handleStepChange('next')}
				>
					Next
				</Button>
			</Box>
		</>
	);
};

export default Question;
