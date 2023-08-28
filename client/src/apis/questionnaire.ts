import { QuestionPredefined, QuestionTextual } from '../types';
import { serverAxios } from './axios';

interface IGetQuestionsRes {
	questions?: (QuestionTextual | QuestionPredefined)[];
	count?: number;
	errorMessage?: string;
}

type GetQuestions = () => Promise<IGetQuestionsRes>;

export const getQuestions: GetQuestions = async () => {
	return await serverAxios
		.get<IGetQuestionsRes>(`${import.meta.env.VITE_APP_SERVER_URL}/api/v1/questionnaire`)
		.then(response => response.data)
		.catch(error => {
			throw error;
		});
};
