import React from 'react';
import { Link } from 'react-router-dom';

const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstaIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YTIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const TelegramIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer page-wrapper">
      <div className="container">
        
        {/* Social Section Header */}
        <div className="social-section-header text-center" style={{ marginBottom: '50px' }}>
          <h2 className="gradient-text-alt" style={{ fontSize: '2.5rem', letterSpacing: '2px', marginBottom: '15px' }}>[ INITIATING GLOBAL COMM-LINKS ]</h2>
          <p className="text-muted" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Sync your terminal to the $ONC network. Do not miss a single transmission from the Abyss.
          </p>
        </div>

        {/* Social Control Panels */}
        <div className="social-control-panels">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="glass-panel social-panel twitter-panel">
            <div className="social-icon-wrapper">
              <XIcon className="social-icon" />
            </div>
            <h4>🐦 X (Twitter) Node</h4>
            <p>Real-time Network Updates & Airdrop Transmissions.</p>
          </a>

          <a href="https://www.instagram.com/pyaaz_memes/" target="_blank" rel="noopener noreferrer" className="glass-panel social-panel insta-panel">
            <div className="social-icon-wrapper">
              <InstaIcon className="social-icon" />
            </div>
            <h4>📸 Insta-Archive</h4>
            <p>Leaked Holograms & Lab Footage.</p>
          </a>

          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="glass-panel social-panel yt-panel">
            <div className="social-icon-wrapper">
              <YTIcon className="social-icon" />
            </div>
            <h4>🎥 YT Frequency</h4>
            <p>Deep-Dive Video Briefings & Ecosystem Lore.</p>
          </a>

          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="glass-panel social-panel telegram-panel">
            <div className="social-icon-wrapper">
              <TelegramIcon className="social-icon" />
            </div>
            <h4>✈️ Telegram Signal</h4>
            <p>Direct Secure Line to the Developer Bulbs & Community.</p>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center" style={{ marginTop: '60px', borderTop: '1px solid rgba(255,215,0,0.1)', paddingTop: '40px' }}>
          <h3 className="gradient-text" style={{fontSize: '2rem', marginBottom: '15px'}}>$ONION COIN</h3>
          <p className="text-muted" style={{marginBottom: '15px'}}>© 2024 ONION COIN - ALL RIGHTS RESERVED</p>
          <div style={{ marginBottom: '20px' }}>
            <Link to="/terms" style={{ color: 'var(--gold-primary)', textDecoration: 'underline', fontSize: '0.95rem' }}>Terms & Disclaimer</Link>
          </div>
        </div>
      </div>
      
      <style>{`
        .footer {
          background: rgba(31, 11, 53, 0.9);
          border-top: 1px solid rgba(255, 215, 0, 0.2);
          padding: 80px 0 40px 0;
          margin-top: 80px;
        }
        
        .social-control-panels {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }
        
        .social-panel {
          padding: 30px 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 20px;
          border: 1px solid rgba(255, 215, 0, 0.1);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .social-icon-wrapper {
          width: 60px;
          height: 60px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }
        
        .social-icon {
          color: white;
          width: 28px;
          height: 28px;
          transition: all 0.3s ease;
        }
        
        .social-panel h4 {
          color: var(--text-main);
          font-size: 1.15rem;
          margin-bottom: 12px;
          transition: color 0.3s;
        }
        
        .social-panel p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }
        
        /* High-Tech Hover Animations */
        .twitter-panel:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.6), inset 0 0 25px rgba(255, 215, 0, 0.3);
          border-color: var(--gold-primary);
        }
        .twitter-panel:hover h4 { color: var(--gold-primary); }
        .twitter-panel:hover .social-icon-wrapper { border-color: var(--gold-primary); }
        .twitter-panel:hover .social-icon { color: var(--gold-primary); }
        
        .insta-panel:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.6), inset 0 0 25px rgba(216, 69, 255, 0.3);
          border-color: var(--accent-pink);
        }
        .insta-panel:hover h4 { color: var(--accent-pink); }
        .insta-panel:hover .social-icon-wrapper { border-color: var(--accent-pink); }
        .insta-panel:hover .social-icon { color: var(--accent-pink); }
        
        .yt-panel:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.6), inset 0 0 25px rgba(255, 0, 0, 0.3);
          border-color: #ff0000;
        }
        .yt-panel:hover h4 { color: #ff0000; }
        .yt-panel:hover .social-icon-wrapper { border-color: #ff0000; }
        .yt-panel:hover .social-icon { color: #ff0000; }
        
        .telegram-panel:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.6), inset 0 0 25px rgba(0, 136, 204, 0.3);
          border-color: #0088cc;
        }
        .telegram-panel:hover h4 { color: #0088cc; }
        .telegram-panel:hover .social-icon-wrapper { border-color: #0088cc; }
        .telegram-panel:hover .social-icon { color: #0088cc; }

        @media (max-width: 992px) {
          .social-control-panels {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .social-control-panels {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
