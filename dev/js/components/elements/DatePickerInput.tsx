import React from 'react';
import {Input} from './index';
import DatePicker, {ReactDatePickerProps} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerInput = (props: ReactDatePickerProps) => <DatePicker dateFormat="DD.MM.YYYY" {...props}
                                                                     customInput={<Input type='text'/>}/>;
export {DatePickerInput};