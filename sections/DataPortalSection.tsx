
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { content } from '../content/content';
import { BarChartIcon } from '../components/icons';

const DataPortalSection: React.FC = () => {
    return (
        <SectionWrapper id="portal" className="bg-gray-900/50">
            <div className="text-center max-w-3xl mx-auto">
                 <p className="text-lime-400 font-bold tracking-widest">{content.portal.tag}</p>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4">{content.portal.title}</h2>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">{content.portal.description}</p>
            </div>
            <div className="mt-12 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-lime-500 to-sky-500 rounded-2xl blur-lg opacity-20 animate-pulse"></div>
                <div className="relative bg-black border border-gray-700 rounded-2xl p-4 shadow-2xl shadow-black/50">
                    <div className="aspect-w-16 aspect-h-9">
                        <img 
                            src="https://picsum.photos/seed/dashboard/1200/675" 
                            alt="Data Portal Dashboard" 
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                     <div className="absolute top-6 left-6 flex items-center bg-black/50 p-2 rounded-lg">
                        <BarChartIcon className="w-6 h-6 text-lime-400 mr-2"/>
                        <span className="font-bold text-white">Your Dashboard</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default DataPortalSection;
