import React, { useState } from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { NewSection } from './components/sections/NewSection';
import { DesignGalleryModal } from './components/sections/DesignGallerySection';
import { SubscriptionTeaser } from './components/sections/SubscriptionTeaser';
import { LimitedMenuSection } from './components/sections/LimitedMenuSection';
import { NewsSection } from './components/sections/NewsSection';
import { ChallengeSection } from './components/sections/ChallengeSection';
import { ActivitiesSection } from './components/sections/ActivitiesSection';
import { GameMenuSection } from './components/sections/GameMenuSection';
import { Footer } from './components/sections/Footer';
import { TeamSection } from './components/sections/TeamSection';
import { ImageModal } from './components/features/ImageModal';
import { CalendarModal } from './components/features/CalendarModal';
import { Game } from './components/features/Game';
import { Omikuji } from './components/features/Omikuji';
import { Quiz } from './components/features/Quiz';
import { ToppingGacha } from './components/features/ToppingGacha';
import { EmberParticles } from './components/ui/EmberParticles';

const App = () => {
    const [gameActive, setGameActive] = useState(false);
    const [omikujiActive, setOmikujiActive] = useState(false);
    const [quizActive, setQuizActive] = useState(false);
    const [gachaActive, setGachaActive] = useState(false);
    const [calendarActive, setCalendarActive] = useState(false);

    const [designActive, setDesignActive] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const handleNewsClick = (item) => {
        if (item.action === 'calendar') setCalendarActive(true);
    };

    return (
        <React.Fragment>
            <div id="top" className="page-bg min-h-screen text-[#fce8e8] font-sans relative">
                <EmberParticles />

                {/* レスポンシブコンテナ：モバイルは全幅、タブレット以上は中央寄せ */}
                <div className="w-full max-w-[540px] sm:max-w-[640px] md:max-w-[720px] lg:max-w-[800px] mx-auto relative z-10 shadow-[0_0_60px_rgba(0,0,0,0.3)]">
                    <Header onDesignClick={() => setDesignActive(true)} />
                    <main>
                        <Hero />

                        <div id="new" className="section-a">
                            <NewSection />
                        </div>

                        <div className="ichimatsu-divider"></div>

                        <div id="menu" className="section-b">
                            <LimitedMenuSection onImageClick={setModalImage} />
                        </div>

                        <div className="ichimatsu-divider"></div>

                        <div id="challenge" className="section-a">
                            <ChallengeSection />
                        </div>

                        <div className="ichimatsu-divider"></div>

                        <div className="section-b">
                            <NewsSection onNewsClick={handleNewsClick} />
                        </div>

                        <div className="ichimatsu-divider"></div>

                        <div id="activities" className="section-a">
                            <ActivitiesSection />
                        </div>

                        <div className="ichimatsu-divider"></div>

                        <div id="games" className="section-b">
                            <GameMenuSection
                                onPlayClick={() => setGameActive(true)}
                                onOmikujiClick={() => setOmikujiActive(true)}
                                onQuizClick={() => setQuizActive(true)}
                                onGachaClick={() => setGachaActive(true)}
                            />
                        </div>



                        <div className="ichimatsu-divider"></div>

                        <div className="section-accent">
                            <SubscriptionTeaser />
                        </div>

                        <div className="ichimatsu-divider"></div>

                        <div id="team" className="section-b">
                            <TeamSection />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>

            {gameActive && <Game active={gameActive} onClose={() => setGameActive(false)} />}
            <Omikuji active={omikujiActive} onClose={() => setOmikujiActive(false)} />
            <Quiz active={quizActive} onClose={() => setQuizActive(false)} />
            <ToppingGacha active={gachaActive} onClose={() => setGachaActive(false)} />
            <CalendarModal active={calendarActive} onClose={() => setCalendarActive(false)} />

            <DesignGalleryModal active={designActive} onClose={() => setDesignActive(false)} onImageClick={setModalImage} />
            <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
        </React.Fragment>
    );
};

export default App;
