import {
	IGetQuestions,
	IGetQuestionsRes,
	ISubmitQuestionnaire,
	ISubmitQuestionnaireRes
} from './types';
import { IQuestionnaireResponse } from '../../types';
import { serverAxios } from '../axios';

export const getQuestions: IGetQuestions = async () => {
	return await serverAxios
		.get<IGetQuestionsRes>('/questionnaire')
		.then(response => response.data)
		.catch(error => {
			throw error;
		});
};

export const submitQuestionnaire: ISubmitQuestionnaire = async (
	response: IQuestionnaireResponse
) => {
	return await serverAxios
		.post<ISubmitQuestionnaireRes>(`/questionnaire/${response.userId}`, response)
		.then(response => response.data)
		.catch(error => {
			throw error;
		});
};
