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

interface Question {
	id: number;
	text: string;
	type: QuestionType;
	isRequired: boolean;
}

export interface QuestionTextual extends Question {
	type: QuestionType.Text;
	displayStyle: DisplayStyleType.Textfield | DisplayStyleType.Textarea;
}

export interface QuestionPredefined extends Question {
	answerOptions: string[];
	type: QuestionType.SingleChoice | QuestionType.MultipleChoice;
	displayStyle: DisplayStyleType.Dropdown | DisplayStyleType.Checkbox | DisplayStyleType.Radio;
}

export interface QuestionnaireAnswer {
	questionId: number;
	answer: string | string[];
}

export interface QuestionnaireResponseBody {
	userId: number;
	answers: QuestionnaireAnswer[];
}
