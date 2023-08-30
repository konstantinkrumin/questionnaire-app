import Typography from '@mui/material/Typography';

import { IQuestion, DisplayStyleType } from '../types';
import RadioButtonsGroup from './UI/Radio';
import Textfield from './UI/Textfield';
import Dropdown from './UI/Dropdown';
import CheckboxGroup from './UI/Checkbox';

interface QuestionProps {
	questionInfo: IQuestion;
	onQuestionnaireDataChange: (questionInfo: IQuestion) => void;
}

const Question: React.FC<QuestionProps> = ({ questionInfo, onQuestionnaireDataChange }) => {
	const handleInputChange = (input: string | string[]) => {
		const tempQuestionInfo = structuredClone(questionInfo);

		console.log('INPUT');
		console.log(input);

		if (Array.isArray(input)) tempQuestionInfo.answer = [...input];
		if (typeof input === 'string') tempQuestionInfo.answer = input;

		onQuestionnaireDataChange(tempQuestionInfo);
	};

	return (
		<>
			<Typography variant="h6">{questionInfo.text}</Typography>

			{questionInfo.displayStyle === DisplayStyleType.Radio && (
				<RadioButtonsGroup
					input={questionInfo.answer as string}
					questionInfo={questionInfo}
					onInputChange={handleInputChange}
				/>
			)}

			{questionInfo.displayStyle === DisplayStyleType.Checkbox && (
				<CheckboxGroup
					selectedOptions={(questionInfo.answer as string[]) ?? []}
					questionInfo={questionInfo}
					onSelectedOptionsChange={handleInputChange}
				/>
			)}

			{questionInfo.displayStyle === DisplayStyleType.Dropdown && (
				<Dropdown
					input={questionInfo.answer as string}
					questionInfo={questionInfo}
					onInputChange={handleInputChange}
				/>
			)}

			{(questionInfo.displayStyle === DisplayStyleType.Textfield ||
				questionInfo.displayStyle === DisplayStyleType.Textarea) && (
				<Textfield
					input={questionInfo.answer as string}
					onInputChange={handleInputChange}
				/>
			)}
		</>
	);
};

export default Question;
