/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface Props {
  name: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string,
  half?: boolean,
  autoFocus?: boolean,
  type?: string,
	errorMessage?:string
  handleShowPassword?: () => void,
}

const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword, errorMessage }: Props) => (
	<Grid item xs={12} sm={half ? 6 : 12}>
		<TextField
			name={name}
			onChange={handleChange}
			variant="outlined"
			sx={{ margin: 1 }}
			required
			error={!!errorMessage}
			fullWidth
			helperText={errorMessage}
			label={label}
			autoFocus={autoFocus}
			type={type}
			InputProps={{
				endAdornment: name === 'password' ? (
					<InputAdornment position="end">
						<IconButton onClick={handleShowPassword}>
							{type === 'password' ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				) : null
			}}
		/>
	</Grid>
);

export default Input;
