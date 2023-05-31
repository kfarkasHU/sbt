import React from 'react';
import './input.css';

interface InputProps {
  id: string;
  /**
   * Placeholder inside the input
   */
  placeholder?: string;
  /**
   * Label above the input
   */
  label?: string;
  /**
   * Sets the disabled state
   */
  isDisabled: boolean;
  /**
   * Optional change handler
   */
  onChange: (value: string) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  id,
  placeholder,
  label,
  isDisabled,
  onChange
}: InputProps) => {
  return <>
    <label
      id={id + '-label'}
      htmlFor={id + '-input'}
      test-id={id + '-label'}
    >
      {label}
    </label>
    <input
      id={id + '-input'}
      test-id={id + '-input'}
      type='text'
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={(e) => onChange(e.target.value)}
    />
  </>;
};
