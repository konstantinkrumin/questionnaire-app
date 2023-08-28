import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { IQuestion } from '../../types';

interface RadioButtonsGroupProps {
	questionInfo: IQuestion;
}

const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({ questionInfo }) => {
	return (
		<FormControl>
			<FormLabel id="radio-buttons-group-label">{questionInfo.text}</FormLabel>
			<RadioGroup
				aria-labelledby="radio-buttons-group-label"
				defaultValue={questionInfo?.answerOptions?.[0]}
				name="radio-buttons-group"
			>
				{questionInfo?.answerOptions?.map((questionOption, idx) => {
					return (
						<FormControlLabel
							key={idx}
							control={<Radio />}
							label={questionOption}
							value={questionOption}
						/>
					);
				})}
			</RadioGroup>
		</FormControl>
	);
};

export default RadioButtonsGroup;
