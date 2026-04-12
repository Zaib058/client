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
import ceoImg1      from "./asset/image/ceoimg.jpg";
import directorImg  from "./asset/image/director.jpg";
import profAqeel from "./asset/image/profAqeel.jpg";
import founderImg   from "./asset/image/hero1.jpg";
import mamFaiza   from "./asset/image/mamFaiza.jpg";
import sirDaniyal   from "./asset/image/sirDaniyal.jpg";
import sirSikander   from "./asset/image/sirSikander.jpg";
import mamHafsa    from "./asset/image/mamHafsa.jpg";
// ─── HOW TO ADD PHOTOS ────────────────────────────────────────────────────────
//
// FOUNDER:
//   import aqkhanImg from "./asset/image/aqkhan.jpg";
//   Then set founderImg to aqkhanImg below (already wired in founderImg above—
//   just replace hero1.jpg with the real photo filename).
//
// BOARD OF DIRECTORS / GOVERNORS:
//   import shireenpic from "./asset/image/shireen.jpg";
//   Then in boardDirectors below, set photo: shireenpic  (null = show initials)
//
// FACULTY:
//   import sadiaPic from "./asset/image/sadia.jpg";
//   Then in facultyData below, set photo: sadiaPic        (null = show initials)
//
// ─────────────────────────────────────────────────────────────────────────────

/* ─────────────────── CSS ─────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
:root{--navy:#0A1931;--blue:#1A3A6E;--gold:#C9A84C;--gold-lt:#E8C97A;--light:#F7F9FC;--white:#FFFFFF;--gray:#6B7A99;}
.hm*,.hm *::before,.hm *::after{box-sizing:border-box;margin:0;padding:0;}
.hm{font-family:'DM Sans',sans-serif;color:var(--navy);background:var(--white);}

/* ── NAV ─────────────────────────────────────────────── */
.hm-nav{position:sticky;top:0;z-index:200;background:rgba(10,25,49,.97);backdrop-filter:blur(14px);border-bottom:1px solid rgba(201,168,76,.18);}
.hm-nav-inner{max-width:1280px;margin:0 auto;padding:0 40px;height:72px;display:flex;align-items:center;justify-content:space-between;}
.hm-nav-links{display:flex;gap:32px;list-style:none;}
.hm-nav-links a{color:rgba(255,255,255,.72);text-decoration:none;font-size:14px;font-weight:500;letter-spacing:.4px;transition:color .2s;position:relative;}
.hm-nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;right:0;height:2px;background:var(--gold);transform:scaleX(0);transform-origin:left;transition:transform .25s;}
.hm-nav-links a:hover{color:var(--gold-lt);}
.hm-nav-links a:hover::after{transform:scaleX(1);}
.hm-nav-cta{background:var(--gold);color:var(--navy);font-weight:700;font-size:13px;padding:10px 24px;border-radius:100px;text-decoration:none;transition:background .2s,transform .2s;}
.hm-nav-cta:hover{background:var(--gold-lt);transform:translateY(-1px);}
.hm-burger{display:none;flex-direction:column;justify-content:center;align-items:center;gap:5px;width:44px;height:44px;background:rgba(255,255,255,.07);border:1px solid rgba(201,168,76,.3);border-radius:10px;cursor:pointer;}
.hm-burger span{display:block;width:22px;height:2px;background:var(--gold);border-radius:2px;transition:transform .3s,opacity .3s;}
.hm-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.hm-burger.open span:nth-child(2){opacity:0;}
.hm-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
.hm-drawer{position:fixed;top:72px;left:0;right:0;z-index:199;background:rgba(8,18,38,.98);backdrop-filter:blur(20px);border-bottom:1px solid rgba(201,168,76,.2);padding:16px 20px 24px;display:none;flex-direction:column;gap:2px;pointer-events:none;opacity:0;transform:translateY(-8px);transition:opacity .3s,transform .3s;}
.hm-drawer.visible{display:flex;}
.hm-drawer.open{pointer-events:all;opacity:1;transform:translateY(0);}
.hm-drawer a{display:block;padding:13px 16px;color:rgba(255,255,255,.78);text-decoration:none;font-size:15px;font-weight:500;border-radius:10px;border-bottom:1px solid rgba(255,255,255,.06);transition:background .2s,color .2s;}
.hm-drawer a:last-child{border-bottom:none;}
.hm-drawer a:hover{background:rgba(201,168,76,.1);color:var(--gold-lt);}
.hm-drawer-cta{margin-top:10px;text-align:center;background:var(--gold)!important;color:var(--navy)!important;font-weight:700!important;border-radius:100px!important;border-bottom:none!important;}
@media(max-width:900px){.hm-nav-links,.hm-nav-cta{display:none;}.hm-burger{display:flex;}}

/* ── HERO ────────────────────────────────────────────── */
.hm-hero{position:relative;height:100vh;min-height:680px;display:flex;align-items:center;overflow:hidden;background:var(--navy);}
.hm-hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top;opacity:.45;}
.hm-hero-overlay{position:absolute;inset:0;background:linear-gradient(105deg,rgba(10,25,49,.95) 35%,rgba(10,25,49,.4) 100%);}
.hm-hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(201,168,76,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.04) 1px,transparent 1px);background-size:60px 60px;}
.hm-hero-content{position:relative;z-index:2;max-width:1280px;margin:0 auto;padding:0 40px;width:100%;display:grid;grid-template-columns:1fr 420px;gap:60px;align-items:center;}
@media(max-width:960px){.hm-hero-content{grid-template-columns:1fr;padding:0 24px;}.hm-hero-aside{display:none;}}
.hm-hero-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
.hm-hero-eyebrow::before{content:'';display:block;width:32px;height:2px;background:var(--gold);}
.hm-hero h1{font-family:'Playfair Display',serif;font-size:clamp(42px,6vw,76px);font-weight:900;line-height:1.06;color:var(--white);margin-bottom:24px;}
.hm-hero h1 em{color:var(--gold);font-style:normal;}
.hm-hero-sub{font-size:17px;line-height:1.8;color:rgba(255,255,255,.65);max-width:500px;margin-bottom:40px;}
.hm-hero-btns{display:flex;gap:16px;flex-wrap:wrap;}
.hm-btn-gold{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--navy);font-weight:700;font-size:15px;padding:16px 34px;border-radius:100px;border:none;cursor:pointer;text-decoration:none;transition:background .2s,transform .2s;font-family:'DM Sans',sans-serif;}
.hm-btn-gold:hover{background:var(--gold-lt);transform:translateY(-2px);}
.hm-btn-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--white);font-weight:600;font-size:15px;padding:14px 32px;border-radius:100px;border:2px solid rgba(255,255,255,.3);cursor:pointer;text-decoration:none;transition:border-color .2s,color .2s;font-family:'DM Sans',sans-serif;}
.hm-btn-ghost:hover{border-color:var(--gold);color:var(--gold);}
.hm-hero-dots{display:flex;gap:8px;margin-top:40px;}
.hm-hero-dot{width:32px;height:3px;border-radius:2px;background:rgba(255,255,255,.25);cursor:pointer;transition:background .3s,width .3s;border:none;}
.hm-hero-dot.active{background:var(--gold);width:56px;}
.hm-hero-aside{background:rgba(255,255,255,.06);border:1px solid rgba(201,168,76,.2);border-radius:20px;padding:32px;backdrop-filter:blur(12px);}
.hm-aside-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--white);margin-bottom:20px;}
.hm-aside-stat{display:flex;align-items:center;gap:16px;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.08);}
.hm-aside-stat:last-child{border-bottom:none;}
.hm-aside-num{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--gold);min-width:90px;}
.hm-aside-lbl{font-size:13px;color:rgba(255,255,255,.6);line-height:1.4;}

/* ── STATS ───────────────────────────────────────────── */
.hm-stats{background:var(--navy);padding:60px 40px;}
.hm-stats-grid{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2px;}
@media(max-width:768px){.hm-stats-grid{grid-template-columns:repeat(2,1fr);}}
.hm-stat-item{text-align:center;padding:40px 20px;border-right:1px solid rgba(201,168,76,.15);}
.hm-stat-item:last-child{border-right:none;}
.hm-stat-num{font-family:'Playfair Display',serif;font-size:clamp(40px,5vw,64px);font-weight:900;color:var(--gold);display:block;line-height:1;}
.hm-stat-sup{font-size:.5em;vertical-align:super;}
.hm-stat-lbl{font-size:12px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.5);margin-top:10px;display:block;}

/* ── SHARED ──────────────────────────────────────────── */
.hm-section{padding:100px 40px;}
@media(max-width:768px){.hm-section{padding:64px 20px;}}
.hm-container{max-width:1280px;margin:0 auto;}
.hm-label{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;}
.hm-label::before{content:'';display:block;width:24px;height:2px;background:var(--gold);}
.hm-title{font-family:'Playfair Display',serif;font-size:clamp(30px,4vw,46px);font-weight:700;line-height:1.15;color:var(--navy);margin-bottom:14px;}
.hm-title-white{color:var(--white);}
.hm-desc{font-size:17px;line-height:1.8;color:var(--gray);max-width:560px;}
.hm-desc-white{color:rgba(255,255,255,.65);}
.hm-center{text-align:center;}
.hm-center .hm-label{justify-content:center;}
.hm-center .hm-desc{margin:0 auto;}
.hm-gold-line{width:56px;height:3px;background:var(--gold);border-radius:2px;margin:20px 0 48px;}
.hm-gold-line-center{margin:20px auto 48px;}
.hm-fade{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease;}
.hm-fade.in{opacity:1;transform:none;}

/* ── ORG SLIDER ──────────────────────────────────────── */
.hm-org{background:var(--navy);}
.hm-org-tabs{display:flex;background:rgba(255,255,255,.05);border:1px solid rgba(201,168,76,.2);border-radius:100px;padding:5px;width:fit-content;margin:0 auto 52px;}
.hm-org-tab{padding:11px 26px;border-radius:100px;font-size:13px;font-weight:600;letter-spacing:.5px;color:rgba(255,255,255,.5);background:none;border:none;cursor:pointer;transition:all .25s;font-family:'DM Sans',sans-serif;white-space:nowrap;}
.hm-org-tab.active{background:var(--gold);color:var(--navy);}
@media(max-width:700px){.hm-org-tabs{flex-direction:column;border-radius:16px;width:100%;}.hm-org-tab{border-radius:12px;text-align:center;}}

/* Founder / CEO slide */
.hm-founder-slide{display:flex;flex-direction:column;align-items:center;text-align:center;}
.hm-founder-photo-wrap{position:relative;margin-bottom:28px;}
.hm-founder-photo{width:160px;height:160px;border-radius:50%;object-fit:cover;object-position:top;border:4px solid var(--gold);box-shadow:0 0 0 10px rgba(201,168,76,.12),0 20px 60px rgba(0,0,0,.4);display:block;}
.hm-founder-emblem{width:160px;height:160px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--navy));border:4px solid var(--gold);display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 10px rgba(201,168,76,.12),0 20px 60px rgba(0,0,0,.4);font-size:64px;}
.hm-founder-badge{position:absolute;bottom:6px;right:6px;width:38px;height:38px;border-radius:50%;background:var(--gold);border:3px solid var(--navy);display:flex;align-items:center;justify-content:center;font-size:18px;}
.hm-founder-name{font-family:'Playfair Display',serif;font-size:clamp(24px,4vw,38px);font-weight:900;color:var(--white);margin-bottom:8px;}
.hm-founder-role{font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
.hm-founder-desc{font-size:16px;line-height:1.9;color:rgba(255,255,255,.6);max-width:600px;margin:0 auto;}

/* ── BOARD CARDS (photo-aware) ───────────────────────── */
.hm-board-grid{display:grid;gap:24px;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}
.hm-board-card{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(201,168,76,.18);
  border-radius:20px;
  overflow:hidden;
  text-align:center;
  transition:transform .3s,background .3s,border-color .3s;
}
.hm-board-card:hover{transform:translateY(-7px);background:rgba(201,168,76,.07);border-color:rgba(201,168,76,.4);}

/* photo version */
.hm-board-img-wrap{
  width:100%; height:180px;
  overflow:hidden; position:relative;
  background:linear-gradient(135deg,var(--blue),#0d2550);
}
.hm-board-img-wrap img{
  width:100%; height:100%;
  object-fit:cover; object-position:top;
  display:block;
  transition:transform .5s;
}
.hm-board-card:hover .hm-board-img-wrap img{transform:scale(1.06);}
.hm-board-img-overlay{
  position:absolute;inset:0;
  background:linear-gradient(180deg,transparent 50%,rgba(10,25,49,.6) 100%);
}

/* initials version */
.hm-board-avatar-wrap{
  width:100%; height:180px;
  background:linear-gradient(135deg,var(--blue),#0d2550);
  display:flex; align-items:center; justify-content:center;
}
.hm-board-avatar{
  width:80px; height:80px; border-radius:50%;
  background:rgba(255,255,255,.08);
  border:2px solid var(--gold);
  display:flex; align-items:center; justify-content:center;
  font-family:'Playfair Display',serif;
  font-size:26px; font-weight:700; color:var(--gold);
}

/* shared card body */
.hm-board-body{padding:18px 16px 20px;}
.hm-board-name{font-family:'Playfair Display',serif;font-size:15px;font-weight:700;color:var(--white);margin-bottom:6px;}
.hm-board-title{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);}

/* ── FACULTY GRID ────────────────────────────────────── */
.hm-faculty-section{background:var(--light);}
.hm-faculty-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:22px;margin-top:56px;}
@media(max-width:480px){.hm-faculty-grid{grid-template-columns:1fr 1fr;gap:12px;}}

.hm-fac-card{background:var(--white);border-radius:18px;overflow:hidden;box-shadow:0 4px 24px rgba(10,25,49,.07);transition:transform .3s,box-shadow .3s;text-decoration:none;display:block;cursor:pointer;}
.hm-fac-card:hover{transform:translateY(-7px);box-shadow:0 20px 60px rgba(10,25,49,.14);}

/* faculty card — photo strip */
.hm-fac-photo-strip{width:100%;height:140px;overflow:hidden;position:relative;background:linear-gradient(135deg,var(--navy),var(--blue));}
.hm-fac-photo-strip img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;transition:transform .5s;}
.hm-fac-card:hover .hm-fac-photo-strip img{transform:scale(1.07);}
.hm-fac-photo-strip-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(10,25,49,.55) 100%);}

/* faculty card — initials head */
.hm-fac-head{background:linear-gradient(135deg,var(--navy),var(--blue));padding:28px 20px 18px;text-align:center;position:relative;}
.hm-fac-head::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:36px;background:var(--white);clip-path:ellipse(55% 100% at 50% 100%);}
.hm-fac-avatar{width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,.12);border:3px solid var(--gold);display:flex;align-items:center;justify-content:center;margin:0 auto 10px;position:relative;z-index:1;font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:var(--gold);}

/* faculty card — photo head (when photo exists) */
.hm-fac-head-photo{background:linear-gradient(135deg,var(--navy),var(--blue));padding-bottom:0;text-align:center;position:relative;}
.hm-fac-head-photo::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:36px;background:var(--white);clip-path:ellipse(55% 100% at 50% 100%);z-index:2;}

.hm-fac-name{font-family:'Playfair Display',serif;font-size:14px;font-weight:700;color:var(--white);position:relative;z-index:1;}
.hm-fac-sub{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);margin-top:3px;position:relative;z-index:1;}
.hm-fac-name-over{font-family:'Playfair Display',serif;font-size:13px;font-weight:700;color:var(--white);position:absolute;bottom:14px;left:0;right:0;z-index:3;padding:0 8px;}
.hm-fac-sub-over{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);position:absolute;bottom:4px;left:0;right:0;z-index:3;padding:0 8px;}

.hm-fac-body{padding:18px 16px 20px;}
.hm-fac-tag{display:inline-block;font-size:10px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--gold);background:rgba(201,168,76,.1);padding:3px 10px;border-radius:100px;margin-bottom:8px;}
.hm-fac-arrow{font-size:12px;color:var(--gray);display:flex;align-items:center;gap:5px;transition:color .2s;}
.hm-fac-card:hover .hm-fac-arrow{color:var(--gold);}
.hm-fac-view-all{text-align:center;margin-top:44px;}

/* ── LEADERSHIP MESSAGES ─────────────────────────────── */
.hm-leadership{background:var(--white);}
.hm-leader-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:56px;}
@media(max-width:900px){.hm-leader-grid{grid-template-columns:1fr;}}
.hm-leader-card{background:var(--white);border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(10,25,49,.08);transition:transform .3s,box-shadow .3s;}
.hm-leader-card:hover{transform:translateY(-8px);box-shadow:0 24px 80px rgba(10,25,49,.15);}
.hm-leader-head{background:linear-gradient(135deg,var(--navy),var(--blue));padding:32px 24px 20px;text-align:center;position:relative;}
.hm-leader-head::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:40px;background:var(--white);clip-path:ellipse(55% 100% at 50% 100%);}
.hm-leader-photo{width:92px;height:92px;border-radius:50%;border:4px solid var(--gold);object-fit:cover;display:block;margin:0 auto 12px;position:relative;z-index:1;}
.hm-leader-name{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--white);position:relative;z-index:1;}
.hm-leader-role{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-top:4px;position:relative;z-index:1;}
.hm-leader-body{padding:28px 24px 24px;}
.hm-leader-quote{font-size:14px;line-height:1.8;color:var(--gray);font-style:italic;padding-left:14px;border-left:3px solid var(--gold);margin-bottom:18px;}
.hm-leader-btn{font-size:13px;font-weight:600;color:var(--navy);background:none;border:none;cursor:pointer;padding:0;transition:color .2s;font-family:'DM Sans',sans-serif;}
.hm-leader-btn:hover{color:var(--gold);}

/* ── EVENTS ──────────────────────────────────────────── */
.hm-events{background:var(--light);}
.hm-events-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:56px;}
@media(max-width:900px){.hm-events-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:560px){.hm-events-grid{grid-template-columns:1fr;}}
.hm-event-card{background:var(--white);border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(10,25,49,.07);transition:transform .3s,box-shadow .3s;}
.hm-event-card:hover{transform:translateY(-6px);box-shadow:0 20px 60px rgba(10,25,49,.13);}
.hm-event-img{width:100%;height:200px;object-fit:cover;display:block;}
.hm-event-body{padding:20px;}
.hm-event-tag{display:inline-block;font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);background:rgba(201,168,76,.1);padding:3px 10px;border-radius:100px;margin-bottom:10px;}
.hm-event-title{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--navy);margin-bottom:6px;}
.hm-event-desc{font-size:14px;color:var(--gray);line-height:1.6;}

/* ── ALUMNI ──────────────────────────────────────────── */
.hm-alumni{background:var(--navy);}
.hm-alumni-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:56px;}
@media(max-width:960px){.hm-alumni-grid{grid-template-columns:1fr 1fr;}}
@media(max-width:560px){.hm-alumni-grid{grid-template-columns:1fr;}}
.hm-alumni-card{background:rgba(255,255,255,.05);border:1px solid rgba(201,168,76,.15);border-radius:16px;overflow:hidden;transition:transform .3s,background .3s;}
.hm-alumni-card:hover{transform:translateY(-6px);background:rgba(255,255,255,.09);}
.hm-alumni-img{width:100%;height:180px;object-fit:cover;background:#1a2d4f;display:block;}
.hm-alumni-body{padding:20px;}
.hm-alumni-name{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:var(--white);margin-bottom:10px;}
.hm-alumni-quote{font-size:13px;line-height:1.7;color:rgba(255,255,255,.6);font-style:italic;padding-left:12px;border-left:2px solid var(--gold);}
.hm-alumni-btn{margin-top:14px;font-size:12px;font-weight:600;color:var(--gold);background:none;border:none;cursor:pointer;padding:0;font-family:'DM Sans',sans-serif;display:block;}

/* ── CTA ─────────────────────────────────────────────── */
.hm-cta{background:linear-gradient(105deg,var(--navy) 0%,#112550 100%);padding:100px 40px;position:relative;overflow:hidden;}
.hm-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 80% 50%,rgba(201,168,76,.1),transparent 50%);}
.hm-cta-inner{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;position:relative;z-index:1;}
@media(max-width:768px){.hm-cta-inner{grid-template-columns:1fr;}}
.hm-cta-title{font-family:'Playfair Display',serif;font-size:clamp(30px,4vw,48px);font-weight:900;color:var(--white);line-height:1.15;margin-bottom:12px;}
.hm-cta-title em{color:var(--gold);font-style:normal;}
.hm-cta-sub{font-size:16px;color:rgba(255,255,255,.6);}
.hm-cta-btns{display:flex;gap:14px;flex-wrap:wrap;}

/* ── FOOTER ──────────────────────────────────────────── */
.hm-footer{background:#060f1e;padding:60px 40px 30px;}
.hm-footer-inner{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr;gap:60px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.08);}
@media(max-width:768px){.hm-footer-inner{grid-template-columns:1fr;gap:36px;}}
.hm-footer-brand-name{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--white);margin-bottom:12px;}
.hm-footer-brand-desc{font-size:14px;color:rgba(255,255,255,.45);line-height:1.7;margin-bottom:24px;}
.hm-footer-social{display:flex;gap:12px;}
.hm-footer-social-btn{width:36px;height:36px;border:1px solid rgba(255,255,255,.15);border-radius:50%;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);text-decoration:none;font-size:14px;transition:border-color .2s,color .2s;}
.hm-footer-social-btn:hover{border-color:var(--gold);color:var(--gold);}
.hm-footer-col-title{font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:20px;}
.hm-footer-links{list-style:none;display:flex;flex-direction:column;gap:10px;}
.hm-footer-links a{font-size:14px;color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s;}
.hm-footer-links a:hover{color:var(--gold-lt);}
.hm-footer-bottom{max-width:1280px;margin:0 auto;padding-top:28px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;}
.hm-footer-copy{font-size:12px;color:rgba(255,255,255,.25);}
`;

/* ─────────────────── DATA ─────────────────── */
const heroSlides = [
  { heading:['Shaping','Future','Leaders'],  sub:'At Dr A.Q. Khan College, we deliver quality education that empowers students with knowledge, confidence, and skills to excel in life.', img:heroImg1 },
  { heading:['Excellence','in','Education'], sub:'Our experienced faculty and modern learning environment ensure every student reaches their full potential.', img:heroImg2 },
  { heading:['Building','Bright','Futures'], sub:"We nurture creativity, discipline, and leadership to prepare students for tomorrow's challenges.", img:heroImg3 },
];

// ── Board of Directors ──────────────────────────────────────────────────────
// To add a photo: import shireenpic from "./asset/image/shireen.jpg";
// Then set  photo: shireenpic  on that member. null → shows initials.
const boardDirectors = [
  { name:"Ma'am Shireen",        initials:'MS', photo:null },
  { name:'Dr. Najaf Ali Mohsin', initials:'NA', photo:directorImg },
  { name:'Rashid Minhas',        initials:'RM', photo:null },
  { name:'Mehboob Sahib',        initials:'MS', photo:null },
];

// ── Board of Governors ──────────────────────────────────────────────────────
// Same pattern — set photo: yourImport when ready.
const boardGovernors = [
  { name:"Ma'am Hafsa",         initials:'MH', photo:mamHafsa },
  { name:"Ma'am Anum",          initials:'MA', photo:null },
  { name:'Prof. Aqeel Gul',     initials:'AG', photo:profAqeel },
  { name:'Prof. Amjad Qureshi', initials:'AQ', photo:null },
];
  

export const facultyData = [
  { id:1,  name:'Ms. Sadia',       subject:'Accounting & Finance',    experience:'8+ Years',  qual:'MS Finance',                                                                       gender:'female', photo:null    },
  { id:2,  name:'Ms. Faiza',       subject:'Humanities',              experience:'10+ Years', qual:'Bachelor of Arts',                                                                 gender:'female', photo:mamFaiza    },
  { id:3,  name:'Sir Safdar',      subject:'I.Com',                   experience:'7+ Years',  qual:'M.Sc. Statistics, University of the Punjab',                                       gender:'male',   photo:null    },
  { id:4,  name:'Sir Arslan',      subject:'English',                 experience:'18+ Years', qual:'Masters in English, Political Science, Islamic Studies, MA.Ed Teachers Education', gender:'male',   photo:null    },
  { id:5,  name:'Sir Sikandar',    subject:'Academic Incharge',       experience:'2+ Years',  qual:'BS Artificial Intelligence',                                                       gender:'male',   photo:sirSikander    },
  { id:6,  name:'Sir Abdul Rafay', subject:'Accounts Incharge',       experience:'2+ Years',  qual:'BS Law, Law College Rawalpindi',                                                   gender:'male',   photo:alumni4 },
  { id:7,  name:'Ms. Batool',      subject:'Biology',                 experience:'7+ Years',  qual:'M.Sc. Microbiology',                                                               gender:'female', photo:null    },
  { id:8,  name:'Ms. Ramsha',      subject:'Biology',                 experience:'8+ Years',  qual:'B.Sc. Biology',                                                                    gender:'female', photo:null    },
  { id:9,  name:'Ms. Taskeen',     subject:'Academic Incharge',       experience:'2+ Years',  qual:'BS Agricultural Sciences, Arid Agriculture University',                            gender:'female', photo:null    },
  { id:10, name:'Mrs. Nazim',      subject:'Tarjamat-ul-Quran',       experience:'2+ Years',  qual:'MA Islamiat, International Islamic University',                                    gender:'female', photo:null    },
  { id:11, name:'Sir Arbab',       subject:'Mathematics',             experience:'4+ Years',  qual:'M.Sc. Mathematics, CUST University',                                               gender:'male',   photo:null    },
  { id:12, name:'Sir Daniyal',       subject:'Computer Science',             experience:'7+ Years',  qual:'BS Computer science, AIR University',                                               gender:'male',   photo:sirDaniyal    },
];

const eventsData = [
  { img:event1, tag:'Academic', title:'Career Counselling',   desc:'Expert-led sessions guiding students toward their ideal career paths.' },
  { img:event2, tag:'Trips',    title:'Outdoor Trip',         desc:'Exciting day out for Boys Campus — learning beyond the classroom.' },
  { img:event3, tag:'Trips',    title:'IST University Visit', desc:'Girls Campus tour of IST University for higher-education insight.' },
  { img:event4, tag:'Cultural', title:'Visit to Liaqat Bagh', desc:"Historical excursion exploring Pakistan's rich heritage." },
  { img:event5, tag:'Sports',   title:'Sports Gala',          desc:'Inter-campus sporting extravaganza celebrating student athleticism.' },
  { img:event6, tag:'Cultural', title:'Iqbal Day Ceremony',   desc:'Tribute to the national poet with recitations, speeches, and performances.' },
];

const alumniData = [
  { name:'Hussnain',      img:alumni1, quote:'This college transformed me into a confident young man capable of taking up challenges and overcoming any obstacle.' },
  { name:'Ahsan',         img:alumni2, quote:'I owe my success to the diligent staff whose supportive environment allowed me to excel academically and personally.' },
  { name:'Taskeen Zahra', img:alumni3, quote:'The education here is second to none — preparing you academically while teaching crucial life skills.' },
  { name:'Abdul Rafay',   img:alumni4, quote:'Excellent faculty and a nurturing atmosphere shaped my future in ways I could never have imagined.' },
];

const leaderMessages = [
  { id:'ceo',       title:'CEO',       role:'Chief Executive Officer', img:ceoImg,       short:'We are dedicated to revolutionizing education beyond boundaries, fostering creativity, confidence, and holistic growth in every student.', full:'At Dr. AQ Khan College, we are dedicated to revolutionizing the dynamics of the education sector, where education thrives beyond boundaries. We foster creativity, confidence, and holistic growth in our students. Our aim is to develop well-rounded individuals empowering them with purpose, integrity, and social responsibility.' },
  { id:'director',  title:'Director',  role:'Director',                img:directorImg,  short:'We are committed to character building, academic excellence, and increasing the literacy rate of Pakistan.', full:'At Dr A Q Khan College, we are committed to fostering character building among our students and increasing the literacy rate of Pakistan. We focus on moral values, critical thinking, and social responsibility to create ethical leaders who contribute positively to society.' },
  { id:'principal', title:'Principal', role:'Principal',               img:profAqeel, short:'We nurture young minds, foster curiosity, and empower students to become confident, capable future leaders.', full:'Welcome to Dr. A.Q Khan College. We focus on nurturing young minds, fostering curiosity, and empowering future leaders. Our institution provides a holistic educational experience with modern facilities, expert faculty, and strong student support systems.' },
];

const orgTabs = ['Founder','CEO','Board of Directors','Board of Governors'];

/* ─────────────────── HELPERS ─────────────────── */
function useFade() {
  useEffect(() => {
    const els = document.querySelectorAll('.hm-fade');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target); } }),
      { threshold:0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// Reusable board card — shows photo if available, otherwise initials block
function BoardCard({ person, roleLabel }) {
  return (
    <div className="hm-board-card">
      {person.photo ? (
        <div className="hm-board-img-wrap">
          <img src={person.photo} alt={person.name}/>
          <div className="hm-board-img-overlay"/>
        </div>
      ) : (
        <div className="hm-board-avatar-wrap">
          <div className="hm-board-avatar">{person.initials}</div>
        </div>
      )}
      <div className="hm-board-body">
        <div className="hm-board-name">{person.name}</div>
        <div className="hm-board-title">{roleLabel}</div>
      </div>
    </div>
  );
}

// Reusable faculty card — shows photo strip if available, otherwise initials head
function FacCard({ f, i }) {
  const initials = f.name.split(' ').filter(w=>w.length>1).map(w=>w[0]).slice(0,2).join('');
  return (
    <Link to={`/faculty#${f.id}`} className="hm-fac-card hm-fade" style={{transitionDelay:`${i*.06}s`}}>
      {f.photo ? (
        <div className="hm-fac-head-photo" style={{position:'relative'}}>
          <div className="hm-fac-photo-strip">
            <img src={f.photo} alt={f.name}/>
            <div className="hm-fac-photo-strip-overlay"/>
          </div>
          {/* name sits over the photo overlay */}
          <div style={{background:'linear-gradient(135deg,var(--navy),var(--blue))',padding:'10px 12px 18px',textAlign:'center',position:'relative'}}>
            <div className="hm-fac-name">{f.name}</div>
            <div className="hm-fac-sub">{f.subject}</div>
          </div>
          <div style={{position:'absolute',bottom:'-1px',left:0,right:0,height:36,background:'var(--white)',clipPath:'ellipse(55% 100% at 50% 100%)',zIndex:2}}/>
        </div>
      ) : (
        <div className="hm-fac-head">
          <div className="hm-fac-avatar">{initials}</div>
          <div className="hm-fac-name">{f.name}</div>
          <div className="hm-fac-sub">{f.subject}</div>
        </div>
      )}
      <div className="hm-fac-body">
        <span className="hm-fac-tag">{f.subject}</span>
        <div className="hm-fac-arrow">View Full Profile →</div>
      </div>
    </Link>
  );
}

/* ─────────────────── MAIN COMPONENT ─────────────────── */
export default function Home() {
  const [slide, setSlide]                   = useState(0);
  const [counts, setCounts]                 = useState({ s:0,p:0,f:0,m:0 });
  const [orgTab, setOrgTab]                 = useState(0);
  const [expandedLeader, setExpandedLeader] = useState(null);
  const [expandedAlumni, setExpandedAlumni] = useState(null);
  const [menuOpen, setMenuOpen]             = useState(false);
  useFade();

  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s+1) % heroSlides.length), 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const targets = { s:500,p:8,f:30,m:3 };
    let step = 0; const steps = 60; const dur = 2000;
    const id = setInterval(() => {
      step++;
      const prog = step / steps;
      setCounts({ s:Math.round(targets.s*prog), p:Math.round(targets.p*prog), f:Math.round(targets.f*prog), m:Math.round(targets.m*prog) });
      if(step >= steps) clearInterval(id);
    }, dur / steps);
    return () => clearInterval(id);
  }, []);

  const countsArr = [
    { num:counts.s, sup:'+', lbl:'Students Enrolled' },
    { num:counts.p, sup:'',  lbl:'Programs Offered' },
    { num:counts.f, sup:'+', lbl:'Expert Faculty' },
    { num:counts.m, sup:'',  lbl:'University MOUs' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{css}</style>
      <div className="hm">

        {/* ══ NAV ══════════════════════════════════════════════ */}
        <nav className="hm-nav">
          <div className="hm-nav-inner">
            <span style={{fontFamily:"'Playfair Display',serif",fontSize:18,fontWeight:700,color:'var(--gold)',letterSpacing:.5}}>
              Dr. A.Q. Khan College
            </span>
            <ul className="hm-nav-links">
              {[['Home','/'],['About','/about'],['Admissions','/admissions'],['Faculty','/faculty'],['Partnerships','/charter'],['Contact','/contact']].map(([l,p])=>(
                <li key={p}><Link to={p}>{l}</Link></li>
              ))}
            </ul>
            <Link to="/admissions" className="hm-nav-cta">Get Admission Form</Link>
            <button className={`hm-burger${menuOpen?' open':''}`} onClick={()=>setMenuOpen(v=>!v)} aria-label="Menu">
              <span/><span/><span/>
            </button>
          </div>
          <div className={`hm-drawer${menuOpen?' visible':''}${menuOpen?' open':''}`}>
            {[['🏠 Home','/'],['📖 About','/about'],['🎓 Admissions','/admissions'],['👨‍🏫 Faculty','/faculty'],['🤝 Partnerships','/charter'],['📞 Contact','/contact']].map(([l,p])=>(
              <Link key={p} to={p} onClick={closeMenu}>{l}</Link>
            ))}
            <Link to="/admissions" className="hm-drawer-cta" onClick={closeMenu}>📄 Get Admission Form</Link>
          </div>
        </nav>

        {/* ══ HERO ═════════════════════════════════════════════ */}
        <section className="hm-hero">
          <AnimatePresence mode="wait">
            <motion.img key={slide} src={heroSlides[slide].img} className="hm-hero-img"
              initial={{opacity:0,scale:1.06}} animate={{opacity:.45,scale:1}} exit={{opacity:0}} transition={{duration:1.2}}/>
          </AnimatePresence>
          <div className="hm-hero-overlay"/><div className="hm-hero-grid"/>
          <div className="hm-hero-content">
            <div>
              <div className="hm-hero-eyebrow">Rawalpindi · Harley Street</div>
              <AnimatePresence mode="wait">
                <motion.h1 key={slide} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:.7}}>
                  {heroSlides[slide].heading[0]} <em>{heroSlides[slide].heading[1]}</em> {heroSlides[slide].heading[2]}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p key={`s-${slide}`} className="hm-hero-sub"
                  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.6,delay:.15}}>
                  {heroSlides[slide].sub}
                </motion.p>
              </AnimatePresence>
              <div className="hm-hero-btns">
                <Link to="/admissions" className="hm-btn-gold">Get Admission Form</Link>
                <Link to="/about" className="hm-btn-ghost">Explore Programs</Link>
              </div>
              <div className="hm-hero-dots">
                {heroSlides.map((_,i)=><button key={i} className={`hm-hero-dot${slide===i?' active':''}`} onClick={()=>setSlide(i)}/>)}
              </div>
            </div>
            <div className="hm-hero-aside">
              <div className="hm-aside-title">At a Glance</div>
              {[
                {num:'8+',             lbl:'Programs — FSc, ICS, ICOM, FA'},
                {num:'3',              lbl:'University MOUs — IST & Riphah'},
                {num:'80%+',           lbl:'Scholarships for top students'},
                {num:'NAVTEC & FBISE', lbl:'Affiliated'},
              ].map((s,i)=>(
                <div key={i} className="hm-aside-stat">
                  <span className="hm-aside-num">{s.num}</span>
                  <span className="hm-aside-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ STATS ════════════════════════════════════════════ */}
        <div className="hm-stats">
          <div className="hm-stats-grid">
            {countsArr.map((s,i)=>(
              <div key={i} className="hm-stat-item">
                <span className="hm-stat-num">{s.num}<span className="hm-stat-sup">{s.sup}</span></span>
                <span className="hm-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ LEADERSHIP MESSAGES ══════════════════════════════ */}
        <section className="hm-section hm-leadership">
          <div className="hm-container">
            <div className="hm-center hm-fade">
              <div className="hm-label">From the Administration</div>
              <h2 className="hm-title">Words from Our Leaders</h2>
              <div className="hm-gold-line hm-gold-line-center"/>
            </div>
            <div className="hm-leader-grid">
              {leaderMessages.map((m,i)=>(
                <div key={m.id} className="hm-leader-card hm-fade" style={{transitionDelay:`${i*.1}s`}}>
                  <div className="hm-leader-head">
                    <img src={m.img} alt={m.title} className="hm-leader-photo"/>
                    <div className="hm-leader-name">{m.title}</div>
                    <div className="hm-leader-role">{m.role}</div>
                  </div>
                  <div className="hm-leader-body">
                    <p className="hm-leader-quote">{expandedLeader===m.id ? m.full : m.short}</p>
                    <button className="hm-leader-btn" onClick={()=>setExpandedLeader(expandedLeader===m.id?null:m.id)}>
                      {expandedLeader===m.id?'← Read Less':'Read Full Message →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ ORG CHART SLIDER ═════════════════════════════════ */}
        <section className="hm-section hm-org">
          <div className="hm-container">
            <div className="hm-center hm-fade" style={{marginBottom:40}}>
              <div className="hm-label" style={{justifyContent:'center'}}>Our Institution</div>
              <h2 className="hm-title hm-title-white">Leadership Structure</h2>
              <div className="hm-gold-line hm-gold-line-center"/>
            </div>
            <div className="hm-fade" style={{display:'flex',justifyContent:'center',marginBottom:48}}>
              <div className="hm-org-tabs">
                {orgTabs.map((t,i)=>(
                  <button key={i} className={`hm-org-tab${orgTab===i?' active':''}`} onClick={()=>setOrgTab(i)}>{t}</button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">

              {/* Founder */}
              {orgTab===0 && (
                <motion.div key="founder" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:.45}} className="hm-founder-slide">
                  <div className="hm-founder-photo-wrap">
                    <img src={founderImg} alt="Dr. Abdul Qadeer Khan" className="hm-founder-photo"/>
                    <div className="hm-founder-badge">🇵🇰</div>
                  </div>
                  <div className="hm-founder-name">Dr. Abdul Qadeer Khan</div>
                  <div className="hm-founder-role">Founder &amp; National Hero of Pakistan</div>
                  <p className="hm-founder-desc">A beacon of scientific achievement and national pride, Dr. A.Q. Khan's vision was to bring world-class education to every Pakistani student. His legacy lives on in every student who walks these halls.</p>
                </motion.div>
              )}

              {/* CEO */}
              {orgTab===1 && (
                <motion.div key="ceo" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:.45}} className="hm-founder-slide">
                  <div className="hm-founder-photo-wrap">
                    {ceoImg1
                      ? <img src={ceoImg1} alt="Dr. G.Q. Mohsin" className="hm-founder-photo"/>
                      : <div className="hm-founder-emblem" style={{fontSize:40,fontFamily:"'Playfair Display',serif",fontWeight:700,color:'var(--gold)'}}>GQM</div>
                    }
                    <div className="hm-founder-badge">🏛️</div>
                  </div>
                  <div className="hm-founder-name">Dr. G.Q. Mohsin</div>
                  <div className="hm-founder-role">CEO · Dr. A.Q. Khan Institution</div>
                </motion.div>
              )}

              {/* Board of Directors */}
              {orgTab===2 && (
                <motion.div key="directors" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:.45}}>
                  <div className="hm-board-grid">
                    {boardDirectors.map((d,i)=>(
                      <motion.div key={i} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*.08}}>
                        <BoardCard person={d} roleLabel="Board of Directors"/>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Board of Governors */}
              {orgTab===3 && (
                <motion.div key="governors" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}} transition={{duration:.45}}>
                  <div className="hm-board-grid">
                    {boardGovernors.map((g,i)=>(
                      <motion.div key={i} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:i*.08}}>
                        <BoardCard person={g} roleLabel="Board of Governors"/>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </section>

        {/* ══ FACULTY GRID ═════════════════════════════════════ */}
        <section className="hm-section hm-faculty-section">
          <div className="hm-container">
            <div className="hm-center hm-fade">
              <div className="hm-label" style={{justifyContent:'center'}}>Our People</div>
              <h2 className="hm-title">Expert Faculty</h2>
              <div className="hm-gold-line hm-gold-line-center"/>
              <p className="hm-desc" style={{margin:'-28px auto 0'}}>
                Meet the dedicated educators who inspire, guide, and shape the next generation of leaders. Click any card to view full profile.
              </p>
            </div>
            <div className="hm-faculty-grid">
              {facultyData.map((f,i)=><FacCard key={f.id} f={f} i={i}/>)}
            </div>
            <div className="hm-fac-view-all hm-fade">
              <Link to="/faculty" className="hm-btn-gold" style={{display:'inline-flex'}}>Meet All Faculty Members →</Link>
            </div>
          </div>
        </section>

        {/* ══ EVENTS ═══════════════════════════════════════════ */}
        <section className="hm-section hm-events" id="events">
          <div className="hm-container">
            <div className="hm-center hm-fade">
              <div className="hm-label" style={{justifyContent:'center'}}>Campus Life</div>
              <h2 className="hm-title">Programs &amp; Events</h2>
              <div className="hm-gold-line hm-gold-line-center"/>
              <p className="hm-desc" style={{margin:'-28px auto 0'}}>Beyond academics — explore the vibrant events and activities that define life at Dr. A.Q. Khan College.</p>
            </div>
            <div className="hm-events-grid">
              {eventsData.map((ev,i)=>(
                <div key={i} className="hm-event-card hm-fade" style={{transitionDelay:`${i*.08}s`}}>
                  <img src={ev.img} alt={ev.title} className="hm-event-img"/>
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

        {/* ══ ALUMNI ═══════════════════════════════════════════ */}
        <section className="hm-section hm-alumni">
          <div className="hm-container">
            <div className="hm-center hm-fade">
              <div className="hm-label" style={{justifyContent:'center'}}>Success Stories</div>
              <h2 className="hm-title hm-title-white">Alumni Voices</h2>
              <div className="hm-gold-line hm-gold-line-center"/>
              <p className="hm-desc hm-desc-white" style={{margin:'-28px auto 0'}}>Hear from the graduates whose lives were shaped within our walls.</p>
            </div>
            <div className="hm-alumni-grid">
              {alumniData.map((al,i)=>(
                <div key={i} className="hm-alumni-card hm-fade" style={{transitionDelay:`${i*.08}s`}}>
                  <img src={al.img} alt={al.name} className="hm-alumni-img"/>
                  <div className="hm-alumni-body">
                    <div className="hm-alumni-name">{al.name}</div>
                    <p className="hm-alumni-quote">{expandedAlumni===i ? al.quote : `${al.quote.slice(0,75)}…`}</p>
                    <button className="hm-alumni-btn" onClick={()=>setExpandedAlumni(expandedAlumni===i?null:i)}>
                      {expandedAlumni===i?'Read Less ↑':'Read More →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══════════════════════════════════════════════ */}
        <div className="hm-cta">
          <div className="hm-cta-inner">
            <div className="hm-fade">
              <div className="hm-cta-title">Ready to Begin Your<br/><em>Academic Journey?</em></div>
              <p className="hm-cta-sub">Admissions are open. Join a community of curious minds and ambitious achievers.</p>
            </div>
            <div className="hm-cta-btns hm-fade" style={{transitionDelay:'0.15s'}}>
              <Link to="/admissions" className="hm-btn-gold">📄 Get Admission Form</Link>
              <Link to="/contact" className="hm-btn-ghost">📞 Contact Us</Link>
            </div>
          </div>
        </div>

        {/* ══ FOOTER ═══════════════════════════════════════════ */}
        <footer className="hm-footer">
          <div className="hm-footer-inner">
            <div>
              <div className="hm-footer-brand-name">Dr. A.Q. Khan College</div>
              <p className="hm-footer-brand-desc">A premier institution on Harley Street, Rawalpindi — dedicated to academic excellence, character building, and shaping Pakistan's future leaders.</p>
              <div className="hm-footer-social">
                <a href="https://www.facebook.com/aqkhancollegeharleycampus/" className="hm-footer-social-btn" target="_blank" rel="noreferrer">f</a>
                <a href="#" className="hm-footer-social-btn">tw</a>
                <a href="#" className="hm-footer-social-btn">in</a>
              </div>
            </div>
            <div>
              <div className="hm-footer-col-title">Quick Links</div>
              <ul className="hm-footer-links">
                {[['Home','/'],['About','/about'],['Admissions','/admissions'],['Faculty','/faculty'],['Partnerships','/charter'],['Contact','/contact']].map(([l,p])=>(
                  <li key={p}><Link to={p}>{l}</Link></li>
                ))}
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