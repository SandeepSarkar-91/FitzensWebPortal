
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { content } from '../content/content';

const VisionSection: React.FC = () => {
    return (
        <SectionWrapper id="vision" className="bg-gray-900/50 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white">{content.vision.title}</h2>
                </div>

                <div className="mt-12 max-w-3xl mx-auto space-y-6 text-center">
                    {content.vision.content.map((paragraph, index) => (
                        <p key={index} className="text-lg text-gray-300 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VisionSection;
