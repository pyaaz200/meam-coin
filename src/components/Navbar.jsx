import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/web-logo-transparent.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Road Map', path: '/roadmap' },
    { name: 'Grow', path: '/grow' },
    { name: 'Buy Coin', path: '/buycoin' },
    { name: 'Onion-conic', path: '/howtobuy' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <img src={logoImg} alt="Onion Logo" style={{ height: 60, marginRight: 15, filter: 'brightness(1.1)', marginTop: -5, marginBottom: -5 }} />
          <h2 className="gradient-text">$ONION COIN</h2>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {link.name}
            </NavLink>
          ))}
          <button className="glass-btn" style={{ marginLeft: '20px' }} onClick={() => navigate('/buycoin')}>Buy Now</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-toggle desktop-hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-panel">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <button className="glass-btn" onClick={() => { setIsOpen(false); navigate('/buycoin'); }}>Buy Now</button>
        </div>
      )}

      <style>{`
        .navbar {
          height: var(--nav-height);
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(31, 11, 53, 0.1);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
        }
        .nav-container {
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
        }
        .logo h2 {
          margin: 0;
          font-size: 28px;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .nav-link {
          font-weight: 600;
          transition: color 0.3s;
          position: relative;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--gold-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--gold-primary);
        }
        .mobile-toggle {
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
        }
        .desktop-hidden { display: none; }
        .mobile-menu {
          position: absolute;
          top: var(--nav-height);
          left: 20px;
          right: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .mobile-link {
          font-size: 18px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .desktop-hidden { display: block; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
