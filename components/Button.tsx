
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseClasses = "px-6 py-3 font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4";

    const variantClasses = {
        primary: "bg-lime-400 text-black hover:bg-lime-300 focus:ring-lime-500/50",
        secondary: "bg-gray-700 text-white hover:bg-gray-600 focus:ring-gray-500/50"
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
