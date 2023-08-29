import TextField from '@mui/material/TextField';

interface TextfieldProps {
	input: string;
	onInputChange: (input: string) => void;
}

const Textfield: React.FC<TextfieldProps> = ({ input, onInputChange }) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onInputChange(event.target.value);
	};

	return <TextField variant="outlined" value={input} onChange={handleInputChange} />;
};

export default Textfield;
