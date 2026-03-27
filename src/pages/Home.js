import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import heroImg1  from './asset/image/hero1.jpg';
import heroImg2  from './asset/image/hero2.jpg';
import heroImg3  from './asset/image/hero3.jpg';
import event1    from './asset/image/img05.jpg';
import event2    from './asset/image/img06.jpg';
import event3    from './asset/image/img08.jpg';
import event4    from './asset/image/img07.jpg';
import event5    from './asset/image/img18.jpg';
import event6    from './asset/image/img13a.jpg';
import alumni1   from './asset/image/alumni.jpg';
import alumni2   from './asset/image/alumni.jpg';
import alumni3   from './asset/image/alumni.jpg';
import alumni4   from './asset/image/alumni4.jpg';
import ceoImg       from "./asset/image/ceo.jpg";
import directorImg  from "./asset/image/director.jpg";
import principalImg from "./asset/image/principle.jpg";

/* ─────────────────────────── THEME CSS ─────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --navy:      #0A1931;
    --blue:      #1A3A6E;
    --gold:      #C9A84C;
    --gold-lt:   #E8C97A;
    --light:     #F7F9FC;
    --white:     #FFFFFF;
    --gray:      #6B7A99;
    --gray-lt:   #EEF2F8;
  }

  .hm * { box-sizing: border-box; }
  .hm { font-family: 'DM Sans', sans-serif; color: var(--navy); background: var(--white); }

  /* ── NAV ── */
  .hm-nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(10,25,49,0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(201,168,76,0.15);
  }
  .hm-nav-inner {
    max-width: 1280px; margin: 0 auto;
    padding: 0 40px;
    height: 72px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .hm-nav-logo { height: 48px; border-radius: 6px; }
  .hm-nav-links { display: flex; gap: 36px; list-style: none; }
  .hm-nav-links a {
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    font-size: 14px; font-weight: 500;
    letter-spacing: 0.5px;
    transition: color 0.2s;
    position: relative;
  }
  .hm-nav-links a::after {
    content: '';
    position: absolute; bottom: -4px; left: 0; right: 0;
    height: 2px; background: var(--gold);
    transform: scaleX(0); transform-origin: left;
    transition: transform 0.25s;
  }
  .hm-nav-links a:hover { color: var(--gold-lt); }
  .hm-nav-links a:hover::after { transform: scaleX(1); }
  .hm-nav-cta {
    background: var(--gold); color: var(--navy);
    font-weight: 700; font-size: 13px;
    padding: 10px 24px; border-radius: 100px;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
    white-space: nowrap;
  }
  .hm-nav-cta:hover { background: var(--gold-lt); transform: translateY(-1px); }
  @media (max-width: 768px) {
    .hm-nav-inner { padding: 0 20px; }
    .hm-nav-links { display: none; }
  }

  /* ── HERO ── */
  .hm-hero {
    position: relative;
    height: 100vh; min-height: 640px;
    display: flex; align-items: center;
    overflow: hidden;
    background: var(--navy);
  }
  .hm-hero-img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    opacity: 0.45;
  }
  .hm-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(105deg, rgba(10,25,49,0.95) 35%, rgba(10,25,49,0.4) 100%);
  }
  .hm-hero-grid {
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .hm-hero-content {
    position: relative; z-index: 2;
    max-width: 1280px; margin: 0 auto;
    padding: 0 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 60px; align-items: center;
  }
  @media (max-width: 960px) {
    .hm-hero-content { grid-template-columns: 1fr; }
    .hm-hero-aside { display: none; }
  }
  .hm-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 20px;
  }
  .hm-hero-eyebrow::before {
    content: ''; display: block;
    width: 32px; height: 2px; background: var(--gold);
  }
  .hm-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(44px, 6vw, 76px);
    font-weight: 900; line-height: 1.06;
    color: var(--white);
    margin-bottom: 24px;
  }
  .hm-hero h1 em { color: var(--gold); font-style: normal; }
  .hm-hero-sub {
    font-size: 17px; line-height: 1.8;
    color: rgba(255,255,255,0.65);
    max-width: 500px; margin-bottom: 40px;
  }
  .hm-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
  .hm-btn-gold {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold); color: var(--navy);
    font-weight: 700; font-size: 15px;
    padding: 16px 34px; border-radius: 100px;
    border: none; cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .hm-btn-gold:hover { background: var(--gold-lt); transform: translateY(-2px); }
  .hm-btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: transparent; color: var(--white);
    font-weight: 600; font-size: 15px;
    padding: 14px 32px; border-radius: 100px;
    border: 2px solid rgba(255,255,255,0.3);
    cursor: pointer; text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .hm-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
  /* Slide indicators */
  .hm-hero-dots {
    display: flex; gap: 8px; margin-top: 40px;
  }
  .hm-hero-dot {
    width: 32px; height: 3px; border-radius: 2px;
    background: rgba(255,255,255,0.25);
    cursor: pointer; transition: background 0.3s, width 0.3s;
    border: none;
  }
  .hm-hero-dot.active { background: var(--gold); width: 56px; }
  /* Aside card */
  .hm-hero-aside {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(201,168,76,0.2);
    border-radius: 20px; padding: 32px;
    backdrop-filter: blur(12px);
  }
  .hm-aside-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    color: var(--white); margin-bottom: 20px;
  }
  .hm-aside-stat {
    display: flex; align-items: center;
    gap: 16px; padding: 14px 0;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  .hm-aside-stat:last-child { border-bottom: none; }
  .hm-aside-num {
    font-family: 'Playfair Display', serif;
    font-size: 28px; font-weight: 700;
    color: var(--gold); min-width: 60px;
  }
  .hm-aside-lbl { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.4; }

  /* ── SECTION SHARED ── */
  .hm-section { padding: 100px 40px; }
  @media (max-width: 768px) { .hm-section { padding: 64px 20px; } }
  .hm-container { max-width: 1280px; margin: 0 auto; }
  .hm-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 12px;
  }
  .hm-label::before { content: ''; display: block; width: 24px; height: 2px; background: var(--gold); }
  .hm-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(30px, 4vw, 46px);
    font-weight: 700; line-height: 1.15;
    color: var(--navy); margin-bottom: 14px;
  }
  .hm-title-white { color: var(--white); }
  .hm-desc { font-size: 17px; line-height: 1.8; color: var(--gray); max-width: 560px; }
  .hm-desc-white { color: rgba(255,255,255,0.65); }
  .hm-center { text-align: center; }
  .hm-center .hm-label { justify-content: center; }
  .hm-center .hm-desc { margin: 0 auto; }

  /* ── STATS STRIP ── */
  .hm-stats { background: var(--navy); padding: 60px 40px; }
  .hm-stats-grid {
    max-width: 1280px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 2px;
  }
  @media (max-width: 768px) { .hm-stats-grid { grid-template-columns: repeat(2, 1fr); } }
  .hm-stat-item {
    text-align: center; padding: 40px 20px;
    border-right: 1px solid rgba(201,168,76,0.15);
    position: relative;
  }
  .hm-stat-item:last-child { border-right: none; }
  .hm-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: clamp(40px, 5vw, 64px);
    font-weight: 900; color: var(--gold);
    display: block; line-height: 1;
  }
  .hm-stat-sup { font-size: 0.5em; vertical-align: super; }
  .hm-stat-lbl {
    font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
    color: rgba(255,255,255,0.5); margin-top: 10px; display: block;
  }

  /* ── LEADERSHIP ── */
  .hm-leadership { background: var(--light); }
  .hm-leader-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px; margin-top: 56px;
  }
  @media (max-width: 900px) { .hm-leader-grid { grid-template-columns: 1fr; } }
  .hm-leader-card {
    background: var(--white); border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 40px rgba(10,25,49,0.08);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .hm-leader-card:hover { transform: translateY(-8px); box-shadow: 0 24px 80px rgba(10,25,49,0.15); }
  .hm-leader-head {
    background: linear-gradient(135deg, var(--navy), var(--blue));
    padding: 32px 24px 20px; text-align: center;
    position: relative;
  }
  .hm-leader-head::after {
    content: '';
    position: absolute; bottom: -1px; left: 0; right: 0;
    height: 40px; background: var(--white);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .hm-leader-photo {
    width: 92px; height: 92px;
    border-radius: 50%;
    border: 4px solid var(--gold);
    object-fit: cover; display: block;
    margin: 0 auto 12px;
    position: relative; z-index: 1;
  }
  .hm-leader-name {
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    color: var(--white);
    position: relative; z-index: 1;
  }
  .hm-leader-role {
    font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--gold); margin-top: 4px;
    position: relative; z-index: 1;
  }
  .hm-leader-body { padding: 28px 24px 24px; }
  .hm-leader-quote {
    font-size: 14px; line-height: 1.8; color: var(--gray);
    font-style: italic; padding-left: 14px;
    border-left: 3px solid var(--gold);
    margin-bottom: 18px;
  }
  .hm-leader-btn {
    font-size: 13px; font-weight: 600; color: var(--navy);
    background: none; border: none; cursor: pointer;
    padding: 0; transition: color 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .hm-leader-btn:hover { color: var(--gold); }

  /* ── FACULTY ── */
  .hm-faculty { background: var(--navy); }
  .hm-faculty-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px; margin-top: 56px;
  }
  @media (max-width: 900px) { .hm-faculty-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 560px) { .hm-faculty-grid { grid-template-columns: 1fr; } }
  .hm-faculty-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(201,168,76,0.15);
    border-radius: 16px; overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s, background 0.3s;
  }
  .hm-faculty-card:hover {
    transform: translateY(-6px);
    background: rgba(255,255,255,0.09);
    border-color: rgba(201,168,76,0.4);
  }
  .hm-faculty-img {
    width: 100%; height: 220px;
    object-fit: cover; object-position: center;
    background: #1a2d4f; display: block;
  }
  .hm-faculty-info { padding: 20px; }
  .hm-faculty-name {
    font-family: 'Playfair Display', serif;
    font-size: 17px; font-weight: 700;
    color: var(--white); margin-bottom: 4px;
  }
  .hm-faculty-title { font-size: 13px; color: var(--gold); }
  .hm-faculty-arrow {
    margin-top: 12px; font-size: 12px; color: rgba(255,255,255,0.4);
    display: flex; align-items: center; gap: 6px;
  }
  /* Modal */
  .hm-modal-overlay {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(10,25,49,0.85);
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
  }
  .hm-modal {
    background: var(--white); border-radius: 20px;
    max-width: 500px; width: 100%;
    overflow: hidden;
    box-shadow: 0 40px 120px rgba(0,0,0,0.4);
  }
  .hm-modal-img { width: 100%; height: 260px; object-fit: cover; background: #eee; }
  .hm-modal-body { padding: 28px 32px 32px; }
  .hm-modal-name { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; color: var(--navy); }
  .hm-modal-role { font-size: 13px; color: var(--gold); font-weight: 600; margin: 4px 0 16px; }
  .hm-modal-text { font-size: 15px; line-height: 1.8; color: var(--gray); }
  .hm-modal-close {
    position: absolute; top: 16px; right: 20px;
    font-size: 28px; font-weight: 300;
    background: none; border: none; cursor: pointer;
    color: rgba(255,255,255,0.6); line-height: 1;
  }

  /* ── EVENTS ── */
  .hm-events { background: var(--light); }
  .hm-events-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px; margin-top: 56px;
  }
  @media (max-width: 900px) { .hm-events-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 560px) { .hm-events-grid { grid-template-columns: 1fr; } }
  .hm-event-card {
    background: var(--white); border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(10,25,49,0.07);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .hm-event-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(10,25,49,0.13); }
  .hm-event-img { width: 100%; height: 200px; object-fit: cover; display: block; background: #dde; }
  .hm-event-body { padding: 20px; }
  .hm-event-tag {
    display: inline-block;
    font-size: 10px; font-weight: 600; letter-spacing: 1.5px;
    text-transform: uppercase; color: var(--gold);
    background: rgba(201,168,76,0.1);
    padding: 3px 10px; border-radius: 100px;
    margin-bottom: 10px;
  }
  .hm-event-title { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: var(--navy); margin-bottom: 6px; }
  .hm-event-desc { font-size: 14px; color: var(--gray); line-height: 1.6; }

  /* ── ALUMNI ── */
  .hm-alumni { background: var(--navy); }
  .hm-alumni-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px; margin-top: 56px;
  }
  @media (max-width: 960px) { .hm-alumni-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 560px) { .hm-alumni-grid { grid-template-columns: 1fr; } }
  .hm-alumni-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(201,168,76,0.15);
    border-radius: 16px; overflow: hidden;
    transition: transform 0.3s, background 0.3s;
  }
  .hm-alumni-card:hover { transform: translateY(-6px); background: rgba(255,255,255,0.09); }
  .hm-alumni-img { width: 100%; height: 180px; object-fit: cover; background: #1a2d4f; display: block; }
  .hm-alumni-body { padding: 20px; }
  .hm-alumni-name { font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 10px; }
  .hm-alumni-quote {
    font-size: 13px; line-height: 1.7; color: rgba(255,255,255,0.6);
    font-style: italic;
    padding-left: 12px;
    border-left: 2px solid var(--gold);
  }
  .hm-alumni-btn {
    margin-top: 14px; font-size: 12px; font-weight: 600;
    color: var(--gold); background: none; border: none;
    cursor: pointer; padding: 0;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── CTA BANNER ── */
  .hm-cta {
    background: linear-gradient(105deg, var(--navy) 0%, #112550 100%);
    padding: 100px 40px;
    position: relative; overflow: hidden;
  }
  .hm-cta::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle at 80% 50%, rgba(201,168,76,0.1) 0%, transparent 50%);
  }
  .hm-cta-inner {
    max-width: 1280px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto;
    gap: 48px; align-items: center;
    position: relative; z-index: 1;
  }
  @media (max-width: 768px) { .hm-cta-inner { grid-template-columns: 1fr; } }
  .hm-cta-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(30px, 4vw, 48px); font-weight: 900;
    color: var(--white); line-height: 1.15; margin-bottom: 12px;
  }
  .hm-cta-title em { color: var(--gold); font-style: normal; }
  .hm-cta-sub { font-size: 16px; color: rgba(255,255,255,0.6); }
  .hm-cta-btns { display: flex; gap: 14px; flex-wrap: wrap; }

  /* ── FOOTER ── */
  .hm-footer { background: #060f1e; padding: 60px 40px 30px; }
  .hm-footer-inner {
    max-width: 1280px; margin: 0 auto;
    display: grid; grid-template-columns: 2fr 1fr 1fr;
    gap: 60px; padding-bottom: 48px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
  }
  @media (max-width: 768px) { .hm-footer-inner { grid-template-columns: 1fr; gap: 36px; } }
  .hm-footer-brand-name {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 700;
    color: var(--white); margin-bottom: 12px;
  }
  .hm-footer-brand-desc { font-size: 14px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 24px; }
  .hm-footer-social { display: flex; gap: 12px; }
  .hm-footer-social-btn {
    width: 36px; height: 36px;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 50%; display: flex;
    align-items: center; justify-content: center;
    color: rgba(255,255,255,0.5); text-decoration: none;
    font-size: 14px; transition: border-color 0.2s, color 0.2s;
  }
  .hm-footer-social-btn:hover { border-color: var(--gold); color: var(--gold); }
  .hm-footer-col-title {
    font-size: 12px; font-weight: 600; letter-spacing: 2px;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 20px;
  }
  .hm-footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
  .hm-footer-links a {
    font-size: 14px; color: rgba(255,255,255,0.5);
    text-decoration: none; transition: color 0.2s;
  }
  .hm-footer-links a:hover { color: var(--gold-lt); }
  .hm-footer-bottom {
    max-width: 1280px; margin: 0 auto;
    padding-top: 28px;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 12px;
  }
  .hm-footer-copy { font-size: 12px; color: rgba(255,255,255,0.25); }

  /* ── SCROLL FADE ── */
  .hm-fade { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .hm-fade.in { opacity: 1; transform: none; }

  /* ── MISC ── */
  .hm-gold-line {
    width: 56px; height: 3px;
    background: var(--gold); border-radius: 2px;
    margin: 20px 0 48px;
  }
  .hm-gold-line-center { margin: 20px auto 48px; }
`;

/* ─────────────────────────── DATA ─────────────────────────── */
const heroSlides = [
  { heading: ['Shaping', 'Future', 'Leaders'], sub: 'At Dr A.Q. Khan College, we deliver quality education that empowers students with knowledge, confidence, and skills to excel in life.', img: heroImg1 },
  { heading: ['Excellence', 'in', 'Education'], sub: 'Our experienced faculty and modern learning environment ensure every student reaches their full potential.', img: heroImg2 },
  { heading: ['Building', 'Bright', 'Futures'], sub: 'We nurture creativity, discipline, and leadership to prepare students for tomorrow\'s challenges.', img: heroImg3 },
];

const statsData = [
  { num: '500', sup: '+', lbl: 'Students Enrolled' },
  { num: '8',   sup: '',  lbl: 'Programs Offered' },
  { num: '30',  sup: '+', lbl: 'Expert Faculty' },
  { num: '3',   sup: '',  lbl: 'University MOUs' },
];

const facultyData = [
  { id: 1, name: 'Dr Rimsha Latif',    title: 'Professor of Biology',        img: 'https://via.placeholder.com/600x400/1a2d4f/ffffff?text=Faculty', details: '20+ years of research in molecular biology, published widely, and department head.' },
  { id: 2, name: 'Dr Humair Ali',      title: 'Professor of Chemistry',      img: 'https://via.placeholder.com/600x400/1a2d4f/ffffff?text=Faculty', details: 'Award-winning chemist specialising in organic synthesis, mentoring senior projects.' },
  { id: 3, name: 'Prof Sikander Abbass', title: 'Professor of Physics',      img: 'https://via.placeholder.com/600x400/1a2d4f/ffffff?text=Faculty', details: 'Quantum-mechanics PhD making complex ideas accessible, guiding science-fair winners.' },
  { id: 4, name: 'Prof Haseeb',        title: 'Professor of Mathematics',    img: 'https://via.placeholder.com/600x400/1a2d4f/ffffff?text=Faculty', details: 'Transforms abstract maths into fun; coach of the national Olympiad team.' },
  { id: 5, name: 'Prof Taimur',        title: 'Professor of Computer Sci.',  img: 'https://via.placeholder.com/600x400/1a2d4f/ffffff?text=Faculty', details: 'AI & ML expert integrating real-world tech problems into every class project.' },
  { id: 6, name: 'Prof Arslan Sabir',  title: 'Professor of English',        img: 'https://via.placeholder.com/600x400/1a2d4f/ffffff?text=Faculty', details: 'Brings Shakespeare to life and coaches public-speaking champions.' },
];

const eventsData = [
  { img: event1, tag: 'Academic',  title: 'Career Counselling',        desc: 'Expert-led sessions guiding students toward their ideal career paths.' },
  { img: event2, tag: 'Trips',     title: 'Outdoor Trip',              desc: 'Exciting day out for Boys Campus — learning beyond the classroom.' },
  { img: event3, tag: 'Trips',     title: 'IST University Visit',      desc: 'Girls Campus tour of IST University for higher-education insight.' },
  { img: event4, tag: 'Cultural',  title: 'Visit to Liaqat Bagh',      desc: 'Historical excursion exploring Pakistan\'s rich heritage.' },
  { img: event5, tag: 'Sports',    title: 'Sports Gala',               desc: 'Inter-campus sporting extravaganza celebrating student athleticism.' },
  { img: event6, tag: 'Cultural',  title: 'Iqbal Day Ceremony',        desc: 'Tribute to the national poet with recitations, speeches, and performances.' },
];

const alumniData = [
  { name: 'Hussnain',      img: alumni1, quote: 'This college transformed me into a confident young man capable of taking up challenges and overcoming any obstacle.' },
  { name: 'Ahsan',         img: alumni2, quote: 'I owe my success to the diligent staff whose supportive environment allowed me to excel academically and personally.' },
  { name: 'Taskeen Zahra', img: alumni3, quote: 'The education here is second to none — preparing you academically while teaching crucial life skills.' },
  { name: 'Abdul Rafay',   img: alumni4, quote: 'Excellent faculty and a nurturing atmosphere shaped my future in ways I could never have imagined.' },
];

const leaderMessages = [
  { id: 'ceo',       title: 'CEO',       role: 'Chief Executive Officer', img: ceoImg,       short: 'We are dedicated to revolutionizing education beyond boundaries, fostering creativity, confidence, and holistic growth in every student.', full: 'At Dr. AQ Khan College, we are dedicated to revolutionizing the dynamics of the education sector, where education thrives beyond boundaries. We foster creativity, confidence, and holistic growth in our students. Our aim is to develop well-rounded individuals empowering them with purpose, integrity, and social responsibility.' },
  { id: 'director',  title: 'Director',  role: 'Director',                img: directorImg,  short: 'We are committed to character building, academic excellence, and increasing the literacy rate of Pakistan.', full: 'At Dr A Q Khan College, we are committed to fostering character building among our students and increasing the literacy rate of Pakistan. We focus on moral values, critical thinking, and social responsibility to create ethical leaders who contribute positively to society.' },
  { id: 'principal', title: 'Principal', role: 'Principal',               img: principalImg, short: 'We nurture young minds, foster curiosity, and empower students to become confident, capable future leaders.', full: 'Welcome to Dr. A.Q Khan College. We focus on nurturing young minds, fostering curiosity, and empowering future leaders. Our institution provides a holistic educational experience with modern facilities, expert faculty, and strong student support systems.' },
];

/* ─────────────────────────── SCROLL FADE HOOK ─────────────────────────── */
function useFade() {
  useEffect(() => {
    const els = document.querySelectorAll('.hm-fade');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─────────────────────────── COMPONENT ─────────────────────────── */
export default function Home() {
  const [slide, setSlide] = useState(0);
  const [counts, setCounts] = useState({ s: 0, p: 0, f: 0, m: 0 });
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [expandedLeader, setExpandedLeader] = useState(null);
  const [expandedAlumni, setExpandedAlumni] = useState(null);
  useFade();

  // Hero auto-slide
  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  // Counting animation
  useEffect(() => {
    const targets = { s: 500, p: 8, f: 30, m: 3 };
    const duration = 2000; const steps = 60;
    let step = 0;
    const id = setInterval(() => {
      step++;
      const prog = step / steps;
      setCounts({
        s: Math.round(targets.s * prog),
        p: Math.round(targets.p * prog),
        f: Math.round(targets.f * prog),
        m: Math.round(targets.m * prog),
      });
      if (step >= steps) clearInterval(id);
    }, duration / steps);
    return () => clearInterval(id);
  }, []);

  const countsArr = [
    { num: counts.s, sup: '+', lbl: 'Students Enrolled' },
    { num: counts.p, sup: '',  lbl: 'Programs Offered' },
    { num: counts.f, sup: '+', lbl: 'Expert Faculty' },
    { num: counts.m, sup: '',  lbl: 'University MOUs' },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="hm">

        {/* ══ HERO ════════════════════════════════════════════════ */}
        <section className="hm-hero">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide}
              src={heroSlides[slide].img}
              className="hm-hero-img"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 0.45, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            />
          </AnimatePresence>
          <div className="hm-hero-overlay" />
          <div className="hm-hero-grid" />

          <div className="hm-hero-content">
            <div>
              <div className="hm-hero-eyebrow">Rawalpindi · Harley Street</div>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                >
                  {heroSlides[slide].heading[0]}{' '}
                  <em>{heroSlides[slide].heading[1]}</em>{' '}
                  {heroSlides[slide].heading[2]}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${slide}`}
                  className="hm-hero-sub"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  {heroSlides[slide].sub}
                </motion.p>
              </AnimatePresence>
              <div className="hm-hero-btns">
                <Link to="/admissions" className="hm-btn-gold">Get Admission Form</Link>
                <Link to="/about" className="hm-btn-ghost">Explore Programs</Link>
              </div>
              <div className="hm-hero-dots">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    className={`hm-hero-dot${slide === i ? ' active' : ''}`}
                    onClick={() => setSlide(i)}
                  />
                ))}
              </div>
            </div>

            <div className="hm-hero-aside">
              <div className="hm-aside-title">At a Glance</div>
              {[
                { num: '8+', lbl: 'Programs — FSc, ICS, ICOM, FA' },
                { num: '3',  lbl: 'University MOUs — IST & Riphah' },
                { num: '80%+', lbl: 'Scholarships for top students' },
                { num: '3', lbl: 'Check-points per academic year' },
              ].map((s, i) => (
                <div key={i} className="hm-aside-stat">
                  <span className="hm-aside-num">{s.num}</span>
                  <span className="hm-aside-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ STATS ═══════════════════════════════════════════════ */}
        <div className="hm-stats">
          <div className="hm-stats-grid">
            {countsArr.map((s, i) => (
              <div key={i} className="hm-stat-item">
                <span className="hm-stat-num">{s.num}<span className="hm-stat-sup">{s.sup}</span></span>
                <span className="hm-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ LEADERSHIP MESSAGES ═════════════════════════════════ */}
        <section className="hm-section hm-leadership">
          <div className="hm-container">
            <div className="hm-center hm-fade">
              <div className="hm-label">From the Administration</div>
              <h2 className="hm-title">Words from Our Leaders</h2>
              <div className="hm-gold-line hm-gold-line-center" />
            </div>
            <div className="hm-leader-grid">
              {leaderMessages.map((m, i) => (
                <div key={m.id} className="hm-leader-card hm-fade" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="hm-leader-head">
                    <img src={m.img} alt={m.title} className="hm-leader-photo" />
                    <div className="hm-leader-name">{m.title}</div>
                    <div className="hm-leader-role">{m.role}</div>
                  </div>
                  <div className="hm-leader-body">
                    <p className="hm-leader-quote">
                      {expandedLeader === m.id ? m.full : m.short}
                    </p>
                    <button
                      className="hm-leader-btn"
                      onClick={() => setExpandedLeader(expandedLeader === m.id ? null : m.id)}
                    >
                      {expandedLeader === m.id ? '← Read Less' : 'Read Full Message →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FACULTY ═════════════════════════════════════════════ */}
        <section className="hm-section hm-faculty">
          <div className="hm-container">
            <div className="hm-center hm-fade">
              <div className="hm-label" style={{ justifyContent: 'center' }}>Our People</div>
              <h2 className="hm-title hm-title-white">Expert Faculty</h2>
              <div className="hm-gold-line hm-gold-line-center" />
              <p className="hm-desc hm-desc-white" style={{ margin: '-28px auto 0' }}>
                Click on any faculty member to learn more about their expertise and contributions.
              </p>
            </div>
            <div className="hm-faculty-grid">
              {facultyData.map((f, i) => (
                <div
                  key={f.id}
                  className="hm-faculty-card hm-fade"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                  onClick={() => setSelectedFaculty(f)}
                >
                  <img src={f.img} alt={f.name} className="hm-faculty-img" />
                  <div className="hm-faculty-info">
                    <div className="hm-faculty-name">{f.name}</div>
                    <div className="hm-faculty-title">{f.title}</div>
                    <div className="hm-faculty-arrow">View Profile →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Modal */}
        <AnimatePresence>
          {selectedFaculty && (
            <motion.div
              className="hm-modal-overlay"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedFaculty(null)}
            >
              <motion.div
                className="hm-modal"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={e => e.stopPropagation()}
                style={{ position: 'relative' }}
              >
                <img src={selectedFaculty.img} alt={selectedFaculty.name} className="hm-modal-img" />
                <button className="hm-modal-close" onClick={() => setSelectedFaculty(null)}>×</button>
                <div className="hm-modal-body">
                  <div className="hm-modal-name">{selectedFaculty.name}</div>
                  <div className="hm-modal-role">{selectedFaculty.title}</div>
                  <p className="hm-modal-text">{selectedFaculty.details}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ══ EVENTS ══════════════════════════════════════════════ */}
        <section className="hm-section hm-events" id="events">
          <div className="hm-container">
            <div className="hm-center hm-fade">
              <div className="hm-label" style={{ justifyContent: 'center' }}>Campus Life</div>
              <h2 className="hm-title">Programs & Events</h2>
              <div className="hm-gold-line hm-gold-line-center" />
              <p className="hm-desc" style={{ margin: '-28px auto 0' }}>
                Beyond academics — explore the vibrant events and activities that define life at Dr. A.Q. Khan College.
              </p>
            </div>
            <div className="hm-events-grid">
              {eventsData.map((ev, i) => (
                <div key={i} className="hm-event-card hm-fade" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <img src={ev.img} alt={ev.title} className="hm-event-img" />
                  <div className="hm-event-body">
                    <span className="hm-event-tag">{ev.tag}</span>
                    <div className="hm-event-title">{ev.title}</div>
                    <p className="hm-event-desc">{ev.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ALUMNI ══════════════════════════════════════════════ */}
        <section className="hm-section hm-alumni">
          <div className="hm-container">
            <div className="hm-center hm-fade">
              <div className="hm-label" style={{ justifyContent: 'center' }}>Success Stories</div>
              <h2 className="hm-title hm-title-white">Alumni Voices</h2>
              <div className="hm-gold-line hm-gold-line-center" />
              <p className="hm-desc hm-desc-white" style={{ margin: '-28px auto 0' }}>
                Hear from the graduates whose lives were shaped within our walls.
              </p>
            </div>
            <div className="hm-alumni-grid">
              {alumniData.map((al, i) => (
                <div key={i} className="hm-alumni-card hm-fade" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <img src={al.img} alt={al.name} className="hm-alumni-img" />
                  <div className="hm-alumni-body">
                    <div className="hm-alumni-name">{al.name}</div>
                    <p className="hm-alumni-quote">
                      {expandedAlumni === i ? al.quote : `${al.quote.slice(0, 75)}…`}
                    </p>
                    <button
                      className="hm-alumni-btn"
                      onClick={() => setExpandedAlumni(expandedAlumni === i ? null : i)}
                    >
                      {expandedAlumni === i ? 'Read Less ↑' : 'Read More →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══════════════════════════════════════════ */}
        <div className="hm-cta">
          <div className="hm-cta-inner">
            <div className="hm-fade">
              <div className="hm-cta-title">
                Ready to Begin Your<br /><em>Academic Journey?</em>
              </div>
              <p className="hm-cta-sub">
                Admissions are open. Join a community of curious minds and ambitious achievers.
              </p>
            </div>
            <div className="hm-cta-btns hm-fade" style={{ transitionDelay: '0.15s' }}>
              <Link to="/admissions" className="hm-btn-gold">📄 Get Admission Form</Link>
              <Link to="/contact" className="hm-btn-ghost">📞 Contact Us</Link>
            </div>
          </div>
        </div>

        {/* ══ FOOTER ══════════════════════════════════════════════ */}
        <footer className="hm-footer">
          <div className="hm-footer-inner">
            <div>
              <div className="hm-footer-brand-name">Dr. A.Q. Khan College</div>
              <p className="hm-footer-brand-desc">
                A premier institution on Harley Street, Rawalpindi — dedicated to academic excellence, character building, and shaping Pakistan's future leaders.
              </p>
              <div className="hm-footer-social">
                <a href="https://www.facebook.com/aqkhancollegeharleycampus/" className="hm-footer-social-btn" target="_blank" rel="noreferrer">f</a>
                <a href="#" className="hm-footer-social-btn">tw</a>
                <a href="#" className="hm-footer-social-btn">in</a>
              </div>
            </div>
            <div>
              <div className="hm-footer-col-title">Quick Links</div>
              <ul className="hm-footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/charter">Partnerships</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="hm-footer-col-title">Contact</div>
              <ul className="hm-footer-links">
                <li><a href="#">📍 3 Harley Street, Rawalpindi</a></li>
                <li><a href="tel:+923453300699">📞 +92 345 3300699</a></li>
                <li><a href="mailto:aqkhanedu@gmail.com">✉️ aqkhanedu@gmail.com</a></li>
                <li><a href="#">Mon–Fri: 8 am – 4 pm</a></li>
              </ul>
            </div>
          </div>
          <div className="hm-footer-bottom">
            <span className="hm-footer-copy">© {new Date().getFullYear()} Dr. A.Q. Khan College. All rights reserved.</span>
            <span className="hm-footer-copy">Building futures · Empowering Pakistan</span>
          </div>
        </footer>

      </div>
    </>
  );
}