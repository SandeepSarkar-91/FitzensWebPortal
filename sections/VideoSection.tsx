
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { PlayIcon } from '../components/icons';

const VideoSection: React.FC = () => {
    return (
        <SectionWrapper id="video" className="bg-black text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">See Fitzens in Action</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">Watch how athletes around the world are connecting and competing.</p>
            
            <div className="relative max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-lime-500/10 group cursor-pointer border-2 border-gray-800 hover:border-lime-400/50 transition-all">
                <img 
                    src="https://picsum.photos/seed/athlete/1280/720"
                    alt="Athlete training video thumbnail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white/20 backdrop-blur-sm p-6 rounded-full group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-lime-400/50" aria-label="Play Video">
                        <PlayIcon className="w-12 h-12 text-white" />
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VideoSection;
