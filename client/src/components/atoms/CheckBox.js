
import { Checkbox as muiCheckBox } from '@mui/material';
import { styled } from '@mui/system';
import { _orange } from '../../styles/_colors';

const CheckBox = styled(muiCheckBox)({
    color: _orange,
    '&.Mui-checked': {
      color: _orange,
    },
});

export default CheckBox;
