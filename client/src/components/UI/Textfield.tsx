import TextField from '@mui/material/TextField';

import { DisplayStyleType } from '../../types';

interface TextfieldProps {
	input: string;
	onInputChange: (input: string) => void;
	type?: DisplayStyleType.Textfield | DisplayStyleType.Textarea;
}

const Textfield: React.FC<TextfieldProps> = ({
	input,
	onInputChange,
	type = DisplayStyleType.Textfield
}) => {
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		onInputChange(event.target.value);
	};

	if (type === DisplayStyleType.Textfield) {
		return <TextField variant="outlined" value={input} onChange={handleInputChange} />;
	}

	return (
		<TextField
			multiline
			minRows={6}
			value={input}
			variant="outlined"
			onChange={handleInputChange}
		/>
	);
};

export default Textfield;
