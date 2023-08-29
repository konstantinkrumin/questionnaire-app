import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { IQuestion } from '../../types';

interface CheckboxGroupProps {
	questionInfo: IQuestion;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ questionInfo }) => {
	return (
		<FormGroup>
			{questionInfo?.answerOptions?.map(answerOption => {
				return <FormControlLabel control={<Checkbox />} label={answerOption} />;
			})}
		</FormGroup>
	);
};

export default CheckboxGroup;
