export enum QuestionType {
	Text = 'text',
	SingleChoice = 'single',
	MultipleChoice = 'multiple'
}

export enum DisplayStyleType {
	Textfield = 'textfield',
	Textarea = 'textarea',
	Dropdown = 'dropdown',
	Checkbox = 'checkbox',
	Radio = 'radio'
}

interface IQuestionBase {
	id: number;
	text: string;
	isRequired: boolean;
	answer: string[];
}

export interface IQuestionTextual extends IQuestionBase {
	answerOptions?: undefined;
	type: QuestionType.Text;
	displayStyle: DisplayStyleType.Textfield | DisplayStyleType.Textarea;
}

export interface IQuestionPredefined extends IQuestionBase {
	answerOptions: string[];
	type: QuestionType.SingleChoice | QuestionType.MultipleChoice;
	displayStyle: DisplayStyleType.Dropdown | DisplayStyleType.Checkbox | DisplayStyleType.Radio;
}

export type IQuestion = IQuestionTextual | IQuestionPredefined;

export interface IQuestionnaireAnswer {
	questionId: number;
	answer: string[];
}

export interface IQuestionnaireResponse {
	userId: number;
	answers: IQuestionnaireAnswer[];
}
