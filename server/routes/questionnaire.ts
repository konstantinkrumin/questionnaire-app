import express, { Router } from 'express';

import questionnaire from '../controllers/questionnaire';

const router: Router = express.Router();

router.get('/questionnaire', questionnaire.getQuestions);

router.post('/questionnaire/:userId', questionnaire.submitQuestionnaire);

export default router;
