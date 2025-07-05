
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { content } from '../content/content';
import { SparklesIcon } from '../components/icons';

const AboutSection: React.FC = () => {
    return (
        <SectionWrapper id="about" className="bg-black">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white">{content.about.title}</h2>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">{content.about.description}</p>
            </div>

            <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
                {content.about.features.map((feature, index) => (
                    <div key={index} className="flex">
                        <div className="flex-shrink-0 mr-5 mt-1">
                            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-lime-400/20">
                                <SparklesIcon className="h-5 w-5 text-lime-400" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                            <p className="mt-2 text-gray-400">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
