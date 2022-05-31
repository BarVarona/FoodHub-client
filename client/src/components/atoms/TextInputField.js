
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { _orange } from '../../styles/_colors';

const TextInputField = styled(TextField)({
    '& label.Mui-focused': {
      color: _orange,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: _orange,
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: _orange,
      },
      '&.Mui-focused fieldset': {
        borderColor: _orange,
      },
    },
});

export default TextInputField;