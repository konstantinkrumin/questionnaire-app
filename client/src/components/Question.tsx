import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
	const handleStepChange = (type: 'next' | 'previous') => {
		onStepChange(type);
	};

	return (
		<>
			<Typography variant="h6">{questionInfo?.text}</Typography>

			{questionInfo?.displayStyle === DisplayStyleType.Radio && (
				<RadioButtonsGroup questionInfo={questionInfo} />
			)}

			{questionInfo?.displayStyle === DisplayStyleType.Checkbox && (
				<CheckboxGroup questionInfo={questionInfo} />
			)}

			{questionInfo?.displayStyle === DisplayStyleType.Dropdown && (
				<Dropdown questionInfo={questionInfo} />
			)}

			{(questionInfo?.displayStyle === DisplayStyleType.Textfield ||
				questionInfo?.displayStyle === DisplayStyleType.Textarea) && <Textfield />}

			<Button variant="contained" onClick={() => handleStepChange('previous')}>
				Previous
			</Button>
			<Button variant="contained" onClick={() => handleStepChange('next')}>
				Next
			</Button>
		</>
	);
};

export default Question;
