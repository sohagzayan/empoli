import { cn } from '@/lib/utils';
import React from 'react';

interface InputFieldWithIconProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  icon?: React.ElementType | null; // Icon is now optional (can be null)
  className?: string;
  inputClassName?: string;
  type?: string;
  label?: string;
  showLabel?: boolean;
  labelClassName?: string;
  [x: string]: any; // To allow any other input attributes
}

const InputField: React.FC<InputFieldWithIconProps> = ({
  value = '',
  onChange,
  placeholder = 'Enter text',
  icon: Icon = null, // Default is null (no icon)
  className = '',
  inputClassName = '',
  type = 'text',
  label = 'Label',
  showLabel = false,
  labelClassName = '',
  ...rest
}) => {
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
          'flex items-center space-x-3 rounded-full border-2 border-transparent bg-[rgba(255,255,255,0.06)] px-4 py-3 transition-all duration-300 focus-within:border-blue-500', // Added focus-within here
          className,
        )}
      >
        {Icon && <Icon className="text-white" />}{' '}
        {/* Render icon only if passed */}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            'w-full bg-transparent text-white placeholder-gray-400 focus:outline-none',
            inputClassName,
          )}
          {...rest}
        />
      </div>
    </div>
  );
};

export default InputField;
