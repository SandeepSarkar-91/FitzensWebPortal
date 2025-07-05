
import React from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '' }) => {
    return (
        <section id={id} className={`py-20 lg:py-32 ${className}`}>
            <div className="container mx-auto px-6 max-w-6xl">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
