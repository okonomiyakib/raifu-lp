import React, { useState } from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { NewSection } from './components/sections/NewSection';
import { SubscriptionTeaser } from './components/sections/SubscriptionTeaser';
import { LimitedMenuSection } from './components/sections/LimitedMenuSection';
import { NewsSection } from './components/sections/NewsSection';
import { ChallengeSection } from './components/sections/ChallengeSection';
import { ActivitiesSection } from './components/sections/ActivitiesSection';
import { GameMenuSection } from './components/sections/GameMenuSection';
import { RankingSection } from './components/sections/RankingSection';
import { Footer } from './components/sections/Footer';
import { ImageModal } from './components/features/ImageModal';
import { CalendarModal } from './components/features/CalendarModal';
import { Game } from './components/features/Game';
import { Omikuji } from './components/features/Omikuji';
import { Quiz } from './components/features/Quiz';
import { ToppingGacha } from './components/features/ToppingGacha';

const App = () => {
    const [gameActive, setGameActive] = useState(false);
    const [omikujiActive, setOmikujiActive] = useState(false);
    const [quizActive, setQuizActive] = useState(false);
    const [gachaActive, setGachaActive] = useState(false);
    const [calendarActive, setCalendarActive] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const handleNewsClick = (item) => {
        if (item.action === 'calendar') {
            setCalendarActive(true);
        }
    };

    return (
        <React.Fragment>
            <div className="min-h-screen text-white font-sans max-w-[600px] mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/30 backdrop-blur-sm">
                <Header />
                <main>
                    <Hero />
                    <NewSection />
                    <SubscriptionTeaser />
                    <LimitedMenuSection onImageClick={setModalImage} />
                    <NewsSection onNewsClick={handleNewsClick} />
                    <ChallengeSection />
                    <ActivitiesSection />
                    <GameMenuSection
                        onPlayClick={() => setGameActive(true)}
                        onOmikujiClick={() => setOmikujiActive(true)}
                        onQuizClick={() => setQuizActive(true)}
                        onGachaClick={() => setGachaActive(true)}
                    />
                    <RankingSection />
                </main>
                <Footer />
            </div>

            {gameActive && <Game active={gameActive} onClose={() => setGameActive(false)} />}
            <Omikuji active={omikujiActive} onClose={() => setOmikujiActive(false)} />
            <Quiz active={quizActive} onClose={() => setQuizActive(false)} />
            <ToppingGacha active={gachaActive} onClose={() => setGachaActive(false)} />
            <CalendarModal active={calendarActive} onClose={() => setCalendarActive(false)} />
            <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
        </React.Fragment>
    );
};

export default App;
