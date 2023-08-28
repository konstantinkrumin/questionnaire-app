import { serverAxios } from '../axios';
import { IGetQuestions, IGetQuestionsRes } from './types';

export const getQuestions: IGetQuestions = async () => {
	return await serverAxios
		.get<IGetQuestionsRes>('/questionnaire')
		.then(response => response.data)
		.catch(error => {
			throw error;
		});
};
