export enum QuestionType {
	Text = 'text',
	SingleChoice = 'single',
	MultipleChoice = 'multiple'
}

export type Question = {
	id: string;
	text: string;
	type: QuestionType;
	answerOptions: string[];
	isRequired: boolean;
};
