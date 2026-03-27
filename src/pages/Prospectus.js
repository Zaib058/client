import React from 'react';
import { Link } from 'react-router-dom';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  :root { --navy:#0A1931; --blue:#1A3A6E; --gold:#C9A84C; --gold-lt:#E8C97A; --light:#F7F9FC; --gray:#6B7A99; --gray-lt:#EEF2F8; }
  .pr * { box-sizing: border-box; }
  .pr { font-family: 'DM Sans', sans-serif; background: var(--light); color: var(--navy); min-height: 100vh; }

  /* HERO */
  .pr-hero {
    background: linear-gradient(135deg, var(--navy) 0%, #112550 100%);
    padding: 72px 40px 100px;
    position: relative; overflow: hidden; text-align: center;
  }
  .pr-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px);
    background-size: 56px 56px;
  }
  .pr-hero::after {
    content: '';
    position: absolute; bottom:-2px; left:0; right:0;
    height: 60px; background: var(--light);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .pr-hero-inner { position: relative; z-index: 1; }
  .pr-hero-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 16px; justify-content: center;
  }
  .pr-hero-label::before { content:''; width:24px; height:2px; background:var(--gold); }
  .pr-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(34px, 5vw, 58px); font-weight: 900;
    color: #fff; margin-bottom: 14px; line-height: 1.12;
  }
  .pr-hero h1 span { color: var(--gold); }
  .pr-hero-sub { font-size: 17px; color: rgba(255,255,255,0.6); max-width: 500px; margin: 0 auto 36px; line-height: 1.7; }
  .pr-hero-btn {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold); color: var(--navy);
    font-weight: 700; font-size: 15px;
    padding: 16px 36px; border-radius: 100px;
    text-decoration: none;
    transition: background .2s, transform .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .pr-hero-btn:hover { background: var(--gold-lt); transform: translateY(-2px); }

  /* BODY */
  .pr-body { max-width: 1200px; margin: 0 auto; padding: 60px 40px 100px; }
  @media (max-width: 768px) { .pr-body { padding: 40px 20px 80px; } }

  /* VIEWER WRAP */
  .pr-viewer-wrap {
    background: #fff; border-radius: 20px;
    box-shadow: 0 8px 60px rgba(10,25,49,0.1);
    overflow: hidden;
    margin-bottom: 32px;
    border: 1px solid var(--gray-lt);
  }
  .pr-viewer-toolbar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 24px;
    background: var(--navy);
    gap: 16px; flex-wrap: wrap;
  }
  .pr-viewer-title {
    font-family: 'Playfair Display', serif;
    font-size: 16px; font-weight: 700; color: #fff;
    display: flex; align-items: center; gap: 10px;
  }
  .pr-viewer-title::before {
    content: '📖';
    font-size: 18px;
  }
  .pr-viewer-actions { display: flex; gap: 10px; }
  .pr-viewer-btn {
    display: inline-flex; align-items: center; gap: 6px;
    background: var(--gold); color: var(--navy);
    font-weight: 700; font-size: 13px;
    padding: 9px 20px; border-radius: 100px;
    text-decoration: none;
    transition: background .2s;
    font-family: 'DM Sans', sans-serif;
    white-space: nowrap;
  }
  .pr-viewer-btn:hover { background: var(--gold-lt); }
  .pr-viewer-btn.outline {
    background: transparent; color: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.25);
  }
  .pr-viewer-btn.outline:hover { border-color: var(--gold); color: var(--gold); background: transparent; }
  .pr-viewer-iframe {
    width: 100%; height: 820px; display: block; border: none;
  }
  @media (max-width: 768px) { .pr-viewer-iframe { height: 500px; } }

  /* HIGHLIGHTS */
  .pr-highlights {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 16px; margin-bottom: 60px;
  }
  @media (max-width: 900px) { .pr-highlights { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .pr-highlights { grid-template-columns: 1fr; } }
  .pr-highlight {
    background: #fff; border-radius: 14px; padding: 24px 20px;
    border: 1px solid var(--gray-lt); text-align: center;
    box-shadow: 0 2px 16px rgba(10,25,49,0.05);
    transition: transform .2s, border-color .2s;
  }
  .pr-highlight:hover { transform: translateY(-4px); border-color: var(--gold); }
  .pr-highlight-icon { font-size: 28px; margin-bottom: 10px; }
  .pr-highlight-title { font-family:'Playfair Display',serif; font-size: 15px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .pr-highlight-text { font-size: 13px; color: var(--gray); line-height: 1.5; }

  /* CTA */
  .pr-cta {
    background: linear-gradient(135deg, var(--navy), #112550);
    border-radius: 20px; padding: 48px 40px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 32px; flex-wrap: wrap;
    position: relative; overflow: hidden;
  }
  .pr-cta::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at 80% 50%, rgba(201,168,76,0.1), transparent 50%);
  }
  .pr-cta-text { position: relative; z-index: 1; }
  .pr-cta-title { font-family:'Playfair Display',serif; font-size: 24px; font-weight:700; color:#fff; margin-bottom: 6px; }
  .pr-cta-sub { font-size: 15px; color: rgba(255,255,255,0.6); }
  .pr-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
  .pr-btn-gold {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold); color: var(--navy);
    font-weight: 700; font-size: 14px;
    padding: 14px 28px; border-radius: 100px;
    text-decoration: none; transition: background .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .pr-btn-gold:hover { background: var(--gold-lt); }
  .pr-btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    font-weight: 600; font-size: 14px;
    padding: 12px 24px; border-radius: 100px;
    border: 2px solid rgba(255,255,255,0.25);
    text-decoration: none; transition: border-color .2s, color .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .pr-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
`;

const highlights = [
  { icon: '📋', title: 'All Programs', text: 'FSc, ICS, ICOM, FA — every program with subject combinations' },
  { icon: '📅', title: 'Academic Calendar', text: 'Key dates, check points, and examination schedule' },
  { icon: '🏫', title: 'Campus Life', text: 'Facilities, events, sports, and student activities' },
  { icon: '🎓', title: 'Admission Process', text: 'Step-by-step guide to joining Dr. A.Q. Khan College' },
];

export default function Prospectus() {
  return (
    <>
      <style>{css}</style>
      <div className="pr">

        {/* HERO */}
        <div className="pr-hero">
          <div className="pr-hero-inner">
            <div className="pr-hero-label">Academic Year 2025–26</div>
            <h1>College <span>Prospectus</span></h1>
            <p className="pr-hero-sub">
              Explore everything Dr. A.Q. Khan College has to offer — programs, campus life, evaluation methods, and more.
            </p>
            <a href="https://online.fliphtml5.com/ckjsc/qvqt/#p=1" target="_blank" rel="noopener noreferrer" className="pr-hero-btn">
              🔗 Open Full-Screen
            </a>
          </div>
        </div>

        {/* BODY */}
        <div className="pr-body">

          {/* HIGHLIGHTS */}
          <div className="pr-highlights">
            {highlights.map((h, i) => (
              <div key={i} className="pr-highlight">
                <div className="pr-highlight-icon">{h.icon}</div>
                <div className="pr-highlight-title">{h.title}</div>
                <p className="pr-highlight-text">{h.text}</p>
              </div>
            ))}
          </div>

          {/* EMBEDDED VIEWER */}
          <div className="pr-viewer-wrap">
            <div className="pr-viewer-toolbar">
              <div className="pr-viewer-title">Dr. A.Q. Khan College — Official Prospectus</div>
              <div className="pr-viewer-actions">
                <a href="https://online.fliphtml5.com/ckjsc/qvqt/#p=1" target="_blank" rel="noopener noreferrer" className="pr-viewer-btn outline">
                  ⛶ Full Screen
                </a>
                <a href={`${process.env.PUBLIC_URL}/form.pdf`} target="_blank" rel="noopener noreferrer" className="pr-viewer-btn">
                  📄 Admission Form
                </a>
              </div>
            </div>
            <iframe
              src="https://online.fliphtml5.com/ckjsc/qvqt/#p=1"
              className="pr-viewer-iframe"
              title="Dr AQ Khan College Prospectus"
              allowFullScreen
            />
          </div>

          {/* CTA */}
          <div className="pr-cta">
            <div className="pr-cta-text">
              <div className="pr-cta-title">Interested in Joining?</div>
              <div className="pr-cta-sub">Download the admission form or get in touch with our admissions team.</div>
            </div>
            <div className="pr-cta-btns">
              <a href={`${process.env.PUBLIC_URL}/form.pdf`} target="_blank" rel="noopener noreferrer" className="pr-btn-gold">
                📄 Admission Form
              </a>
              <Link to="/contact" className="pr-btn-ghost">📞 Contact Us</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}