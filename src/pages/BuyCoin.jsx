import React from 'react';
import { Wallet, CircleDollarSign, Rocket, Zap } from 'lucide-react';
import bannerImg from '../assets/banner 2.png';

const BuyCoin = () => {
  return (
    <div className="page-wrapper">
      <div className="buy-banner-container">
        <img src={bannerImg} alt="Buy Coin Banner" className="buy-banner-img" />
        <div className="buy-banner-overlay flex-center" style={{ width: '100%', height: '100%' }}>
          <div className="glass-panel swap-container text-center" style={{ zIndex: 3, margin: '20px' }}>
             <h2 className="gradient-text animate-float" style={{fontSize: '3rem', marginBottom: '20px'}}>GET $ONC</h2>
             <p className="text-muted" style={{marginBottom: '40px', fontSize: '1.2rem', lineHeight: '1.6'}}>
                ONION COIN is officially live! Join the movement and secure your bag directly on our verified platform.
             </p>

             <a 
               href="https://pump.fun" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="glass-btn pump-fun-btn"
             >
                BUY NOW
             </a>
          </div>
        </div>
      </div>

      <div className="container section-padding how-to-buy-section">
        <h2 className="gradient-text-alt text-center" style={{fontSize: '2.5rem', marginBottom: '40px'}}>THE $ONC LAUNCH PROTOCOL</h2>
        
        <div className="protocol-grid">
          <div className="glass-panel protocol-card">
            <div className="protocol-icon-wrapper">
               <Wallet className="protocol-icon" />
            </div>
            <h3>Step 1: Download a Wallet</h3>
            <p>Get yourself a Solana-compatible crypto wallet. We highly recommend Phantom Wallet (available as a browser extension or mobile app). It’s fast, secure, and built specifically for the network.</p>
          </div>

          <div className="glass-panel protocol-card">
            <div className="protocol-icon-wrapper">
               <CircleDollarSign className="protocol-icon" />
            </div>
            <h3>Step 2: Load Up on SOL</h3>
            <p>You need Solana ($SOL) to buy $ONION COIN and cover the tiny network fees. Purchase some $SOL directly inside your Phantom wallet, or buy it on a major exchange (like Binance or Coinbase) and send it to your new Phantom wallet address.</p>
          </div>

          <div className="glass-panel protocol-card">
            <div className="protocol-icon-wrapper">
               <Rocket className="protocol-icon" />
            </div>
            <h3>Step 3: Access the Portal</h3>
            <p>Click the "BUY NOW" button above. This will teleport you directly to our official, verified $ONC bonding curve page.</p>
          </div>

          <div className="glass-panel protocol-card">
            <div className="protocol-icon-wrapper">
               <Zap className="protocol-icon" />
            </div>
            <h3>Step 4: Swap and Secure</h3>
            <p>Once on the platform, click "Connect Wallet" in the top corner. Enter the amount of $SOL you want to swap, hit buy, and approve the transaction in your Phantom pop-up. Congratulations, you’ve just peeled back the first layer.</p>
          </div>
        </div>
      </div>

      <style>{`
        .buy-banner-container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .buy-banner-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.7) blur(2px);
        }
        .buy-banner-overlay {
          position: relative;
          z-index: 2;
        }
        .swap-container {
           width: 100%;
           max-width: 500px;
           padding: 50px 40px;
           border: 2px solid rgba(255, 215, 0, 0.4);
           box-shadow: 0 10px 40px rgba(0,0,0,0.5), inset 0 0 20px rgba(255, 215, 0, 0.1);
        }
        .pump-fun-btn {
           display: block;
           width: 100%;
           padding: 20px;
           font-size: 1.5rem;
           font-weight: 800;
           font-family: 'Outfit', sans-serif;
           text-decoration: none;
           text-align: center;
           background: linear-gradient(45deg, var(--gold-primary), #ffeb3b);
           color: #1a0026;
           border: none;
           border-radius: 15px;
           box-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
           transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
           text-transform: uppercase;
           letter-spacing: 2px;
        }
        .pump-fun-btn:hover {
           transform: scale(1.05) translateY(-5px);
           box-shadow: 0 0 50px rgba(255, 215, 0, 0.9), inset 0 0 15px rgba(255,255,255,0.5);
           background: linear-gradient(45deg, #ffeb3b, var(--gold-primary));
           color: #000;
        }

        /* How to Buy Section Styles */
        .how-to-buy-section {
           margin-top: 80px;
           width: 100%;
           max-width: 1000px;
           margin-left: auto;
           margin-right: auto;
        }
        .protocol-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 30px;
        }
        .protocol-card {
           padding: 30px;
           background: rgba(43, 21, 68, 0.4);
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           border-radius: 20px;
           border: 1px solid rgba(255, 215, 0, 0.2);
           transition: transform 0.3s ease, border-color 0.3s;
        }
        .protocol-card:hover {
           transform: translateY(-10px);
           border-color: var(--accent-pink);
           box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 0 15px rgba(216, 69, 255, 0.2);
        }
        .protocol-icon-wrapper {
           width: 60px;
           height: 60px;
           background: rgba(0, 0, 0, 0.3);
           border-radius: 15px;
           display: flex;
           justify-content: center;
           align-items: center;
           margin-bottom: 20px;
           border: 1px solid rgba(255, 215, 0, 0.3);
           box-shadow: inset 0 0 15px rgba(216, 69, 255, 0.2);
        }
        .protocol-icon {
           color: var(--gold-primary);
           width: 32px;
           height: 32px;
           filter: drop-shadow(0 0 5px var(--gold-primary));
        }
        .protocol-card h3 {
           font-size: 1.3rem;
           margin-bottom: 15px;
           color: var(--accent-pink);
        }
        .protocol-card p {
           color: var(--text-muted);
           line-height: 1.6;
           font-size: 0.95rem;
           margin: 0;
        }

        @media (max-width: 768px) {
           .protocol-grid {
              grid-template-columns: 1fr;
           }
        }
      `}</style>
    </div>
  );
};

export default BuyCoin;
