import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { IQuestion } from '../../types';

interface CheckboxGroupProps {
	questionInfo: IQuestion;
	selectedOptions: string[];
	onSelectedOptionsChange: (selectedOptions: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	questionInfo,
	selectedOptions,
	onSelectedOptionsChange
}) => {
	const handleOptionChange = (option: string) => {
		const updatedSelectedOptions = selectedOptions.includes(option)
			? selectedOptions.filter(item => item !== option)
			: [...selectedOptions, option];

		onSelectedOptionsChange(updatedSelectedOptions);
	};

	return (
		<FormGroup>
			{questionInfo?.answerOptions?.map((answerOption, idx) => {
				const isChecked = selectedOptions.includes(answerOption);

				return (
					<FormControlLabel
						key={idx}
						control={
							<Checkbox
								checked={isChecked}
								onChange={() => handleOptionChange(answerOption)}
							/>
						}
						label={answerOption}
					/>
				);
			})}
		</FormGroup>
	);
};

export default CheckboxGroup;
