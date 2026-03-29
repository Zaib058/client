import React, { useState } from 'react';

import img02  from './asset/image/img02.jpg';
import img03  from './asset/image/img03.jpg';
import img04  from './asset/image/img04.jpg';
import img05  from './asset/image/img05.jpg';
import img06  from './asset/image/img06.jpg';
import img07  from './asset/image/img07.jpg';
import img08  from './asset/image/img08.jpg';
import img09  from './asset/image/img09.jpg';
import img10  from './asset/image/img10a.jpg';
import img11  from './asset/image/img11a.jpg';
import img12  from './asset/image/img12a.jpg';
import img13  from './asset/image/img13a.jpg';
import img14a from './asset/image/img14a.jpg';
import img15  from './asset/image/img15.jpg';
import img16  from './asset/image/img16.jpg';
import img17  from './asset/image/img17.jpg';
import img18  from './asset/image/img18.jpg';
import img19  from './asset/image/img19.jpg';
import img20  from './asset/image/img20.jpg';
import img21  from './asset/image/img21.jpg';
import img23  from './asset/image/img23.jpg';
import img26  from './asset/image/img26.jpg';
import img49  from './asset/image/img49.jpg';
import img54  from './asset/image/54.jpg';
import img50  from './asset/image/img50.jpg';
import img55  from './asset/image/img55.jpg';
import img51  from './asset/image/img51.jpg';
import img56  from './asset/image/img56.jpg';
import img57  from './asset/image/img57.jpg';
import board1  from './asset/image/board1.jpg';
import board2 from './asset/image/board2.jpg';
import board3  from './asset/image/board3.jpg';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  :root { --navy:#0A1931; --blue:#1A3A6E; --gold:#C9A84C; --gold-lt:#E8C97A; --light:#F7F9FC; --gray:#6B7A99; --gray-lt:#EEF2F8; }
  .gl * { box-sizing: border-box; }
  .gl { font-family: 'DM Sans', sans-serif; background: var(--light); color: var(--navy); min-height: 100vh; }

  /* HERO */
  .gl-hero {
    background: linear-gradient(135deg, var(--navy) 0%, #112550 100%);
    padding: 80px 40px 110px;
    position: relative; overflow: hidden; text-align: center;
  }
  .gl-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px);
    background-size: 56px 56px;
  }
  .gl-hero::after {
    content: '';
    position: absolute; bottom:-2px; left:0; right:0;
    height: 60px; background: var(--light);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .gl-hero-inner { position: relative; z-index: 1; }
  .gl-hero-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 16px; justify-content: center;
  }
  .gl-hero-label::before { content:''; width:24px; height:2px; background:var(--gold); }
  .gl-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 58px); font-weight: 900;
    color: #fff; margin-bottom: 14px; line-height: 1.1;
  }
  .gl-hero h1 span { color: var(--gold); }
  .gl-hero-sub { font-size: 17px; color: rgba(255,255,255,0.6); max-width: 500px; margin: 0 auto; line-height: 1.7; }

  /* BODY */
  .gl-body { max-width: 1280px; margin: 0 auto; padding: 64px 40px 100px; }
  @media (max-width: 768px) { .gl-body { padding: 40px 20px 80px; } }

  /* FILTER TABS */
  .gl-tabs {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-bottom: 48px; justify-content: center;
  }
  .gl-tab {
    padding: 10px 22px; border-radius: 100px;
    border: 1.5px solid var(--gray-lt);
    background: #fff; color: var(--gray);
    font-size: 13px; font-weight: 500;
    cursor: pointer; transition: all .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .gl-tab:hover { border-color: var(--gold); color: var(--navy); }
  .gl-tab.active { background: var(--navy); color: var(--gold); border-color: var(--navy); font-weight: 600; }

  /* GRID */
  .gl-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  @media (max-width: 1024px) { .gl-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 700px)  { .gl-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }

  .gl-item {
    aspect-ratio: 4/3; border-radius: 14px; overflow: hidden;
    position: relative; cursor: pointer;
    box-shadow: 0 4px 20px rgba(10,25,49,0.08);
  }
  .gl-item img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    transition: transform .45s ease;
  }
  .gl-item:hover img { transform: scale(1.08); }
  .gl-item-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,25,49,0.65) 0%, transparent 55%);
    opacity: 0; transition: opacity .3s;
    display: flex; align-items: flex-end;
    padding: 14px;
  }
  .gl-item:hover .gl-item-overlay { opacity: 1; }
  .gl-item-label {
    font-size: 11px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; color: var(--gold);
    background: rgba(10,25,49,0.5);
    padding: 4px 10px; border-radius: 100px;
  }

  /* LIGHTBOX */
  .gl-lightbox {
    position: fixed; inset: 0; z-index: 500;
    background: rgba(6,12,25,0.95);
    display: flex; align-items: center; justify-content: center;
    padding: 24px;
    backdrop-filter: blur(8px);
  }
  .gl-lightbox-img {
    max-width: 90vw; max-height: 85vh;
    border-radius: 14px;
    object-fit: contain;
    box-shadow: 0 24px 80px rgba(0,0,0,0.5);
  }
  .gl-lightbox-close {
    position: absolute; top: 20px; right: 24px;
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff; font-size: 22px; font-weight: 300;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .gl-lightbox-close:hover { background: var(--gold); color: var(--navy); }
  .gl-lightbox-nav {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 48px; height: 48px; border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff; font-size: 20px;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .gl-lightbox-nav:hover { background: var(--gold); color: var(--navy); }
  .gl-lightbox-prev { left: 16px; }
  .gl-lightbox-next { right: 16px; }
  .gl-lightbox-counter {
    position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
    font-size: 13px; color: rgba(255,255,255,0.5);
    font-family: 'DM Sans', sans-serif;
  }

  /* COUNT BADGE */
  .gl-count-badge {
    text-align: center; margin-bottom: 32px;
    font-size: 14px; color: var(--gray);
  }
  .gl-count-badge strong { color: var(--navy); }
`;

const categories = [
  {
    label: 'All',
    tag: 'all',
    images: [
      { src: img15, cat: 'Career Counseling' }, { src: img04, cat: 'Career Counseling' },
      { src: img07, cat: 'Student Trips' },     { src: img06, cat: 'Student Trips' },
      { src: img11, cat: 'Iqbal Day' },         { src: img13, cat: 'Iqbal Day' },
      { src: img14a, cat: 'Parents Meeting' },  { src: img21, cat: 'Sports' },
      { src: img23, cat: 'Orientation' },       { src: img16, cat: 'Parents Meeting' },
      { src: img26, cat: 'Campus Life' },       { src: img02, cat: 'Career Counseling' },
      { src: img05, cat: 'Career Counseling' }, { src: img08, cat: 'Student Trips' },
      { src: img03, cat: 'Career Counseling' }, { src: img12, cat: 'Iqbal Day' },
      { src: img17, cat: 'Parents Meeting' },   { src: img18, cat: 'Sports' },
      { src: img19, cat: 'Sports' },            { src: img20, cat: 'Sports' },
      { src: img09, cat: 'Student Trips' },     { src: img10, cat: 'Iqbal Day' },
  { src: img49, cat: 'PBA' },       { src: img54, cat: 'Orientation' },
  { src: img50, cat: 'PBA' },       { src: img55, cat: 'Orientation' },
  { src: img51, cat: 'PBA' }, { src: img56, cat: 'Orientation' },
  { src: board1, cat: 'Board Meeting' },       { src: img57, cat: 'Orientation' },
  { src: board2, cat: 'Board Meeting' }, { src: board3, cat: 'Board Meeting' }

    ]
  }
];

const filterTabs = ['All', 'Career Counseling', 'PBA' ,'Student Trips', 'Iqbal Day', 'Parents Meeting', 'Board Meeting' ,'Sports', 'Orientation', 'Campus Life'];

const allImages = [
  { src: img15, cat: 'Career Counseling' }, { src: img04, cat: 'Career Counseling' },
  { src: img07, cat: 'Student Trips' },     { src: img06, cat: 'Student Trips' },
  { src: img11, cat: 'Iqbal Day' },         { src: img13, cat: 'Iqbal Day' },
  { src: img14a, cat: 'Parents Meeting' },  { src: img21, cat: 'Sports' },
  { src: img23, cat: 'Orientation' },       { src: img16, cat: 'Parents Meeting' },
  { src: img26, cat: 'Campus Life' },       { src: img02, cat: 'Career Counseling' },
  { src: img05, cat: 'Career Counseling' }, { src: img08, cat: 'Student Trips' },
  { src: img03, cat: 'Career Counseling' }, { src: img12, cat: 'Iqbal Day' },
  { src: img17, cat: 'Parents Meeting' },   { src: img18, cat: 'Sports' },
  { src: img19, cat: 'Sports' },            { src: img20, cat: 'Sports' },
  { src: img09, cat: 'Student Trips' },     { src: img10, cat: 'Iqbal Day' },
  { src: img49, cat: 'PBA' },       { src: img54, cat: 'Orientation' },
  { src: img50, cat: 'PBA' },       { src: img55, cat: 'Orientation' },
  { src: img51, cat: 'PBA' }, { src: img56, cat: 'Orientation' },
  { src: board1, cat: 'Board Meeting' },       { src: img57, cat: 'Orientation' },
  { src: board2, cat: 'Board Meeting' }, { src: board3, cat: 'Board Meeting' }
];

export default function GalleryEvents() {
  const [activeTab, setActiveTab] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered

  const filtered = activeTab === 'All' ? allImages : allImages.filter(img => img.cat === activeTab);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox(l => (l - 1 + filtered.length) % filtered.length);
  const next = () => setLightbox(l => (l + 1) % filtered.length);

  // Keyboard nav
  React.useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, filtered.length]);

  return (
    <>
      <style>{css}</style>
      <div className="gl">

        {/* HERO */}
        <div className="gl-hero">
          <div className="gl-hero-inner">
            <div className="gl-hero-label">Campus Life</div>
            <h1>Gallery &<br /><span>Events</span></h1>
            <p className="gl-hero-sub">
              A glimpse into the vibrant academic and extracurricular life at Dr. A.Q. Khan College — events, trips, sports, and more.
            </p>
          </div>
        </div>

        {/* BODY */}
        <div className="gl-body">

          {/* TABS */}
          <div className="gl-tabs">
            {filterTabs.map(tab => (
              <button
                key={tab}
                className={`gl-tab${activeTab === tab ? ' active' : ''}`}
                onClick={() => { setActiveTab(tab); setLightbox(null); }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* COUNT */}
          <div className="gl-count-badge">
            Showing <strong>{filtered.length}</strong> photo{filtered.length !== 1 ? 's' : ''}
            {activeTab !== 'All' && <> in <strong>{activeTab}</strong></>}
          </div>

          {/* GRID */}
          <div className="gl-grid">
            {filtered.map((img, i) => (
              <div key={i} className="gl-item" onClick={() => openLightbox(i)}>
                <img src={img.src} alt={`${img.cat} ${i + 1}`} />
                <div className="gl-item-overlay">
                  <span className="gl-item-label">{img.cat}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* LIGHTBOX */}
        {lightbox !== null && (
          <div className="gl-lightbox" onClick={closeLightbox}>
            <button className="gl-lightbox-close" onClick={closeLightbox}>×</button>
            <button className="gl-lightbox-nav gl-lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }}>‹</button>
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].cat}
              className="gl-lightbox-img"
              onClick={e => e.stopPropagation()}
            />
            <button className="gl-lightbox-nav gl-lightbox-next" onClick={e => { e.stopPropagation(); next(); }}>›</button>
            <div className="gl-lightbox-counter">{lightbox + 1} / {filtered.length} · {filtered[lightbox].cat}</div>
          </div>
        )}

      </div>
    </>
  );
}