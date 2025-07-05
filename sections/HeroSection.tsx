
import React from 'react';
import { content } from '../content/content';
import Button from '../components/Button';
import { SparklesIcon } from '../components/icons';

const HeroSection: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-24 pb-12">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-lime-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-[40vw] h-[40vh] bg-sky-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative z-10 container mx-auto px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
                    {content.hero.headline}
                    <br />
                    <span className="relative inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-500">{content.hero.headlineHighlight}</span>
                         <SparklesIcon className="absolute -top-4 -right-8 w-10 h-10 text-lime-400 hidden md:block" />
                    </span>
                </h1>
                <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
                    {content.hero.subheadline}
                </p>
                <div className="mt-12">
                    <Button variant="primary" className="text-lg px-8 py-4">{content.hero.cta}</Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
