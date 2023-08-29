import Typography from '@mui/material/Typography';

import { IQuestion, DisplayStyleType } from '../types';
import RadioButtonsGroup from './UI/Radio';
import Textfield from './UI/Textfield';
import Dropdown from './UI/Dropdown';
import CheckboxGroup from './UI/Checkbox';

interface QuestionProps {
	questionInfo: IQuestion;
}

const Question: React.FC<QuestionProps> = ({ questionInfo }) => {
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

			{questionInfo?.displayStyle === DisplayStyleType.Textfield && <Textfield />}
		</>
	);
};

export default Question;
