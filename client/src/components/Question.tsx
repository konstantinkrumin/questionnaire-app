import Typography from '@mui/material/Typography';

import { IQuestion, DisplayStyleType } from '../types';
import RadioButtonsGroup from './UI/Radio';
import Textfield from './UI/Textfield';
import Dropdown from './UI/Dropdown';

interface QuestionProps {
	questionInfo: IQuestion;
}

const Question: React.FC<QuestionProps> = ({ questionInfo }) => {
	return (
		<>
			<Typography variant="h6">{questionInfo?.text}</Typography>
			<div>{questionInfo?.isRequired}</div>
			<div>{questionInfo?.type}</div>
			<div>{questionInfo?.displayStyle}</div>
			<div>{questionInfo?.answerOptions}</div>

			{questionInfo?.displayStyle === DisplayStyleType.Radio && (
				<RadioButtonsGroup questionInfo={questionInfo} />
			)}

			{questionInfo?.displayStyle === DisplayStyleType.Dropdown && (
				<Dropdown questionInfo={questionInfo} />
			)}

			{questionInfo?.displayStyle === DisplayStyleType.Textfield && <Textfield />}
		</>
	);
};

export default Question;
