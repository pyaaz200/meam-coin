import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import heroVideo from '../assets/banner background video.mp4';
import onionCoin from '../assets/onion coin front 1.png';
import whatIsOncImg from '../assets/what is onc.png';
import growthFrontImg from '../assets/growth  front.png';
import chestImg from '../assets/chest.png';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.slant-reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="page-wrapper main-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-banner-container">
          <video src={heroVideo} autoPlay loop muted playsInline className="hero-banner-video" />
          <div className="hero-coin-overlay">
            <div className="coin-wrapper">
              <img src={onionCoin} alt="Onion Coin" className="onion-hero-logo" />
            </div>
          </div>
        </div>
        <div className="hero-content text-center container">
          <h1 className="coin-title animate-float">$ONION COIN</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section container section-padding">
        <div className="about-grid">
          <div className="about-text slant-reveal">
            <h2>ABOUT <span className="gradient-text">$ONION COIN</span></h2>
            <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '20px' }}>
              ONION COIN (ONC) IS NOT JUST YOUR AVERAGE MEME COIN; IT IS A REVOLUTIONARY DIGITAL ASSET BUILT WITH A TRULY LAYERED FUTURE AND INCREDIBLE POTENTIAL FOR EXPONENTIAL GROWTH! AS YOU PEEL BACK THE LAYERS OF THIS EXCITING NEW PROJECT, YOU WILL DISCOVER A STRONG COMMUNITY AND INNOVATIVE TOKENOMICS DESIGNED FOR MASSIVE SCALABILITY. INVESTORS ARE ALREADY GETTING READY FOR UNPRECEDENTED LAYERED PROFITS BECAUSE THIS NEXT-GENERATION CRYPTO SENSATION WAS RECENTLY HYPER-LAUNCHED WITH EXPLOSIVE MOMENTUM AT pump.fun GET READY TO CRY TEARS OF JOY AS ONC TAKES OVER THE CRYPTO WORLD!
            </p>
          </div>
          <div className="about-img slant-reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={whatIsOncImg} alt="What is ONC" style={{ width: '80%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} fetchpriority="high" />
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="about-section container section-padding">
        <div className="about-grid">
          <div className="about-img slant-reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={growthFrontImg} alt="Growth Potential" style={{ width: '80%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} fetchpriority="high" />
          </div>
          <div className="about-text slant-reveal">
            <h2>GROWTH <span className="gradient-text">POTENTIAL</span></h2>
            <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '20px' }}>
              Investing in ONION COIN isn't just about holding a memecoin; it's about joining a dynamic ecosystem built for sustainable growth. By holding $ONC, you gain access to exclusive community rewards, future staking pools, and layered airdrops designed to multiply your holdings over time. As our market cap expands and the community builds more layers, early adopters are uniquely positioned to benefit from exponential returns. Plant your seeds today, hold strong, and watch your portfolio grow layer by layer!
            </p>
          </div>
        </div>
      </section>

      {/* Treasure Section */}
      <section className="about-section container section-padding">
        <div className="about-grid">
          <div className="about-text slant-reveal">
            <h2>THE REAL <span className="gradient-text">TREASURE</span></h2>
            <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '20px' }}>
              Beyond the initial layers lies the true potential of our community-driven ecosystem. The real treasure of ONION COIN isn't just in short-term gains, but in the long-term value created by a dedicated and passionate community. We are building a secure vault of decentralized wealth where transparency, fair tokenomics, and continuous innovation unlock unprecedented rewards for dedicated holders. Open the chest of opportunities and secure your financial future in the cryptosphere.
            </p>
          </div>
          <div className="about-img slant-reveal" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={chestImg} alt="Treasure Chest" style={{ width: '80%', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} fetchpriority="high" />
          </div>
        </div>
      </section>

      {/* Features Outline */}
      <section className="feature-section container section-padding text-center">
        <h2>OUR <span className="gradient-text">FEATURES</span></h2>

        <div className="roadmap-timeline">
          <div className="roadmap-line"></div>

          <div className="onion-node slant-reveal">
            <div className="onion-shape">
              <div className="onion-content">
                <h3 className="gradient-text-alt">LIVE PRICE</h3>
                <p>Track unstoppable ascent with real-time layered metrics.</p>
              </div>
            </div>
            <div className="roadmap-dot"></div>
          </div>

          <div className="onion-node slant-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="onion-shape">
              <div className="onion-content">
                <h3 className="gradient-text-alt">LEAK ALERTS</h3>
                <p>Real-time updates and exclusive insider alpha.</p>
              </div>
            </div>
            <div className="roadmap-dot"></div>
          </div>

          <div className="onion-node slant-reveal" style={{ transitionDelay: '0.4s' }}>
            <div className="onion-shape">
              <div className="onion-content">
                <h3 className="gradient-text-alt">SOLANA POWER</h3>
                <p>Near-instant transactions with virtually zero gas fees.</p>
              </div>
            </div>
            <div className="roadmap-dot"></div>
          </div>

          <div className="onion-node slant-reveal" style={{ transitionDelay: '0.6s' }}>
            <div className="onion-shape">
              <div className="onion-content">
                <h3 className="gradient-text-alt">SECURE</h3>
                <p>100% rug-proof, burned LP & renounced contracts.</p>
              </div>
            </div>
            <div className="roadmap-dot"></div>
          </div>

        </div>
      </section>

      <style>{`
        .slant-reveal {
          opacity: 0;
          transform: translateY(60px) rotate(3deg);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slant-reveal.active {
          opacity: 1;
          transform: translateY(0) rotate(0);
        }
        .hero-section {
          width: 100%;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-banner-container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-banner-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          // filter: brightness(0.6) blur(4px);
        }
        .hero-coin-overlay {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .coin-wrapper {
          position: relative;
          z-index: 3;
          filter: drop-shadow(0px 0px 20px rgba(138, 43, 226, 0.8)); 
          animation: pulseGlow 2.5s infinite alternate ease-in-out;
        }
        .onion-hero-logo {
          display: block;
          width: 500px;
          height: 500px;
          object-fit: cover;
          object-position: center 30%; /* Shifts focus up to skip the text at the bottom */
          clip-path: circle(46% at 50% 50%); /* Crops exactly to the coin shape */
        }
        .coin-title {
          font-size: 6rem;
          margin: 20px 0;
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          background: linear-gradient(to bottom, #FFFDE4 0%, #FFD700 40%, #E69A00 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0px 5px 5px rgba(0,0,0,0.8)) drop-shadow(0px 0px 20px rgba(138, 43, 226, 0.6));
          letter-spacing: 4px;
          position: relative;
          z-index: 2;
        }
        @keyframes pulseGlow {
          0% { filter: drop-shadow(0px 0px 15px rgba(138, 43, 226, 0.5)); }
          100% { filter: drop-shadow(0px 0px 35px rgba(255, 215, 0, 0.9)); }
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .roadmap-timeline {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin: 80px auto 20px auto;
          max-width: 1100px;
        }
        .roadmap-line {
          position: absolute;
          bottom: 8px; /* Centers with the 20px dot */
          left: 5%;
          width: 90%;
          height: 4px;
          background: linear-gradient(90deg, rgba(216,69,255,0.1), var(--gold-primary), rgba(216,69,255,0.1));
          z-index: 1;
        }
        .onion-node {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 25px;
          flex: 1;
        }
        .onion-shape {
          width: 200px;
          height: 200px;
          background: var(--bg-card);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 0 50% 50% 50%; /* Tear drop pointing up */
          transform: rotate(45deg);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(138, 43, 226, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .onion-node:hover .onion-shape {
          transform: rotate(45deg) scale(1.05) translate(-5px, -5px);
          border-color: var(--accent-pink);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), inset 0 0 30px rgba(216, 69, 255, 0.3);
        }
        .onion-content {
          transform: rotate(-45deg);
          text-align: center;
          padding: 20px;
          width: 180px;
        }
        .onion-content h3 {
          font-size: 1rem;
          margin-bottom: 8px;
          line-height: 1.2;
        }
        .onion-content p {
          font-size: 0.8rem;
          line-height: 1.4;
          margin: 0;
          color: var(--text-muted);
        }
        .roadmap-dot {
          width: 20px;
          height: 20px;
          background: var(--bg-dark);
          border: 4px solid var(--gold-primary);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--gold-glow);
          z-index: 2;
        }
        @media (max-width: 992px) {
          .roadmap-timeline {
            flex-direction: column;
            align-items: center;
            gap: 50px;
          }
          .roadmap-line {
            width: 4px;
            height: 95%;
            left: 50%;
            top: 2%;
            bottom: auto;
            transform: translateX(-50%);
            background: linear-gradient(180deg, rgba(216,69,255,0.1), var(--gold-primary), rgba(216,69,255,0.1));
          }
          .onion-node {
            flex-direction: column-reverse; /* dot sits on vertical line, onion hangs below */
            gap: 15px;
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; }
          .main-title { font-size: 4rem !important; }
        }
        @media (max-width: 600px) {
          .onion-shape { width: 160px; height: 160px; }
          .onion-content { width: 140px; padding: 10px; }
          .onion-content h3 { font-size: 0.9rem; }
          .onion-content p { font-size: 0.75rem; }
        }
        @media (max-width: 450px) {
          .onion-hero-logo { width: 300px; height: 300px; }
          .coin-title { font-size: 2.5rem; }
          .onion-shape { width: 130px; height: 130px; }
          .onion-content { width: 110px; padding: 5px; }
          .onion-content h3 { font-size: 0.8rem; }
          .onion-content p { font-size: 0.65rem; }
        }
      `}</style>
    </div>
  );
};

export default Home;
