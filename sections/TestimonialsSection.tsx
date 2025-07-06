import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { content } from '../content/content';

const TestimonialCard: React.FC<{ quote: string; name: string; image: string }> = ({ quote, name, image }) => (
    <div className="flex-shrink-0 w-80 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mx-4">
        <div className="flex items-center mb-4">
            <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-lime-400/50" />
            <div>
                <p className="font-bold text-white text-lg">{name}</p>
            </div>
        </div>
        <p className="text-gray-300 italic">"{quote}"</p>
    </div>
);

const TestimonialsSection: React.FC = () => {
    // Duplicate the items for a seamless loop
    const duplicatedItems = [...content.testimonials.items, ...content.testimonials.items];

    return (
        <SectionWrapper id="testimonials" className="bg-black">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white">{content.testimonials.title}</h2>
            </div>
            
            <div className="mt-16 relative">
                <div 
                    className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10"
                    aria-hidden="true"
                ></div>
                <div 
                    className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10"
                    aria-hidden="true"
                ></div>
                
                <div className="w-full overflow-hidden group">
                    <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                        {duplicatedItems.map((item, index) => (
                            <TestimonialCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-352px * ${content.testimonials.items.length})); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
            `}</style>
        </SectionWrapper>
    );
};

export default TestimonialsSection;
