import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// ── Import your existing assets exactly as before ──────────────────────────
import mission from './asset/image/mission.jpg';
import facilitiesImg from './asset/image/facilities.jpg';
import faculty from './asset/image/faculty.jpg';
import joinUs from './asset/image/join-us.jpg';
import img02 from './asset/image/img02.jpg';
import img03 from './asset/image/img03.jpg';
import img04 from './asset/image/img04.jpg';
import img05 from './asset/image/img05.jpg';
import img06 from './asset/image/img06.jpg';
import img07 from './asset/image/img07.jpg';
import img08 from './asset/image/img08.jpg';
import img09 from './asset/image/img09.jpg';
import img10 from './asset/image/img10a.jpg';
import img11 from './asset/image/img11a.jpg';
import img12 from './asset/image/img12a.jpg';
import img13 from './asset/image/img13a.jpg';
import img14a from './asset/image/img14a.jpg';
import img15 from './asset/image/img15.jpg';
import img16 from './asset/image/img16.jpg';
import img17 from './asset/image/img17.jpg';
import img18 from './asset/image/img18.jpg';
import img19 from './asset/image/img19.jpg';
import img20 from './asset/image/img20.jpg';
import img21 from './asset/image/img21.jpg';
import img22 from './asset/image/img22.jpg';
import img23 from './asset/image/img23.jpg';
import img24 from './asset/image/img24.jpg';
import img25 from './asset/image/img25.jpg';
import ceoImg from "./asset/image/ceo.jpg";
import directorImg from "./asset/image/director.jpg";
import principalImg from "./asset/image/principle.jpg";

// ── Inline styles / theme (no Tailwind conflicts) ──────────────────────────
const theme = {
  navy:    '#0A1931',
  blue:    '#1A3A6E',
  gold:    '#C9A84C',
  goldLight: '#E8C97A',
  light:   '#F7F9FC',
  white:   '#FFFFFF',
  gray:    '#6B7A99',
  grayLight: '#EEF2F8',
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  .aqk-about * { box-sizing: border-box; margin: 0; padding: 0; }
  .aqk-about { font-family: 'DM Sans', sans-serif; color: ${theme.navy}; background: ${theme.white}; }

  /* ── HERO ── */
  .aqk-hero {
    position: relative;
    min-height: 92vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: ${theme.navy};
  }
  .aqk-hero-bg {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, ${theme.navy} 0%, #112550 60%, #0e1e40 100%);
  }
  .aqk-hero-bg::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle at 20% 50%, rgba(201,168,76,0.12) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(26,58,110,0.6) 0%, transparent 40%);
  }
  .aqk-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .aqk-hero-content {
    position: relative; z-index: 2;
    max-width: 1200px; margin: 0 auto;
    padding: 80px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 900px) {
    .aqk-hero-content { grid-template-columns: 1fr; gap: 40px; padding: 60px 24px; }
    .aqk-hero-visual { display: none; }
  }
  .aqk-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase;
    color: ${theme.gold};
    margin-bottom: 24px;
  }
  .aqk-hero-eyebrow::before {
    content: ''; display: block;
    width: 32px; height: 2px; background: ${theme.gold};
  }
  .aqk-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(42px, 6vw, 72px);
    font-weight: 900;
    line-height: 1.08;
    color: ${theme.white};
    margin-bottom: 24px;
  }
  .aqk-hero h1 span { color: ${theme.gold}; }
  .aqk-hero-desc {
    font-size: 17px; line-height: 1.8;
    color: rgba(255,255,255,0.65);
    max-width: 480px;
    margin-bottom: 40px;
  }
  .aqk-hero-stats {
    display: flex; gap: 40px;
  }
  .aqk-hero-stat { text-align: center; }
  .aqk-hero-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 36px; font-weight: 700;
    color: ${theme.gold};
    display: block;
  }
  .aqk-hero-stat-lbl {
    font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }
  .aqk-hero-visual {
    position: relative;
  }
  .aqk-hero-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 20px;
    padding: 32px;
    backdrop-filter: blur(12px);
  }
  .aqk-hero-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 700;
    color: ${theme.white};
    margin-bottom: 20px;
  }
  .aqk-hero-badge {
    display: inline-block;
    background: rgba(201,168,76,0.15);
    border: 1px solid rgba(201,168,76,0.4);
    color: ${theme.goldLight};
    font-size: 12px; font-weight: 500;
    padding: 6px 14px;
    border-radius: 100px;
    margin: 4px;
  }
  .aqk-hero-divider {
    width: 40px; height: 3px;
    background: ${theme.gold};
    border-radius: 2px;
    margin: 20px 0;
  }
  .aqk-hero-location {
    font-size: 13px; color: rgba(255,255,255,0.5);
    display: flex; align-items: center; gap: 6px;
  }

  /* ── SECTION WRAPPER ── */
  .aqk-section { padding: 100px 40px; }
  @media (max-width: 768px) { .aqk-section { padding: 60px 20px; } }
  .aqk-container { max-width: 1200px; margin: 0 auto; }

  .aqk-section-label {
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: ${theme.gold};
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 14px;
  }
  .aqk-section-label::before {
    content: ''; display: block;
    width: 24px; height: 2px; background: ${theme.gold};
  }
  .aqk-section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 700;
    line-height: 1.15;
    color: ${theme.navy};
    margin-bottom: 16px;
  }
  .aqk-section-desc {
    font-size: 17px; line-height: 1.8;
    color: ${theme.gray};
    max-width: 560px;
    margin-bottom: 60px;
  }

  /* ── INTRO ── */
  .aqk-intro { background: ${theme.white}; }
  .aqk-intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 900px) { .aqk-intro-grid { grid-template-columns: 1fr; gap: 40px; } }
  .aqk-intro-img {
    position: relative;
  }
  .aqk-intro-img img {
    width: 100%; border-radius: 16px;
    box-shadow: 0 30px 80px rgba(10,25,49,0.15);
    display: block;
  }
  .aqk-intro-img::before {
    content: '';
    position: absolute;
    top: -16px; left: -16px;
    right: 16px; bottom: 16px;
    border: 2px solid ${theme.gold};
    border-radius: 16px;
    opacity: 0.4;
  }
  .aqk-intro-quote {
    position: absolute;
    bottom: -20px; right: -20px;
    background: ${theme.navy};
    color: ${theme.gold};
    padding: 20px 24px;
    border-radius: 12px;
    font-family: 'Playfair Display', serif;
    font-size: 14px;
    font-style: italic;
    max-width: 200px;
    line-height: 1.5;
    box-shadow: 0 12px 40px rgba(10,25,49,0.3);
  }
  .aqk-intro-text .aqk-section-desc { max-width: 100%; }
  .aqk-highlight {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 32px;
  }
  .aqk-highlight-item {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 16px;
    background: ${theme.grayLight};
    border-radius: 12px;
    border-left: 3px solid ${theme.gold};
  }
  .aqk-highlight-icon { font-size: 20px; }
  .aqk-highlight-text { font-size: 14px; font-weight: 500; color: ${theme.navy}; line-height: 1.5; }

  /* ── MISSION / VISION / VALUES ── */
  .aqk-mvv { background: ${theme.navy}; }
  .aqk-mvv .aqk-section-title { color: ${theme.white}; }
  .aqk-mvv .aqk-section-desc { color: rgba(255,255,255,0.6); }
  .aqk-mvv .aqk-section-label { color: ${theme.gold}; }
  .aqk-mvv-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (max-width: 900px) { .aqk-mvv-cards { grid-template-columns: 1fr; } }
  .aqk-mvv-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 20px;
    padding: 40px 32px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  .aqk-mvv-card:hover {
    transform: translateY(-6px);
    background: rgba(255,255,255,0.08);
  }
  .aqk-mvv-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${theme.gold}, ${theme.goldLight});
  }
  .aqk-mvv-num {
    font-family: 'Playfair Display', serif;
    font-size: 64px; font-weight: 900;
    color: rgba(201,168,76,0.12);
    line-height: 1;
    margin-bottom: -16px;
  }
  .aqk-mvv-icon { font-size: 32px; margin-bottom: 16px; }
  .aqk-mvv-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 700;
    color: ${theme.white};
    margin-bottom: 14px;
  }
  .aqk-mvv-text {
    font-size: 15px; line-height: 1.8;
    color: rgba(255,255,255,0.6);
  }
  .aqk-mvv-values {
    margin-top: 12px;
    display: flex; flex-wrap: wrap; gap: 8px;
  }
  .aqk-mvv-value-tag {
    font-size: 12px; font-weight: 500;
    color: ${theme.gold};
    border: 1px solid rgba(201,168,76,0.3);
    padding: 4px 12px;
    border-radius: 100px;
  }

  /* ── FACILITIES ── */
  .aqk-facilities { background: ${theme.light}; }
  .aqk-facilities-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (max-width: 900px) { .aqk-facilities-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 600px) { .aqk-facilities-grid { grid-template-columns: 1fr; } }
  .aqk-facility-card {
    background: ${theme.white};
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 4px 24px rgba(10,25,49,0.06);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-bottom: 3px solid transparent;
  }
  .aqk-facility-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(10,25,49,0.12);
    border-bottom-color: ${theme.gold};
  }
  .aqk-facility-icon {
    width: 56px; height: 56px;
    background: linear-gradient(135deg, ${theme.navy}, ${theme.blue});
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .aqk-facility-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    color: ${theme.navy};
    margin-bottom: 10px;
  }
  .aqk-facility-text {
    font-size: 14px; line-height: 1.7;
    color: ${theme.gray};
  }
  /* Big facility image */
  .aqk-facility-img-wrap {
    border-radius: 16px; overflow: hidden;
    box-shadow: 0 20px 60px rgba(10,25,49,0.12);
    margin-bottom: 40px;
  }
  .aqk-facility-img-wrap img {
    width: 100%; height: 340px; object-fit: cover; display: block;
  }

  /* ── FACULTY ── */
  .aqk-faculty { background: ${theme.white}; }
  .aqk-faculty-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  @media (max-width: 900px) { .aqk-faculty-layout { grid-template-columns: 1fr; gap: 40px; } }
  .aqk-faculty-img img {
    width: 100%; border-radius: 16px;
    box-shadow: 0 30px 80px rgba(10,25,49,0.15);
    display: block;
  }
  .aqk-faculty-points { list-style: none; margin-top: 32px; }
  .aqk-faculty-points li {
    display: flex; align-items: center; gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid ${theme.grayLight};
    font-size: 15px; color: ${theme.navy};
  }
  .aqk-faculty-points li::before {
    content: '✓';
    width: 26px; height: 26px;
    background: ${theme.gold};
    color: ${theme.navy};
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 700;
    flex-shrink: 0;
  }

  /* ── LEADERSHIP ── */
  .aqk-leadership { background: ${theme.light}; }
  .aqk-leader-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  @media (max-width: 900px) { .aqk-leader-cards { grid-template-columns: 1fr; } }
  .aqk-leader-card {
    background: ${theme.white};
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 40px rgba(10,25,49,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .aqk-leader-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 80px rgba(10,25,49,0.15);
  }
  .aqk-leader-header {
    position: relative;
    background: linear-gradient(135deg, ${theme.navy}, ${theme.blue});
    padding: 32px 24px 20px;
    text-align: center;
  }
  .aqk-leader-header::after {
    content: '';
    position: absolute;
    bottom: -1px; left: 0; right: 0;
    height: 40px;
    background: ${theme.white};
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .aqk-leader-img {
    width: 96px; height: 96px;
    border-radius: 50%;
    border: 4px solid ${theme.gold};
    object-fit: cover;
    display: block;
    margin: 0 auto 14px;
    position: relative; z-index: 1;
  }
  .aqk-leader-name {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    color: ${theme.white};
    position: relative; z-index: 1;
  }
  .aqk-leader-role {
    font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
    color: ${theme.gold};
    margin-top: 4px;
    position: relative; z-index: 1;
  }
  .aqk-leader-body {
    padding: 28px 24px 24px;
  }
  .aqk-leader-quote {
    font-size: 14px; line-height: 1.8;
    color: ${theme.gray};
    font-style: italic;
    margin-bottom: 20px;
    position: relative;
    padding-left: 16px;
    border-left: 3px solid ${theme.gold};
  }
  .aqk-leader-btn {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 13px; font-weight: 600;
    color: ${theme.navy};
    background: none; border: none; cursor: pointer;
    padding: 0;
    transition: color 0.2s;
    text-decoration: none;
  }
  .aqk-leader-btn:hover { color: ${theme.gold}; }

  /* ── GALLERY ── */
  .aqk-gallery { background: ${theme.navy}; }
  .aqk-gallery .aqk-section-title { color: ${theme.white}; }
  .aqk-gallery .aqk-section-desc { color: rgba(255,255,255,0.6); }
  .aqk-gallery .aqk-section-label { color: ${theme.gold}; }
  .aqk-gallery-tabs {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-bottom: 36px;
  }
  .aqk-gallery-tab {
    padding: 10px 22px;
    border-radius: 100px;
    border: 1px solid rgba(201,168,76,0.3);
    background: transparent;
    color: rgba(255,255,255,0.6);
    font-size: 13px; font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .aqk-gallery-tab.active, .aqk-gallery-tab:hover {
    background: ${theme.gold};
    color: ${theme.navy};
    border-color: ${theme.gold};
    font-weight: 600;
  }
  .aqk-gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  @media (max-width: 900px) { .aqk-gallery-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .aqk-gallery-grid { grid-template-columns: 1fr 1fr; } }
  .aqk-gallery-item {
    aspect-ratio: 1;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }
  .aqk-gallery-item img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
  }
  .aqk-gallery-item:hover img { transform: scale(1.08); }
  .aqk-gallery-item-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(10,25,49,0.7) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex; align-items: flex-end;
    padding: 12px;
  }
  .aqk-gallery-item:hover .aqk-gallery-item-overlay { opacity: 1; }

  /* ── JOIN US ── */
  .aqk-join {
    background: linear-gradient(135deg, ${theme.navy} 0%, #112550 100%);
    position: relative;
    overflow: hidden;
  }
  .aqk-join::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle at 70% 50%, rgba(201,168,76,0.1) 0%, transparent 50%);
  }
  .aqk-join-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative; z-index: 1;
  }
  @media (max-width: 900px) { .aqk-join-layout { grid-template-columns: 1fr; gap: 40px; } }
  .aqk-join .aqk-section-title { color: ${theme.white}; }
  .aqk-join .aqk-section-desc { color: rgba(255,255,255,0.65); max-width: 100%; }
  .aqk-join .aqk-section-label { color: ${theme.gold}; }
  .aqk-join-img img {
    width: 100%; border-radius: 16px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.3);
    display: block;
  }
  .aqk-join-actions {
    display: flex; gap: 16px; flex-wrap: wrap; margin-top: 36px;
  }
  .aqk-btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: ${theme.gold};
    color: ${theme.navy};
    font-weight: 700; font-size: 15px;
    padding: 16px 32px;
    border-radius: 100px;
    text-decoration: none;
    border: none; cursor: pointer;
    transition: background 0.2s, transform 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .aqk-btn-primary:hover {
    background: ${theme.goldLight};
    transform: translateY(-2px);
  }
  .aqk-btn-outline {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent;
    color: ${theme.white};
    font-weight: 600; font-size: 15px;
    padding: 16px 32px;
    border-radius: 100px;
    border: 2px solid rgba(255,255,255,0.3);
    text-decoration: none;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .aqk-btn-outline:hover {
    border-color: ${theme.gold};
    color: ${theme.gold};
  }

  /* ── SCROLL FADE ── */
  .aqk-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .aqk-fade.visible { opacity: 1; transform: translateY(0); }
`;

// ── Helper: scroll animation ───────────────────────────────────────────────
const useFadeIn = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.aqk-fade');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

// ── DATA ──────────────────────────────────────────────────────────────────
const facilitiesData = [
  { icon: '🔬', title: 'Modern Laboratories', text: 'State-of-the-art science labs equipped with contemporary instruments for practical learning.' },
  { icon: '📚', title: 'Resource Library', text: 'A comprehensive library with thousands of books, journals, and digital resources.' },
  { icon: '💻', title: 'Computer Lab', text: 'Well-equipped computing facilities for ICS students and digital learning across all programs.' },
  { icon: '🏟️', title: 'Sports Facilities', text: 'Football ground, indoor games, and open areas promoting physical wellness.' },
  { icon: '🎤', title: 'Auditorium', text: 'A modern auditorium for ceremonies, seminars, and student performances.' },
  { icon: '🛡️', title: 'Safe Environment', text: 'CCTV monitoring, disciplined campus, and a zero-tolerance policy for misconduct.' },
];

const galleryCategories = [
  { label: 'Career Counseling', images: [img02, img03, img04, img05] },
  { label: 'Student Trips', images: [img06, img07, img08, img09] },
  { label: 'Iqbal Day', images: [img10, img11, img12, img13] },
  { label: 'Parents Meeting', images: [img14a, img15, img16, img17] },
  { label: 'Football League', images: [img18, img19, img20, img21] },
  { label: 'Orientation', images: [img22, img23, img24, img25] },
];

const messages = [
  {
    id: "ceo", title: "CEO", role: "Chief Executive Officer", image: ceoImg,
    short: "We are dedicated to revolutionizing education beyond boundaries, fostering creativity, confidence, and holistic growth in our students.",
    full: `At Dr. AQ Khan College, we are dedicated to revolutionizing the dynamics of the education sector, where education thrives beyond boundaries. We foster creativity, confidence, and holistic growth in our students. Our aim is to develop well-rounded individuals, empowering them with purpose, integrity, and social responsibility.\n\nEducation is not solely about academic achievements; it is also about nurturing the development of a well-rounded individual as personality building holds equal importance. Our exceptional team is dedicated to nurturing every student's potential and executing our vision.`
  },
  {
    id: "director", title: "Director", role: "Director", image: directorImg,
    short: "We are committed to character building, academic excellence, and increasing the literacy rate of Pakistan.",
    full: `At Dr A Q Khan College, we are committed to fostering character building among our students and increasing the literacy rate of Pakistan. We believe education is not limited to academics alone. We focus on moral values, critical thinking, and social responsibility.\n\nOur mission is to create ethical leaders who contribute positively to society.`
  },
  {
    id: "principal", title: "Principal", role: "Principal", image: principalImg,
    short: "We nurture young minds, foster curiosity, and empower students to become future leaders.",
    full: `Welcome to Dr. A.Q Khan College. We focus on nurturing young minds, fostering curiosity, and empowering future leaders. Our institution provides a holistic educational experience with modern facilities, expert faculty, and strong student support systems.\n\nWe encourage students to explore opportunities, grow personally and academically, and build successful careers.`
  },
];

// ── COMPONENT ─────────────────────────────────────────────────────────────
const About = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedMsg, setExpandedMsg] = useState(null);
  useFadeIn();

  return (
    <>
      <style>{css}</style>
      <div className="aqk-about">

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section className="aqk-hero">
          <div className="aqk-hero-bg" />
          <div className="aqk-hero-grid" />
          <div className="aqk-hero-content">
            <div>
              <div className="aqk-hero-eyebrow">Rawalpindi · Since 2010</div>
              <h1>
                Excellence in<br />
                <span>Science &</span><br />
                Technology
              </h1>
              <p className="aqk-hero-desc">
                Dr. A.Q. Khan College of Science and Technology —  Harley Street, Rawalpindi, dedicated to shaping the innovators and leaders of tomorrow.
              </p>
              <div className="aqk-hero-stats">
                <div className="aqk-hero-stat">
                  <span className="aqk-hero-stat-num">8+</span>
                  <span className="aqk-hero-stat-lbl">Programs</span>
                </div>
                <div className="aqk-hero-stat">
                  <span className="aqk-hero-stat-num">3</span>
                  <span className="aqk-hero-stat-lbl">University MOUs</span>
                </div>
                <div className="aqk-hero-stat">
                  <span className="aqk-hero-stat-num">100%</span>
                  <span className="aqk-hero-stat-lbl">Dedication</span>
                </div>
              </div>
            </div>
            <div className="aqk-hero-visual">
              <div className="aqk-hero-card">
                <div className="aqk-hero-card-title">Programs Offered</div>
                {['FSc Pre-Medical', 'FSc Pre-Engineering', 'ICS', 'ICOM', 'FA (IT)', 'FA (Humanities)'].map(p => (
                  <span key={p} className="aqk-hero-badge">{p}</span>
                ))}
                <div className="aqk-hero-divider" />
                <div className="aqk-hero-location">
                  📍 3 Harley Street, Rawalpindi
                </div>
                <div className="aqk-hero-location" style={{ marginTop: 8 }}>
                  📞 +92 345 3300699
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 2. COLLEGE INTRO ═════════════════════════════════════════════ */}
        <section className="aqk-section aqk-intro">
          <div className="aqk-container">
            <div className="aqk-intro-grid">
              <div className="aqk-intro-img aqk-fade">
                <img src={mission} alt="Dr AQ Khan College" />
                <div className="aqk-intro-quote">
                  "Empowering minds, shaping Pakistan's future."
                </div>
              </div>
              <div className="aqk-intro-text aqk-fade" style={{ transitionDelay: '0.15s' }}>
                <div className="aqk-section-label">About the College</div>
                <h2 className="aqk-section-title">A Legacy of Academic Excellence</h2>
                <p className="aqk-section-desc">
                  Located on the  Harley Street Lane # 3 in Rawalpindi, Dr. A.Q. Khan College of Science and Technology is a name synonymous with quality education, character building, and holistic student development.
                </p>
                <p className="aqk-section-desc" style={{ marginTop: -30 }}>
                  Named after the legendary Dr. Abdul Qadeer Khan, we carry the spirit of dedication, precision, and national service in everything we do.
                </p>
                <div className="aqk-highlight">
                  {[
                    { icon: '🎓', text: 'FBISE & NAVTEC Affiliated Programs' },
                    { icon: '🤝', text: 'MOUs with IST, CUST & Riphah University' },
                    { icon: '🏆', text: 'Merit-based Scholarships' },
                    { icon: '📊', text: 'Structured Evaluation System' },
                  ].map((h, i) => (
                    <div key={i} className="aqk-highlight-item">
                      <span className="aqk-highlight-icon">{h.icon}</span>
                      <span className="aqk-highlight-text">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 3. MISSION / VISION / VALUES ════════════════════════════════ */}
        <section className="aqk-section aqk-mvv">
          <div className="aqk-container">
            <div className="aqk-fade">
              <div className="aqk-section-label">Our Foundation</div>
              <h2 className="aqk-section-title">Mission, Vision & Values</h2>
              <p className="aqk-section-desc">
                The pillars that guide every decision, every lesson, and every student we serve.
              </p>
            </div>
            <div className="aqk-mvv-cards">
              <div className="aqk-mvv-card aqk-fade">
                <div className="aqk-mvv-num">01</div>
                <div className="aqk-mvv-icon">🎯</div>
                <div className="aqk-mvv-title">Our Mission</div>
                <p className="aqk-mvv-text">
                  “Dr. A.Q. Khan college” Strives to be a unique community where the potential and talent of each individual is realized with in a friendly and challenging environment based on Islamic principles.
                </p>
              </div>
              <div className="aqk-mvv-card aqk-fade" style={{ transitionDelay: '0.1s' }}>
                <div className="aqk-mvv-num">02</div>
                <div className="aqk-mvv-icon">🌟</div>
                <div className="aqk-mvv-title">Our Vision</div>
                <p className="aqk-mvv-text">
                  Our Vision Concentrates on preparation for life, which involves promoting academic achievement fostering a responsible confident self image in our students and encouraging a personal commitment to the extended community.
                </p>
              </div>
              <div className="aqk-mvv-card aqk-fade" style={{ transitionDelay: '0.2s' }}>
                <div className="aqk-mvv-num">03</div>
                <div className="aqk-mvv-icon">⚖️</div>
                <div className="aqk-mvv-title">Core Values</div>
                <p className="aqk-mvv-text">
                  Every aspect of our college life is guided by a commitment to integrity, excellence, and responsibility.
                </p>
                <div className="aqk-mvv-values">
                  {['Integrity', 'Excellence', 'Respect', 'Responsibility', 'Innovation'].map(v => (
                    <span key={v} className="aqk-mvv-value-tag">{v}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4. FACILITIES ════════════════════════════════════════════════ */}
        <section className="aqk-section aqk-facilities">
          <div className="aqk-container">
            <div className="aqk-fade">
              <div className="aqk-section-label">Infrastructure</div>
              <h2 className="aqk-section-title">World-Class Facilities</h2>
              <p className="aqk-section-desc">
                Our campus is designed to provide every resource students need to excel academically and grow personally.
              </p>
            </div>
            <div className="aqk-facility-img-wrap aqk-fade">
              <img src={facilitiesImg} alt="College Facilities" />
            </div>
            <div className="aqk-facilities-grid">
              {facilitiesData.map((f, i) => (
                <div key={i} className="aqk-facility-card aqk-fade" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="aqk-facility-icon">{f.icon}</div>
                  <div className="aqk-facility-title">{f.title}</div>
                  <p className="aqk-facility-text">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 5. FACULTY ═══════════════════════════════════════════════════ */}
        <section className="aqk-section aqk-faculty">
          <div className="aqk-container">
            <div className="aqk-faculty-layout">
              <div className="aqk-faculty-img aqk-fade">
                <img src={faculty} alt="Our Faculty" />
              </div>
              <div className="aqk-fade" style={{ transitionDelay: '0.15s' }}>
                <div className="aqk-section-label">Our People</div>
                <h2 className="aqk-section-title">Expert Faculty, Dedicated Mentors</h2>
                <p className="aqk-section-desc">
                  Our faculty members are not just teachers — they are industry experts, researchers, and passionate mentors who invest in every student's success.
                </p>
                <ul className="aqk-faculty-points">
                  {[
                    'Highly qualified and experienced educators',
                    'Subject matter experts from industry and academia',
                    'Personalized mentoring and student support',
                    'Regular workshops, seminars, and career counseling',
                    'Committed to every student\'s holistic development',
                  ].map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. LEADERSHIP MESSAGES ═══════════════════════════════════════ */}
        <section className="aqk-section aqk-leadership">
          <div className="aqk-container">
            <div className="aqk-fade" style={{ textAlign: 'center', marginBottom: 56 }}>
              <div className="aqk-section-label" style={{ justifyContent: 'center' }}>Leadership</div>
              <h2 className="aqk-section-title">Words from Our Leaders</h2>
              <p className="aqk-section-desc" style={{ margin: '0 auto' }}>
                Hear directly from the visionaries who guide our institution with purpose and passion.
              </p>
            </div>
            <div className="aqk-leader-cards">
              {messages.map((m, i) => (
                <div key={m.id} className="aqk-leader-card aqk-fade" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="aqk-leader-header">
                    <img src={m.image} alt={m.title} className="aqk-leader-img" />
                    <div className="aqk-leader-name">{m.title}</div>
                    <div className="aqk-leader-role">{m.role}</div>
                  </div>
                  <div className="aqk-leader-body">
                    <p className="aqk-leader-quote">
                      {expandedMsg === m.id ? m.full : m.short}
                    </p>
                    <button
                      className="aqk-leader-btn"
                      onClick={() => setExpandedMsg(expandedMsg === m.id ? null : m.id)}
                    >
                      {expandedMsg === m.id ? '← Read Less' : 'Read Full Message →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. STUDENT LIFE GALLERY ══════════════════════════════════════ */}
        <section className="aqk-section aqk-gallery">
          <div className="aqk-container">
            <div className="aqk-fade">
              <div className="aqk-section-label">Campus Life</div>
              <h2 className="aqk-section-title">Student Life Gallery</h2>
              <p className="aqk-section-desc">
                Beyond academics — explore the vibrant events, activities, and memories that define life at Dr. A.Q. Khan College.
              </p>
            </div>
            <div className="aqk-gallery-tabs aqk-fade">
              {galleryCategories.map((cat, i) => (
                <button
                  key={i}
                  className={`aqk-gallery-tab${activeCategory === i ? ' active' : ''}`}
                  onClick={() => setActiveCategory(i)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="aqk-gallery-grid">
              {galleryCategories[activeCategory].images.map((img, i) => (
                <div key={i} className="aqk-gallery-item aqk-fade" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <img src={img} alt={`${galleryCategories[activeCategory].label} ${i + 1}`} />
                  <div className="aqk-gallery-item-overlay" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. JOIN US ═══════════════════════════════════════════════════ */}
        <section className="aqk-section aqk-join">
          <div className="aqk-container">
            <div className="aqk-join-layout">
              <div className="aqk-fade">
                <div className="aqk-section-label">Admissions Open</div>
                <h2 className="aqk-section-title">Begin Your Journey With Us</h2>
                <p className="aqk-section-desc">
                  Join a community of curious minds and ambitious achievers. Whether you're passionate about science, commerce, or the humanities — Dr. A.Q. Khan College has a place for you.
                </p>
                <div className="aqk-join-actions">
                  <a
                    href={`${process.env.PUBLIC_URL}/form.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aqk-btn-primary"
                  >
                    📄 Get Admission Form
                  </a>
                  <Link to="/contact" className="aqk-btn-outline">
                    📞 Contact Us
                  </Link>
                </div>
              </div>
              <div className="aqk-join-img aqk-fade" style={{ transitionDelay: '0.15s' }}>
                <img src={joinUs} alt="Join Dr AQ Khan College" />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default About;