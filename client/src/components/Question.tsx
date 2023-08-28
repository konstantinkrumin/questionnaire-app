import { IQuestion } from '../types';

interface QuestionProps {
	questionInfo: IQuestion;
}

const Question: React.FC<QuestionProps> = ({ questionInfo }) => {
	return (
		<>
			<div>{questionInfo?.text}</div>
			<div>{questionInfo?.isRequired}</div>
			<div>{questionInfo?.type}</div>
			<div>{questionInfo?.displayStyle}</div>
			<div>{questionInfo?.answerOptions}</div>
		</>
	);
};

export default Question;
