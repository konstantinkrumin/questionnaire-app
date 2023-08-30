import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { IQuestion } from '../../types';

interface RadioButtonsGroupProps {
	input: string;
	questionInfo: IQuestion;
	onInputChange: (input: string) => void;
}

const RadioButtonsGroup: React.FC<RadioButtonsGroupProps> = ({
	input,
	questionInfo,
	onInputChange
}) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(event.target.value);
	};

	return (
		<FormControl>
			<FormLabel id="radio-buttons-group-label" hidden>
				{questionInfo.text}
			</FormLabel>
			<RadioGroup
				value={input}
				name="radio-buttons-group"
				aria-labelledby="radio-buttons-group-label"
				defaultValue={questionInfo?.answerOptions?.[0]}
				onChange={handleInputChange}
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
