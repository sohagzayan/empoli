import clsx from 'clsx';
import React from 'react';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'danger'; // You can add more variants
    text: string;
    onClick?: () => void;
    className?: string; // Allows for additional custom Tailwind CSS classes
    type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    text,
    onClick,
    className = '',
    type = 'button',
}) => {
    // Define base and variant-specific styles
    const baseClasses =
        'transition-all ease-in-out duration-300 px-6 py-2 font-500 rounded-md';

    const variants: Record<string, string> = {
        primary: 'border-2 border-theme1 bg-transparent hover:bg-theme1 text-theme1 hover:text-white',
        secondary: 'border-2 border-theme1 bg-theme1 hover:bg-transparent text-white hover:text-theme1',
        danger: 'border-2 border-red-500 bg-red-500 hover:bg-transparent text-white hover:text-red-500',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(baseClasses, variants[variant], className)}
        >
            {text}
        </button>
    );
};

export default Button;
