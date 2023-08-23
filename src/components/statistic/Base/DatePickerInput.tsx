import React, { forwardRef } from 'react';
import { Input } from 'reactstrap';

const DatePickerInput = forwardRef(({ value, onClick, onChange, ...props }: any, ref) => (
  <Input {...props} autoComplete="off" onChange={onChange} onClick={onClick} ref={ref} value={value} />
));

export default DatePickerInput;
