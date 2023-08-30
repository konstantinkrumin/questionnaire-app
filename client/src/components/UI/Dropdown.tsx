import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { IQuestion } from '../../types';

interface DropdownProps {
	input: string;
	questionInfo: IQuestion;
	onInputChange: (input: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ input, questionInfo, onInputChange }) => {
	const handleInputChange = (event: SelectChangeEvent) => {
		onInputChange(event.target.value);
	};

	return (
		<FormControl fullWidth>
			<Select
				id="select"
				labelId="select-label"
				value={input}
				defaultValue={questionInfo?.answerOptions?.[0]}
				onChange={handleInputChange}
			>
				{questionInfo?.answerOptions?.map((answerOption, idx) => {
					return (
						<MenuItem key={idx} value={answerOption}>
							{answerOption}
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

export default Dropdown;
