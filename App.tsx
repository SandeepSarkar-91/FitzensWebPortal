
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import VideoSection from './sections/VideoSection';
import LeaderboardSection from './sections/LeaderboardSection';
import MatchSection from './sections/MatchSection';
import TeamUpSection from './sections/TeamUpSection';
import DataPortalSection from './sections/DataPortalSection';
import AboutSection from './sections/AboutSection';
import VisionSection from './sections/VisionSection';
import CtaSection from './sections/CtaSection';

const App: React.FC = () => {
    return (
        <div className="bg-black overflow-x-hidden">
            <Header />
            <main>
                <HeroSection />
                <VideoSection />
                <LeaderboardSection />
                <MatchSection />
                <TeamUpSection />
                <DataPortalSection />
                <AboutSection />
                <VisionSection />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
