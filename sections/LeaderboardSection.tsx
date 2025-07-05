
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { content } from '../content/content';
import { TrophyIcon } from '../components/icons';

const LeaderboardItem: React.FC<{ rank: number; name: string; score: string; avatar: string; isUser?: boolean }> = ({ rank, name, score, avatar, isUser = false }) => (
    <div className={`flex items-center p-3 rounded-lg transition-all duration-300 ${isUser ? 'bg-lime-400/20 scale-105 border border-lime-400' : 'bg-gray-800/50 hover:bg-gray-700/70'}`}>
        <div className={`w-10 text-center font-bold text-lg ${isUser ? 'text-lime-400' : 'text-gray-400'}`}>{rank}</div>
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full mx-4" />
        <div className="flex-grow">
            <p className={`font-semibold ${isUser ? 'text-white' : 'text-gray-200'}`}>{name}</p>
            <p className="text-sm text-gray-400">Global Rank</p>
        </div>
        <div className="text-right">
            <p className={`font-bold text-lg ${isUser ? 'text-lime-400' : 'text-white'}`}>{score}</p>
            <p className="text-xs text-gray-500">Points</p>
        </div>
    </div>
);


const LeaderboardSection: React.FC = () => {
    const leaders = [
        { rank: 1, name: 'Alex R.', score: '24,580', avatar: 'https://picsum.photos/seed/leader1/100/100' },
        { rank: 2, name: 'Samantha B.', score: '23,912', avatar: 'https://picsum.photos/seed/leader2/100/100' },
        { rank: 3, name: 'You', score: '22,776', avatar: 'https://picsum.photos/seed/user/100/100', isUser: true },
        { rank: 4, name: 'Kenji T.', score: '21,045', avatar: 'https://picsum.photos/seed/leader3/100/100' },
        { rank: 5, name: 'Maria F.', score: '20,889', avatar: 'https://picsum.photos/seed/leader4/100/100' },
    ];

    return (
        <SectionWrapper id="leaderboards" className="bg-black">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-10">
                    <p className="text-lime-400 font-bold tracking-widest">{content.leaderboard.tag}</p>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-4">{content.leaderboard.title}</h2>
                    <p className="mt-6 text-lg text-gray-300 leading-relaxed">{content.leaderboard.description}</p>
                </div>
                <div className="relative p-6 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl shadow-lime-500/10">
                    <div className="absolute -inset-px bg-gradient-to-r from-lime-500/20 to-transparent rounded-2xl pointer-events-none"></div>
                    <div className="relative flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold text-white flex items-center"><TrophyIcon className="w-6 h-6 mr-3 text-lime-400" /> Global Top 5</h3>
                        <span className="text-xs font-mono text-red-500 animate-pulse">● LIVE</span>
                    </div>
                    <div className="space-y-3">
                        {leaders.map(leader => <LeaderboardItem key={leader.rank} {...leader} />)}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default LeaderboardSection;
