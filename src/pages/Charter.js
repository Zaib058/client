import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import img1  from './asset/image/img1.jpg';
import img2  from './asset/image/img2.jpg';
import img3  from './asset/image/img3.jpg';
import img4  from './asset/image/img4.jpg';
import img5  from './asset/image/img5.jpg';
import img6  from './asset/image/img6.jpg';
import img7  from './asset/image/img7.jpg';
import img8  from './asset/image/img8.jpg';
import img9  from './asset/image/img9.jpg';
import img10 from './asset/image/img10.jpg';
import img11 from './asset/image/img11.jpg';
import img12 from './asset/image/img12.jpg';
import img13 from './asset/image/img13.jpg';
import img14 from './asset/image/img14.jpg';
import cust01 from './asset/image/cust01.jpg';
import cust1 from './asset/image/cust 1.jpg';
import cust2 from './asset/image/cust2.jpg';
import cust3 from './asset/image/63.jpg';
import img64 from './asset/image/64.jpg';
import img65 from './asset/image/65.jpg';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  :root { --navy:#0A1931; --blue:#1A3A6E; --gold:#C9A84C; --gold-lt:#E8C97A; --light:#F7F9FC; --gray:#6B7A99; --gray-lt:#EEF2F8; }
  .ch * { box-sizing: border-box; }
  .ch { font-family: 'DM Sans', sans-serif; background: var(--light); color: var(--navy); min-height: 100vh; }

  /* HERO */
  .ch-hero {
    background: linear-gradient(135deg, var(--navy) 0%, #112550 100%);
    padding: 80px 40px 110px;
    position: relative; overflow: hidden; text-align: center;
  }
  .ch-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px);
    background-size: 56px 56px;
  }
  .ch-hero::after {
    content: '';
    position: absolute; bottom:-2px; left:0; right:0;
    height: 60px; background: var(--light);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .ch-hero-inner { position: relative; z-index: 1; }
  .ch-hero-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 16px; justify-content: center;
  }
  .ch-hero-label::before { content:''; width:24px; height:2px; background:var(--gold); }
  .ch-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 60px); font-weight: 900;
    color: #fff; margin-bottom: 16px; line-height: 1.1;
  }
  .ch-hero h1 span { color: var(--gold); }
  .ch-hero-sub { font-size: 17px; color: rgba(255,255,255,0.6); max-width: 560px; margin: 0 auto; line-height: 1.7; }

  /* BODY */
  .ch-body { max-width: 1200px; margin: 0 auto; padding: 80px 40px 100px; }
  @media (max-width: 768px) { .ch-body { padding: 50px 20px 80px; } }

  /* PARTNER BLOCK */
  .ch-partner { margin-bottom: 100px; }
  .ch-partner-header {
    display: grid; grid-template-columns: auto 1fr;
    gap: 32px; align-items: flex-start;
    margin-bottom: 48px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--gray-lt);
  }
  @media (max-width: 768px) { .ch-partner-header { grid-template-columns: 1fr; } }
  .ch-partner-badge {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    width: 100px; height: 100px;
    background: linear-gradient(135deg, var(--navy), var(--blue));
    border-radius: 20px;
    border: 2px solid rgba(201,168,76,0.3);
    font-size: 36px;
    flex-shrink: 0;
  }
  .ch-partner-badge-sub { font-size: 10px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--gold); margin-top: 4px; }
  .ch-partner-meta {}
  .ch-partner-tag {
    display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: var(--gold);
    background: rgba(201,168,76,0.1); padding: 4px 12px; border-radius: 100px;
    margin-bottom: 12px;
  }
  .ch-partner-name {
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 3.5vw, 36px); font-weight: 700;
    color: var(--navy); margin-bottom: 14px; line-height: 1.2;
  }
  .ch-partner-desc { font-size: 16px; color: var(--gray); line-height: 1.8; max-width: 700px; }
  .ch-partner-benefits {
    display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px;
  }
  .ch-benefit {
    display: flex; align-items: center; gap: 8px;
    background: #fff; border: 1px solid var(--gray-lt);
    border-radius: 100px; padding: 7px 16px;
    font-size: 13px; font-weight: 500; color: var(--navy);
  }
  .ch-benefit::before { content: '✓'; color: var(--gold); font-weight: 700; }

  /* PHOTO GRID */
  .ch-photo-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  @media (max-width: 900px) { .ch-photo-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .ch-photo-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; } }
  .ch-photo {
    aspect-ratio: 4/3; border-radius: 12px; overflow: hidden;
    box-shadow: 0 4px 20px rgba(10,25,49,0.08);
    position: relative;
  }
  .ch-photo img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform .4s ease;
  }
  .ch-photo:hover img { transform: scale(1.07); }
  .ch-photo-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,25,49,0.5) 0%, transparent 50%);
    opacity: 0; transition: opacity .3s;
  }
  .ch-photo:hover .ch-photo-overlay { opacity: 1; }

  /* DIVIDER */
  .ch-divider {
    display: flex; align-items: center; gap: 20px;
    margin: 0 0 80px;
  }
  .ch-divider-line { flex: 1; height: 1px; background: var(--gray-lt); }
  .ch-divider-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--gold);
    box-shadow: 0 0 0 4px rgba(201,168,76,0.2);
  }

  /* CTA */
  .ch-cta {
    background: linear-gradient(135deg, var(--navy), #112550);
    border-radius: 20px; padding: 56px 48px;
    text-align: center; position: relative; overflow: hidden;
  }
  .ch-cta::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at 50% 120%, rgba(201,168,76,0.15), transparent 60%);
  }
  .ch-cta-inner { position: relative; z-index: 1; }
  .ch-cta-title { font-family:'Playfair Display',serif; font-size: clamp(24px, 3vw, 36px); font-weight:700; color:#fff; margin-bottom: 12px; }
  .ch-cta-title span { color: var(--gold); }
  .ch-cta-sub { font-size: 16px; color: rgba(255,255,255,0.6); max-width: 500px; margin: 0 auto 32px; line-height: 1.7; }
  .ch-cta-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .ch-btn-gold {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold); color: var(--navy);
    font-weight: 700; font-size: 15px;
    padding: 16px 34px; border-radius: 100px;
    text-decoration: none; transition: background .2s, transform .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .ch-btn-gold:hover { background: var(--gold-lt); transform: translateY(-2px); }
  .ch-btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: #fff;
    font-weight: 600; font-size: 15px;
    padding: 14px 32px; border-radius: 100px;
    border: 2px solid rgba(255,255,255,0.3);
    text-decoration: none; transition: border-color .2s, color .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .ch-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
`;

const istImages = [img1, img2, img3, img4, img5, img6, img7, img8];
const riphahImages = [img9, img10, img11, img12, img13, img14];
const custImages = [cust01, cust1, cust2, cust3 , img64 , img65];

export default function Charter() {
  return (
    <>
      <style>{css}</style>
      <div className="ch">

        {/* HERO */}
        <div className="ch-hero">
          <div className="ch-hero-inner">
            <div className="ch-hero-label">Academic Partnerships</div>
            <h1>Partnerships &<br /><span>Collaborations</span></h1>
            <p className="ch-hero-sub">
              Dr. A.Q. Khan College partners with leading universities to open doors for students — from admissions guidance to fully funded scholarships.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="ch-body">

          {/* IST */}
          <div className="ch-partner">
            <div className="ch-partner-header">
              <div className="ch-partner-badge">
                🤝
                <span className="ch-partner-badge-sub">MOU</span>
              </div>
              <div className="ch-partner-meta">
                <div className="ch-partner-tag">Official Partnership</div>
                <div className="ch-partner-name">MOU with IST University</div>
                <p className="ch-partner-desc">
                  Dr. A.Q. Khan College has signed a Memorandum of Understanding with IST University to support student success beyond the intermediate level. This collaboration provides students with direct access to guidance, university admissions support, and enriched academic resources.
                </p>
                <div className="ch-partner-benefits">
                  {['Admission Guidance', 'Academic Resources', 'Campus Visits', 'Student Counseling'].map(b => (
                    <div key={b} className="ch-benefit">{b}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ch-photo-grid">
              {istImages.map((src, i) => (
                <div key={i} className="ch-photo">
                  <img src={src} alt={`IST MOU ${i + 1}`} />
                  <div className="ch-photo-overlay" />
                </div>
              ))}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="ch-divider">
            <div className="ch-divider-line" />
            <div className="ch-divider-dot" />
            <div className="ch-divider-line" />
          </div>

          {/* RIPHAH */}
          <div className="ch-partner">
            <div className="ch-partner-header">
              <div className="ch-partner-badge">
                🎓
                <span className="ch-partner-badge-sub">MOU</span>
              </div>
              <div className="ch-partner-meta">
                <div className="ch-partner-tag">Scholarship Partnership</div>
                <div className="ch-partner-name">Collaboration with Riphah International University</div>
                <p className="ch-partner-desc">
                  We are proud to announce a formal partnership with Riphah International University. Students from Dr. A.Q. Khan College are now eligible for merit and need-based scholarships. Exceptional students achieving 80%+ marks in HSSC qualify for fully funded scholarships.
                </p>
                <div className="ch-partner-benefits">
                  {['Merit-Based Scholarships', 'Need-Based Scholarships', '80%+ = Fully Funded', 'Priority Admission'].map(b => (
                    <div key={b} className="ch-benefit">{b}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ch-photo-grid">
              {riphahImages.map((src, i) => (
                <div key={i} className="ch-photo">
                  <img src={src} alt={`Riphah MOU ${i + 1}`} />
                  <div className="ch-photo-overlay" />
                </div>
              ))}
            </div>
          </div>

         {/* DIVIDER */}
          <div className="ch-divider">
            <div className="ch-divider-line" />
            <div className="ch-divider-dot" />
            <div className="ch-divider-line" />
          </div>

          {/* CUST */}
          <div className="ch-partner">
            <div className="ch-partner-header">
              <div className="ch-partner-badge">
                🤝
                <span className="ch-partner-badge-sub">MOU</span>
              </div>
              <div className="ch-partner-meta">
                <div className="ch-partner-tag">Official Partnership</div>
                <div className="ch-partner-name">MOU with CUST University</div>
                <p className="ch-partner-desc">
                 Through a Memorandum of Understanding with Capital University of Science and Technology, Dr A. Q. Khan College students will have access to various undergraduate scholarship opportunities including merit, need-based, sports, and tuition fee scholarships.
                </p>
                <div className="ch-partner-benefits">
                  {['Scholarship Opportunities', 'Career Guidance', 'Admission Support', 'University Exposure'].map(b => (
                    <div key={b} className="ch-benefit">{b}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ch-photo-grid">
              {custImages.map((src, i) => (
                <div key={i} className="ch-photo">
                  <img src={src} alt={`CUST MOU ${i + 1}`} />
                  <div className="ch-photo-overlay" />
                </div>
              ))}
            </div>
          </div>


          {/* CTA */}
          <div className="ch-cta">
            <div className="ch-cta-inner">
              <div className="ch-cta-title">Ready to Take the <span>Next Step?</span></div>
              <p className="ch-cta-sub">
                Our partnerships open pathways to top universities. Apply now and let us guide your journey.
              </p>
              <div className="ch-cta-btns">
                <a href={`${process.env.PUBLIC_URL}/form.pdf`} target="_blank" rel="noopener noreferrer" className="ch-btn-gold">
                  📄 Apply Now
                </a>
                <Link to="/contact" className="ch-btn-ghost">📞 Contact Us</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}