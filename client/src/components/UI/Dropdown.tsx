import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { IQuestion } from '../../types';

interface DropdownProps {
	questionInfo: IQuestion;
}

const Dropdown: React.FC<DropdownProps> = ({ questionInfo }) => {
	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="select-label">{questionInfo.text}</InputLabel>
				<Select
					id="select"
					labelId="select-label"
					value={questionInfo?.answerOptions?.[0]}
					label="Age"
					onChange={() => {}}
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
