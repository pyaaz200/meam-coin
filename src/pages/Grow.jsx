import React, { useState, useEffect, useRef } from 'react';
import onionCoin from '../assets/onion coin front 1.png';

const AnimatedNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const endVal = parseInt(end.toString().replace(/,/g, ''), 10);
          const totalFrames = Math.round((duration / 1000) * 60);
          const increment = endVal / totalFrames;
          let frame = 0;

          const counter = setInterval(() => {
            frame++;
            start += increment;
            if (frame === totalFrames || start >= endVal) {
              setCount(endVal);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref} style={{ color: 'var(--gold-primary)', fontWeight: 'bold' }}>{count.toLocaleString()}{suffix}</span>;
};

const Grow = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const layers = [
    { name: "Liquidity Pool", percent: 35, color: "var(--accent-purple)", glow: "rgba(138, 43, 226, 0.8)" },
    { name: "Community Staking Rewards", percent: 20, color: "var(--gold-primary)", glow: "rgba(255, 215, 0, 0.8)" },
    { name: "Future Farming", percent: 20, color: "var(--accent-pink)", glow: "rgba(216, 69, 255, 0.8)" },
    { name: "Developer Bulbs", percent: 15, color: "#4a148c", glow: "rgba(74, 20, 140, 0.8)" },
    { name: "Strategic Plantings", percent: 10, color: "#7b1fa2", glow: "rgba(123, 31, 162, 0.8)" }
  ];

  // Derive the active box shadow for the chart
  const activeGlow = hoveredIdx !== null ? layers[hoveredIdx].glow : "rgba(255, 215, 0, 0.2)";

  return (
    <div className="page-wrapper container section-padding">
      <div className="text-center" style={{marginBottom: '50px'}}>
         <h1 className="gradient-text animate-float" style={{fontSize: '4rem'}}>TOKENOMICS</h1>
         <p className="text-muted">Grow your bag. See our robust token ecosystem.</p>
      </div>

      <div className="tokenomics-layout">
        <div className="chart-placeholder">
           <div className="holo-ring-chart" style={{ boxShadow: `0 0 40px ${activeGlow}` }}>
             <div className="holo-ring-inner">
               <img src={onionCoin} alt="Onion Logo" className={`ring-logo ${hoveredIdx !== null ? 'logo-pulse' : ''}`} />
             </div>
           </div>
        </div>
        
        <div className="token-details">
           <div className="glass-panel list-item total-supply">
              <span className="bullet supply-bullet"></span> 
              <div className="layer-info" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <span className="label">Initial Onion Seed Supply:</span>
                <div className="number-val" style={{ fontSize: '2rem' }}><AnimatedNumber end="1000000000" /> $ONC</div>
              </div>
           </div>
           
           {layers.map((layer, idx) => (
             <div 
               key={idx} 
               className="glass-panel list-item circuit-panel"
               onMouseEnter={() => setHoveredIdx(idx)}
               onMouseLeave={() => setHoveredIdx(null)}
               style={{
                 borderColor: hoveredIdx === idx ? layer.color : 'rgba(255, 215, 0, 0.1)',
                 boxShadow: hoveredIdx === idx ? `0 0 20px ${layer.glow}, inset 0 0 10px ${layer.glow}` : 'none'
               }}
             >
                <span className="bullet" style={{ background: layer.color, boxShadow: `0 0 10px ${layer.color}` }}></span> 
                <div className="layer-info">
                  <span className="label">Layer {idx + 1} - {layer.name}</span>
                  <div className="number-val"><AnimatedNumber end={layer.percent} suffix="%" /></div>
                </div>
             </div>
           ))}
        </div>
      </div>

      <style>{`
        .tokenomics-layout {
           display: grid;
           grid-template-columns: 1fr 1.5fr;
           gap: 60px;
           align-items: center;
        }
        .chart-placeholder {
           display: flex;
           justify-content: center;
           position: relative;
        }
        
        /* Holographic Donut Chart */
        .holo-ring-chart {
           width: 380px;
           height: 380px;
           border-radius: 50%;
           background: conic-gradient(
              var(--accent-purple) 0% 35%, 
              var(--gold-primary) 35% 55%, 
              var(--accent-pink) 55% 75%, 
              #4a148c 75% 90%, 
              #7b1fa2 90% 100%
           );
           display: flex;
           justify-content: center;
           align-items: center;
           transition: box-shadow 0.4s ease;
           animation: slowSpin 25s linear infinite;
           position: relative;
           z-index: 2;
        }
        
        @keyframes slowSpin {
           0% { transform: rotate(0deg); }
           100% { transform: rotate(360deg); }
        }

        /* Hollow Center */
        .holo-ring-inner {
           width: 280px;
           height: 280px;
           background: var(--bg-dark); /* Creates the donut hole matching background */
           border-radius: 50%;
           display: flex;
           justify-content: center;
           align-items: center;
           box-shadow: inset 0 0 30px rgba(0,0,0,0.9);
           /* Counter-spin so the logo stays perfectly upright */
           animation: counterSpin 25s linear infinite;
        }

        @keyframes counterSpin {
           0% { transform: rotate(0deg); }
           100% { transform: rotate(-360deg); }
        }

        .ring-logo {
           width: 180px;
           height: 180px;
           object-fit: cover;
           clip-path: circle(46% at 50% 50%);
           filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.4));
           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .logo-pulse {
           transform: scale(1.15);
           filter: drop-shadow(0 0 35px rgba(255, 215, 0, 1));
        }

        .token-details {
           display: flex;
           flex-direction: column;
           gap: 15px;
        }

        .list-item {
           padding: 20px 25px;
           display: flex;
           align-items: center;
           background: rgba(43, 21, 68, 0.4);
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           border-radius: 15px;
           border: 1px solid rgba(255, 215, 0, 0.1);
           transition: all 0.3s ease;
           cursor: default;
        }
        
        .circuit-panel {
           position: relative;
           overflow: hidden;
        }
        
        /* Circuit board background trace effect on hover */
        .circuit-panel::after {
           content: '';
           position: absolute;
           right: -50px;
           bottom: -50px;
           width: 120px;
           height: 120px;
           background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
           opacity: 0;
           transition: opacity 0.3s;
        }
        .circuit-panel:hover::after {
           opacity: 1;
        }

        .circuit-panel:hover {
           transform: translateX(-15px); /* Pops out towards the chart like a connection */
        }

        .total-supply {
           background: rgba(255, 215, 0, 0.05);
           border-color: rgba(255, 215, 0, 0.3);
           margin-bottom: 10px;
        }

        .bullet {
           width: 16px;
           height: 16px;
           border-radius: 50%;
           display: inline-block;
           margin-right: 20px;
           flex-shrink: 0;
        }
        
        .supply-bullet {
           background: var(--gold-primary);
           box-shadow: 0 0 15px var(--gold-primary);
        }

        .layer-info {
           display: flex;
           justify-content: space-between;
           width: 100%;
           align-items: center;
        }

        .label {
           font-size: 1.1rem;
           color: var(--text-muted);
           font-weight: 500;
        }

        .number-val {
           font-size: 1.5rem;
           font-weight: 700;
           font-family: 'Outfit', sans-serif;
           margin-top: 5px;
        }

        @media (max-width: 992px) {
           .tokenomics-layout { grid-template-columns: 1fr; gap: 40px; }
           .holo-ring-chart { width: 320px; height: 320px; }
           .holo-ring-inner { width: 240px; height: 240px; }
           .circuit-panel:hover { transform: translateY(-5px) translateX(0); }
        }
        @media (max-width: 600px) {
           .holo-ring-chart { width: 260px; height: 260px; }
           .holo-ring-inner { width: 190px; height: 190px; }
           .ring-logo { width: 120px; height: 120px; }
           .layer-info { flex-direction: column; align-items: flex-start; gap: 5px; }
        }
      `}</style>
    </div>
  );
};

export default Grow;
