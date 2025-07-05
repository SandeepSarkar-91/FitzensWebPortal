
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { content } from '../content/content';
import { UsersIcon, TrophyIcon, SparklesIcon } from '../components/icons';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-lime-400/50 transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center mb-4">
            <div className="p-2 bg-lime-400/20 rounded-lg mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
    </div>
);


const TeamUpSection: React.FC = () => {
    const icons = [
        <UsersIcon key="users" className="w-6 h-6 text-lime-400"/>,
        <TrophyIcon key="trophy" className="w-6 h-6 text-lime-400"/>,
        <SparklesIcon key="chat" className="w-6 h-6 text-lime-400"/>
    ];

    return (
        <SectionWrapper id="compete" className="relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://picsum.photos/seed/bg-compete/1920/1080')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50"></div>
            
            <div className="relative text-center max-w-3xl mx-auto">
                 <p className="text-lime-400 font-bold tracking-widest">{content.teamUp.tag}</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4">{content.teamUp.title}</h2>
            </div>
            
            <div className="relative mt-16 grid md:grid-cols-3 gap-8">
                {content.teamUp.features.map((feature, index) => (
                    <FeatureCard
                        key={feature.name}
                        icon={icons[index]}
                        title={feature.name}
                        description={feature.description}
                    />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default TeamUpSection;
