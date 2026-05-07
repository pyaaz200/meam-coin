import React, { useEffect } from 'react';
import roadmapVid from '../assets/home banner vid.mp4';
import onionCoin from '../assets/onion coin front 1.png';

const Roadmap = () => {
  const phases = [
    {
      title: "Layer 1: The Sprout",
      tasks: ["Spreading the Onion", "Setup Community", "Patience period", "Setups & merges"]
    },
    {
      title: "Layer 2: The Network",
      tasks: ["Running the Tech", "Marketing and Callings Strategy", "100k+ globalized Influencer Launch"]
    },
    {
      title: "Layer 3: The Golden Peel",
      tasks: ["Collecting the Layers", "Elite adships and partnerships"]
    },
    {
      title: "Layer 4: Onion Singularity",
      tasks: ["Onion layered Matrix Natives", "Staking"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.scroll-reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="page-wrapper">
      <div className="roadmap-banner-container">
        <video src={roadmapVid} autoPlay loop muted playsInline className="roadmap-banner-video" />
        <div className="roadmap-banner-overlay">
          <h1 className="gradient-text animate-float" style={{fontSize: '5rem', textShadow: '0 5px 15px rgba(0,0,0,0.8)'}}>ROAD MAP</h1>
        </div>
      </div>

      <div className="container section-padding">
        <div className="text-center" style={{marginBottom: '50px'}}>
           <p className="text-muted" style={{fontSize: '1.2rem'}}>The layered journey to the moon.</p>
        </div>

        <div className="circuit-timeline">
          <div className="circuit-line">
            <div className="circuit-pulse"></div>
          </div>

          {phases.map((phase, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`circuit-node ${isLeft ? 'node-left' : 'node-right'}`}>
                <div className="circuit-dot"></div>
                <div className={`glass-panel phase-card scroll-reveal ${isLeft ? 'slide-right' : 'slide-left'}`}>
                  <div className="onion-watermark" style={{ backgroundImage: `url(${onionCoin})` }}></div>
                  <h3 className="gradient-text-alt">{phase.title}</h3>
                  <ul>
                    {phase.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .roadmap-banner-container {
          width: 100%;
          height: 60vh;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .roadmap-banner-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.6);
        }
        .roadmap-banner-overlay {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .circuit-timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 50px 0;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* The central glowing line */
        .circuit-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          background: rgba(138, 43, 226, 0.3);
          border-radius: 4px;
          z-index: 1;
          overflow: hidden;
        }

        /* The moving data pulse */
        .circuit-pulse {
          position: absolute;
          top: -50px;
          left: 0;
          width: 100%;
          height: 80px;
          background: linear-gradient(to bottom, transparent, var(--gold-primary), transparent);
          animation: dataPulse 3s linear infinite;
          box-shadow: 0 0 20px var(--gold-primary);
        }

        @keyframes dataPulse {
          0% { top: -10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 110%; opacity: 0; }
        }

        .circuit-node {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          z-index: 2;
        }

        /* Alternate sides */
        .node-left {
          flex-direction: row;
        }
        .node-right {
          flex-direction: row-reverse;
        }

        /* The glowing dot on the line */
        .circuit-dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 28px;
          background: var(--bg-dark);
          border: 4px solid var(--accent-pink);
          border-radius: 50%;
          box-shadow: 0 0 15px var(--accent-purple), inset 0 0 5px var(--gold-primary);
          z-index: 3;
          transition: all 0.3s ease;
        }

        .circuit-node:hover .circuit-dot {
          background: var(--gold-primary);
          box-shadow: 0 0 25px var(--gold-primary), 0 0 40px var(--accent-pink);
          border-color: var(--gold-primary);
        }

        /* Glassmorphism Phase Card */
        .phase-card {
          width: 42%;
          padding: 40px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(255, 215, 0, 0.2);
          background: rgba(43, 21, 68, 0.6);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 20px;
        }

        /* "Crazy" Hover State */
        .phase-card:hover {
          transform: scale(1.05) !important; /* Override intersection observer transform on hover */
          border-color: var(--gold-primary);
          box-shadow: 0 0 30px rgba(255, 215, 0, 0.6), 0 0 60px rgba(138, 43, 226, 0.4);
          background: rgba(43, 21, 68, 0.8);
          z-index: 10;
        }

        /* Watermark */
        .onion-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 250px;
          height: 250px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          opacity: 0.05;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
        }
        
        .phase-card:hover .onion-watermark {
          opacity: 0.15;
          animation: pulseWatermark 2s infinite alternate ease-in-out;
        }

        @keyframes pulseWatermark {
          0% { transform: translate(-50%, -50%) scale(1); }
          100% { transform: translate(-50%, -50%) scale(1.1); }
        }

        .phase-card h3 {
          position: relative;
          z-index: 1;
          margin-bottom: 25px;
          font-size: 1.8rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 15px;
        }

        .phase-card ul {
          position: relative;
          z-index: 1;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .phase-card li {
          margin-bottom: 15px;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          color: var(--text-main);
          transition: transform 0.2s, color 0.2s;
        }

        .phase-card li:hover {
          transform: translateX(10px);
          color: var(--gold-primary);
        }

        .phase-card li::before {
          content: '⚡';
          color: var(--gold-primary);
          font-size: 1.2rem;
          margin-right: 15px;
        }

        /* Peeling Layers Scroll Animations */
        .scroll-reveal {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Slide Right (comes from left side) */
        .slide-right {
          transform: translateX(-100px) rotate(-3deg);
        }

        /* Slide Left (comes from right side) */
        .slide-left {
          transform: translateX(100px) rotate(3deg);
        }

        .scroll-reveal.active {
          opacity: 1;
          transform: translateX(0) rotate(0);
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .circuit-line {
            left: 30px;
            transform: none;
          }
          .circuit-dot {
            left: 30px;
            transform: translateX(-50%);
          }
          .node-left, .node-right {
            flex-direction: column;
            align-items: flex-start;
            padding-left: 80px;
          }
          .phase-card {
            width: 100%;
          }
          /* All cards slide from the right on mobile to avoid screen overflow issues */
          .slide-right {
             transform: translateX(50px);
          }
          .slide-left {
             transform: translateX(50px);
          }
        }
      `}</style>
    </div>
  );
};

export default Roadmap;
