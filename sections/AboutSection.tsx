
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { content } from '../content/content';

const AboutSection: React.FC = () => {
    return (
        <SectionWrapper id="about" className="bg-black">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white">{content.about.title}</h2>
            </div>

            <div className="mt-12 max-w-3xl mx-auto space-y-6">
                {content.about.content.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-300 leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
