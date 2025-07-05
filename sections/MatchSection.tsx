
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { content } from '../content/content';
import { HeartIcon } from '../components/icons';

const ProfileCard: React.FC<{ name: string; distance: string; image: string; blurred?: boolean }> = ({ name, distance, image, blurred = false }) => (
    <div className={`relative w-48 h-64 rounded-2xl overflow-hidden transition-all duration-500 transform ${blurred ? 'hover:scale-105' : 'scale-105'}`}>
        <img src={image} alt={name} className={`w-full h-full object-cover transition-all duration-500 ${blurred ? 'blur-lg scale-110' : 'blur-0 scale-100'}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className={`absolute bottom-4 left-4 right-4 transition-opacity duration-500 ${blurred ? 'opacity-0' : 'opacity-100'}`}>
            <h4 className="font-bold text-white text-lg">{name}</h4>
            <p className="text-sm text-gray-300">{distance}</p>
        </div>
        {blurred && <div className="absolute inset-0 flex items-center justify-center"><p className="text-white font-bold text-xl">?</p></div>}
    </div>
);


const MatchSection: React.FC = () => {
    return (
        <SectionWrapper id="match" className="bg-gray-900/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative h-80 flex justify-center items-center space-x-4 md:order-2">
                    <div className="absolute inset-0 bg-sky-500/10 blur-3xl rounded-full"></div>
                    <ProfileCard name="Jenna D." distance="2 miles away" image="https://picsum.photos/seed/match1/300/400" blurred />
                    <div className="relative z-10 p-4 bg-gray-800 rounded-full shadow-lg">
                        <HeartIcon className="w-10 h-10 text-lime-400"/>
                    </div>
                    <ProfileCard name="Mark P." distance="5 miles away" image="https://picsum.photos/seed/match2/300/400" />
                </div>
                <div className="md:order-1">
                    <p className="text-lime-400 font-bold tracking-widest">{content.match.tag}</p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4">{content.match.title}</h2>
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">{content.match.description}</p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MatchSection;
