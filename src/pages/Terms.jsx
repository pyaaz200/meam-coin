import React from 'react';

const Terms = () => {
  return (
    <div className="page-wrapper container section-padding" style={{ maxWidth: '800px', margin: '0 auto', marginTop: '50px' }}>
      <h1 className="gradient-text text-center" style={{ marginBottom: '40px', fontSize: '3rem' }}>LEGAL & DISCLAIMER</h1>
      
      <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px' }}>
        <h2 className="gradient-text-alt" style={{ marginBottom: '20px' }}>TRADEMARK NOTICE</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
          ONION COIN™ and all associated logos, branding, and visual assets are the exclusive trademarked property of the ONION COIN team. Any unauthorized commercial use, reproduction, or distribution of the ONION COIN brand identity without explicit written permission is strictly prohibited.
        </p>

        <h2 className="gradient-text-alt" style={{ marginTop: '40px', marginBottom: '20px' }}>FINANCIAL DISCLAIMER</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
          ONION COIN ($ONC) is a meme coin created for entertainment and community-building purposes. It does not carry any intrinsic value or expectation of financial return. Cryptocurrencies are highly volatile, and you should never invest money that you cannot afford to lose. The team behind ONION COIN provides no financial advice, and participating in the ecosystem is done entirely at your own risk.
        </p>

        <h2 className="gradient-text-alt" style={{ marginTop: '40px', marginBottom: '20px' }}>PLATFORM & PROMOTION DISCLAIMER</h2>
        <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
          Please note that ONION COIN was officially launched via the <strong>pump.fun</strong> platform. All smart contracts, liquidity pools, and trading mechanics are governed entirely by pump.fun's decentralized infrastructure. This website serves strictly as a promotional platform and informational hub for the ONION COIN community. We do not host any native exchange mechanisms, we do not hold user funds, and we cannot guarantee third-party platform stability.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '40px' }}>
        <h2 className="gradient-text-alt text-center" style={{ marginBottom: '20px' }}>CONTACT US</h2>
        <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
          Have questions or business inquiries? Fill out the form below or email us directly at <strong style={{color: 'var(--gold-primary)'}}>onionbytes.tech@gmail.com</strong>.
        </p>
        
        <form action="mailto:onionbytes.tech@gmail.com" method="post" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--gold-primary)', fontWeight: 'bold' }}>Name</label>
            <input type="text" name="Name" required className="form-input" placeholder="Enter your name" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--gold-primary)', fontWeight: 'bold' }}>Email</label>
            <input type="email" name="Email" required className="form-input" placeholder="Enter your email" />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--gold-primary)', fontWeight: 'bold' }}>Message</label>
            <textarea name="Message" required className="form-input" rows="5" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" className="glass-btn" style={{ marginTop: '10px', width: '100%' }}>SEND MESSAGE</button>
        </form>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 15px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 10px;
          color: white;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
          font-size: 1rem;
        }
        .form-input:focus {
          border-color: var(--accent-pink);
          box-shadow: 0 0 10px rgba(216, 69, 255, 0.3);
        }
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Terms;
