'use client';

import React from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface PhoneInputFieldProps {
  value: string;
  onChange: (phone: string) => void;
  className?: string;
}

export const PhoneInputField: React.FC<PhoneInputFieldProps> = ({ value, onChange, className }) => {
  return (
    <div className={`phone-input-container ${className}`}>
      <PhoneInput
        defaultCountry="tn"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
