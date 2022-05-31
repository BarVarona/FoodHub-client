
import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextInputField from '../atoms/TextInputField';

export default function DatePickerInput(props) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date of visit"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          props.onChange(newValue)
        }}        
        renderInput={(params) => <TextInputField {...params} />}
      />
    </LocalizationProvider>
  );
}