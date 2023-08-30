import Typography from '@mui/material/Typography';

import Dropdown from './UI/Dropdown';
import Textfield from './UI/Textfield';
import CheckboxGroup from './UI/Checkbox';
import RadioButtonsGroup from './UI/Radio';

import { IQuestion, DisplayStyleType } from '../types';

interface QuestionProps {
	questionInfo: IQuestion;
	onQuestionnaireDataChange: (questionInfo: IQuestion) => void;
}

const Question: React.FC<QuestionProps> = ({ questionInfo, onQuestionnaireDataChange }) => {
	const handleInputChange = (input: string | string[]) => {
		const tempQuestionInfo = structuredClone(questionInfo);

		if (Array.isArray(input)) {
			const tempInput = input.filter(item => item !== '');
			tempQuestionInfo.answer = [...tempInput];
		}

		if (typeof input === 'string') {
			tempQuestionInfo.answer = [input];
		}

		onQuestionnaireDataChange(tempQuestionInfo);
	};

	return (
		<>
			<Typography variant="h6">{questionInfo.text}</Typography>

			{questionInfo.displayStyle === DisplayStyleType.Radio && (
				<RadioButtonsGroup
					input={questionInfo?.answer?.[0]}
					questionInfo={questionInfo}
					onInputChange={handleInputChange}
				/>
			)}

			{questionInfo.displayStyle === DisplayStyleType.Checkbox && (
				<CheckboxGroup
					selectedOptions={questionInfo.answer}
					questionInfo={questionInfo}
					onSelectedOptionsChange={handleInputChange}
				/>
			)}

			{questionInfo.displayStyle === DisplayStyleType.Dropdown && (
				<Dropdown
					input={questionInfo?.answer?.[0]}
					questionInfo={questionInfo}
					onInputChange={handleInputChange}
				/>
			)}

			{(questionInfo.displayStyle === DisplayStyleType.Textfield ||
				questionInfo.displayStyle === DisplayStyleType.Textarea) && (
				<Textfield input={questionInfo?.answer?.[0]} onInputChange={handleInputChange} />
			)}
		</>
	);
};

export default Question;
