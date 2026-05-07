import React from 'react';
import onionconicVid from '../assets/onionconic  banner.mp4';
import onionconicImage from '../assets/onion conic.png';

const HowToBuy = () => {


   return (
      <div className="page-wrapper">
         <div className="onionconic-banner-container">
            <video src={onionconicVid} autoPlay loop muted playsInline className="onionconic-banner-video" />
            <div className="onionconic-banner-overlay">
               <h1 className="gradient-text animate-float" style={{ fontSize: '5rem', textShadow: '0 5px 15px rgba(0,0,0,0.8)' }}>ONION-CONIC</h1>
            </div>
         </div>

         <div className="container section-padding">
            <div className="text-center" style={{ marginBottom: '60px' }}>
               <h2 className="gradient-text-alt" style={{ marginBottom: '20px', fontSize: '2.5rem' }}>THE ONION-CONIC</h2>
               <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '15px', border: '1px solid rgba(255,215,0,0.1)' }}>
                  Welcome to the <strong>ONION-CONIC</strong>—the definitive, decentralized <strong>Encyclopedia of $ONION COIN</strong>.
                  This is not just a simple guide; it is the ultimate repository of our network's knowledge, lore, and high-tech launch protocols.
                  Whether you are a new node syncing to the network or a veteran peeling back the deepest layers of our ecosystem, the Onion-conic holds every transmission, secret, and path to the moon.
               </p>
            </div>

            <div className="archive-entry-grid">
               <div className="archive-image-wrapper glass-panel">
                  <img src={onionconicImage} alt="Onion Conic Encyclopedia" className="archive-image" />
               </div>
               <div className="archive-text-content">
                  <h3 className="archive-title">[ ARCHIVE ENTRY: THE $ONC PROTOCOL ]</h3>

                  <h4 className="archive-subtitle">THE BIO-DIGITAL ANOMALY</h4>
                  <p className="archive-paragraph">
                     You aren't just looking at a standard meme coin; you are looking at a highly classified biological anomaly on the Solana blockchain. Discovered deep within the Abyss Model Simulation at 11,000 meters, the $ONION protocol was engineered to withstand the crushing pressure of traditional finance.
                  </p>

                  <h4 className="archive-subtitle">DECODING THE LAYERS</h4>
                  <p className="archive-paragraph">
                     While other tokens are surface-level, $ONC is built on a complex, multi-layered matrix. Every transaction, every stake, and every new wallet joining the network peels back another layer of the old economy.
                  </p>

                  <h4 className="archive-subtitle">THE CORE DIRECTIVE:</h4>
                  <ul className="archive-list">
                     <li><strong>Decentralized Genome:</strong> 100% Verified. 100% Organic. 1000% Synthetic.</li>
                     <li><strong>Absolute Security:</strong> Encrypted within the purple crystal core of our perpetual vault.</li>
                     <li><strong>Community Sourced:</strong> Powered entirely by the Developer Bulbs and Strategic Plantings of our holders.</li>
                  </ul>

                  <p className="archive-paragraph highlight-paragraph">
                     The simulation is active. The layers are peeling. Secure your seed supply before the rest of the network catches on.
                  </p>
               </div>
            </div>

         </div>

         <style>{`
        .onionconic-banner-container {
          width: 100%;
          height: 60vh;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .onionconic-banner-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.6);
        }
        .onionconic-banner-overlay {
          position: relative;
          z-index: 2;
          text-align: center;
        }
        
        .archive-entry-grid {
           display: flex;
           flex-direction: column;
           gap: 40px;
           margin-top: 40px;
        }
        .archive-image-wrapper {
           border-radius: 20px;
           display: flex;
           justify-content: center;
           align-items: center;
           box-shadow: 0 10px 40px rgba(0,0,0,0.5);
           position: relative;
           padding: 4px;
           background: linear-gradient(45deg, var(--accent-purple), var(--gold-primary));
           width: 100%;
        }
        .archive-image {
           width: 100%;
           height: auto;
           max-height: 450px;
           object-fit: cover;
           border-radius: 16px;
           background: #000;
        }
        .archive-text-content {
           text-align: left;
           background: rgba(20, 5, 40, 0.6);
           padding: 40px;
           border-radius: 20px;
           border: 1px solid rgba(255, 215, 0, 0.1);
           width: 100%;
        }
        .archive-title {
           color: var(--gold-primary);
           font-size: 1.8rem;
           margin-bottom: 30px;
           text-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
           letter-spacing: 1px;
        }
        .archive-subtitle {
           color: var(--text-main);
           font-size: 1.3rem;
           margin-bottom: 15px;
           margin-top: 25px;
        }
        .archive-paragraph {
           color: #d8c6eb;
           font-size: 1.1rem;
           line-height: 1.7;
           margin-bottom: 20px;
        }
        .archive-list {
           list-style-type: none;
           padding: 0;
           margin-bottom: 30px;
        }
        .archive-list li {
           color: #d8c6eb;
           font-size: 1.1rem;
           line-height: 1.7;
           margin-bottom: 12px;
           padding-left: 20px;
           position: relative;
        }
        .archive-list li::before {
           content: '>';
           position: absolute;
           left: 0;
           color: var(--accent-pink);
           font-weight: bold;
        }
        .archive-list li strong {
           color: var(--gold-primary);
        }
        .highlight-paragraph {
           border-left: 4px solid var(--accent-purple);
           padding-left: 20px;
           font-style: italic;
           background: rgba(138, 43, 226, 0.1);
           padding: 15px 20px;
           border-radius: 0 10px 10px 0;
           margin-top: 30px;
        }
        @media (max-width: 992px) {
           .archive-entry-grid {
              grid-template-columns: 1fr;
              gap: 40px;
           }
        }
      `}</style>
      </div>
   );
};

export default HowToBuy;
