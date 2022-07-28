import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface LabelProps {
  label: string;
}
//https://next.material-ui-pickers.dev/guides/typescript
export default function BasicDateTimePicker({ label }: LabelProps) {
  const [value, setValue] = useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        inputFormat="yyyy-MM-dd hh:mm a"
        mask="___-__-__ __:__ _M"
        renderInput={props => <TextField {...props} />}
        label={label}
        value={value}
        onChange={newValue => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}
