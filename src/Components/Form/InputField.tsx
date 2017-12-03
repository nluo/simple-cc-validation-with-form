import * as React from 'react';
import './style.css';

interface InputFieldProps {
  name: string;
  className: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  isRequired: boolean;
  label: string;
  placeHolder?: string;
  labelExtra?: boolean;
  labelExtraMsg?: string;
}

export default function InputField(props: InputFieldProps) {
  const {
    onChange,
    label,
    value,
    placeHolder,
    isRequired,
    labelExtra,
    className,
    name,
    onBlur,
    labelExtraMsg
  } = props;

  return (
    <div className="form-group">
      <label className="label"> {label} <em>*</em></label>
      <input
        name={name}
        className={className}
        placeholder={placeHolder}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={isRequired} />
      {labelExtra ? <label className="label-info"> {labelExtraMsg}</label> : null}
    </div>
  )
}