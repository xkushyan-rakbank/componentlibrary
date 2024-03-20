import { FormControl, FormHelperText, InputLabel, InputProps, useTheme } from '@mui/material';

import { pixleToEm } from 'src/theme/utils/utils';
import styled from 'styled-components';
import { Input } from '../input/input';

interface ExtendedInputProps  {
  size?: 'small' | 'medium' | 'large';
  inputLabel?: string;
  error?: boolean;
  InputProps ? : InputProps;
  disabled?: boolean;
  inputLabelProps?: object;
}


const defaultProps: ExtendedInputProps = {
  // Define your default props here
  size: 'medium' as const,
  inputLabel : 'Label' as const,
  error : false
};


const FormControlMui = styled(FormControl)`

  & .MuiInputLabel-root {
    font-weight: 500;
    // font-size: ${pixleToEm(12,true)};
    color: ${(props) => props.theme.palette.grey[700]};    line-height : 1em;
    &.Mui-focused {
      color: ${(props) => props.error ? props.theme.palette.danger['light'] : props.theme.palette.text.primary};};
    }
  }

  & .MuiFormHelperText-root .Mui-error{
    color: ${(props) => props.error ? props.theme.palette.danger['light'] : props.theme.palette.text.primary};
  }

  & .MuiFormHelperText-root{
    font-weight: 500;
    line-height : 1em;
    margin-top: ${pixleToEm(5,true)};
    color: ${(props) => props.theme.palette.grey[700]};
  }


`

function InputFeild({ size = defaultProps.size, inputLabel = defaultProps.inputLabel, InputProps, error = defaultProps.error, disabled}: ExtendedInputProps) {
  const theme = useTheme()
  return (
    <FormControlMui error={error} theme={theme} variant="standard">
        <InputLabel disableAnimation
        shrink={true}
        htmlFor="input-with-icon-adornment">
          {inputLabel}
        </InputLabel>
        <Input
        error={error}
        disabled={disabled}
        size={size || 'medium'}
         {...InputProps} 
         />
        <FormHelperText>Hint</FormHelperText>
        </FormControlMui>

  );
}
export {
  InputFeild
};

