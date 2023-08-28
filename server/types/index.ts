export enum QuestionType {
	Text = 'text',
	SingleChoice = 'single',
	MultipleChoice = 'multiple'
}

interface Question {
	id: number;
	text: string;
	type: QuestionType;
	isRequired: boolean;
}

export interface QuestionTextual extends Question {
	type: QuestionType.Text;
}

export interface QuestionPredefined extends Question {
	type: QuestionType.SingleChoice | QuestionType.MultipleChoice;
	answerOptions: string[];
}
