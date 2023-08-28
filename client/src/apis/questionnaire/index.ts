import { serverAxios } from '../axios';
import { GetQuestions, IGetQuestionsRes } from './types';

export const getQuestions: GetQuestions = async () => {
	return await serverAxios
		.get<IGetQuestionsRes>('/questionnaire')
		.then(response => response.data)
		.catch(error => {
			throw error;
		});
};
