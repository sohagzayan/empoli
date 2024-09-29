import { cn } from '@/lib/utils';
import React from 'react';

interface InputFieldWithIconProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    icon?: React.ElementType | null;  // Icon is now optional (can be null)
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
    icon: Icon = null,  // Default is null (no icon)
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
                <label className={cn('text-white font-semibold mb-[6px] block', labelClassName)}>
                    {label}
                </label>
            )}
            <div className={cn('flex items-center space-x-3 bg-[rgba(255,255,255,0.06)] rounded-full px-4 py-3', className)}>
                {Icon && <Icon className="text-white" />} {/* Render icon only if passed */}
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={cn('bg-transparent text-white focus:outline-none placeholder-gray-400 w-full', inputClassName)}
                    {...rest}
                />
            </div>
        </div>
    );
};

export default InputField;
