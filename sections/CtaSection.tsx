
import React from 'react';
import { content } from '../content/content';
import Button from '../components/Button';

const CtaSection: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-gray-900/50">
            <div className="relative container mx-auto px-6 max-w-3xl text-center">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] bg-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                    {content.cta.title}
                </h2>
                <p className="mt-6 text-lg text-gray-300">
                    {content.cta.description}
                </p>
                <div className="mt-10">
                    <Button variant="primary" className="text-lg px-10 py-4">{content.cta.cta}</Button>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
