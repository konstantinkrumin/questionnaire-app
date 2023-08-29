import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

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

	const options = questionInfo?.answerOptions || [];

	return (
		<FormGroup>
			<Grid container spacing={2}>
				{options.map((answerOption, idx) => {
					const isChecked = selectedOptions.includes(answerOption);

					return (
						<Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
							<FormControlLabel
								control={
									<Checkbox
										checked={isChecked}
										onChange={() => handleOptionChange(answerOption)}
									/>
								}
								label={answerOption}
							/>
						</Grid>
					);
				})}
			</Grid>
		</FormGroup>
	);
};

export default CheckboxGroup;
