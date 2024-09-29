'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils'; // Adjust the import path as necessary
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

interface InputFieldWithIconProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  inputClassName?: string;
  label?: string;
  showLabel?: boolean;
  labelClassName?: string;
  showPasswordToggle?: boolean; // Option to show or hide the password toggle button
  [x: string]: any; // To allow any other input attributes
}

const InputPasswordField: React.FC<InputFieldWithIconProps> = ({
  value = '',
  onChange,
  placeholder = 'Enter your password',
  className = '',
  inputClassName = '',
  label = 'Password',
  showLabel = false,
  labelClassName = '',
  showPasswordToggle = true, // By default, show the password toggle button
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to handle password visibility

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={cn('w-full')}>
      {showLabel && (
        <label
          className={cn(
            'mb-[6px] block font-semibold text-white',
            labelClassName,
          )}
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          'relative flex items-center rounded-full bg-[rgba(255,255,255,0.06)] px-4 py-3',
          className,
        )}
      >
        <input
          type={isPasswordVisible ? 'text' : 'password'} // Switch between text and password
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            'w-full bg-transparent text-white placeholder-gray-400 focus:outline-none',
            inputClassName,
          )}
          {...rest}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 text-white focus:outline-none"
          >
            {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}{' '}
            {/* Toggle icons */}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputPasswordField;
