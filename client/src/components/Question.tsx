import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IQuestion, DisplayStyleType } from '../types';
import RadioButtonsGroup from './UI/Radio';
import Textfield from './UI/Textfield';
import Dropdown from './UI/Dropdown';
import CheckboxGroup from './UI/Checkbox';

interface QuestionProps {
	questionInfo: IQuestion;
	onStepChange: (type: 'next' | 'previous') => void;
}

const Question: React.FC<QuestionProps> = ({ questionInfo, onStepChange }) => {
	const [input, setInput] = useState<string>('');
	const [options, setOptions] = useState<string[]>([]);

	const handleStepChange = (type: 'next' | 'previous') => {
		setInput('');
		setOptions([]);
		onStepChange(type);
	};

	const handleInputChange = (input: string) => {
		setInput(input);
	};

	const handleSelectedOptionsChange = (selectedOptions: string[]) => {
		setOptions(selectedOptions);
	};

	return (
		<>
			{console.log(options)}
			<Typography variant="h6">{questionInfo?.text}</Typography>

			{questionInfo?.displayStyle === DisplayStyleType.Radio && (
				<RadioButtonsGroup
					input={input}
					questionInfo={questionInfo}
					onInputChange={handleInputChange}
				/>
			)}

			{questionInfo?.displayStyle === DisplayStyleType.Checkbox && (
				<CheckboxGroup
					selectedOptions={options}
					questionInfo={questionInfo}
					onSelectedOptionsChange={handleSelectedOptionsChange}
				/>
			)}

			{questionInfo?.displayStyle === DisplayStyleType.Dropdown && (
				<Dropdown
					input={input}
					questionInfo={questionInfo}
					onInputChange={handleInputChange}
				/>
			)}

			{(questionInfo?.displayStyle === DisplayStyleType.Textfield ||
				questionInfo?.displayStyle === DisplayStyleType.Textarea) && (
				<Textfield input={input} onInputChange={handleInputChange} />
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
