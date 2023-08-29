import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IQuestion, DisplayStyleType, QuestionType } from '../types';
import RadioButtonsGroup from './UI/Radio';
import Textfield from './UI/Textfield';
import Dropdown from './UI/Dropdown';
import CheckboxGroup from './UI/Checkbox';

interface QuestionProps {
	questionInfo: IQuestion;
	onStepChange: (type: 'next' | 'previous') => void;
}

const Question: React.FC<QuestionProps> = ({ questionInfo, onStepChange }) => {
	const DEFAULT_INPUT = questionInfo.type === QuestionType.MultipleChoice ? [] : '';

	const [input, setInput] = useState<string | string[]>(DEFAULT_INPUT);

	const handleStepChange = (type: 'next' | 'previous') => {
		setInput(DEFAULT_INPUT);
		onStepChange(type);
	};

	const handleInputChange = (newInput: string | string[]) => {
		setInput(newInput);
	};

	return (
		<>
			{console.log(input)}
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

			<div>
				<Button variant="contained" onClick={() => handleStepChange('previous')}>
					Previous
				</Button>

				<Button variant="contained" onClick={() => handleStepChange('next')}>
					Next
				</Button>
			</div>
		</>
	);
};

export default Question;
