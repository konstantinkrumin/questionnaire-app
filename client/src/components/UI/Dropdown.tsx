import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
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
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="select-label">{questionInfo.text}</InputLabel>
				<Select
					id="select"
					labelId="select-label"
					value={input}
					// label="Age"
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
		</Box>
	);
};

export default Dropdown;
