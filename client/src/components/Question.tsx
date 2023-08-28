import { IQuestion } from '../types';

interface QuestionProps {
	questionInfo: IQuestion;
}

const Question: React.FC<QuestionProps> = ({ questionInfo }) => {
	return (
		<>
			<div>{questionInfo.text}</div>
		</>
	);
};

export default Question;
