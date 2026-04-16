import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { facultyData } from './Home';
import mamFaiza   from "./asset/image/mamFaiza.jpg";
import sirDaniyal   from "./asset/image/sirDaniyal.jpg";
import sirSikander   from "./asset/image/sirSikander.jpg";
import mamBatool    from "./asset/image/mam Batool.jpg";
import sirShoaib    from "./asset/image/sir shoaib.jpg";
import sirRafay    from "./asset/image/sir rafay.jpg";

const facultyPhotos = {
2: mamFaiza,
12: sirDaniyal,
5: sirSikander,
7: mamBatool,
13: sirShoaib,
6: sirRafay
};

/* ─────────────────── CSS ─────────────────── */
const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
:root{--navy:#0A1931;--blue:#1A3A6E;--gold:#C9A84C;--gold-lt:#E8C97A;--light:#F7F9FC;--white:#FFFFFF;--gray:#6B7A99;}
.fp*,.fp *::before,.fp *::after{box-sizing:border-box;margin:0;padding:0;}
.fp{font-family:'DM Sans',sans-serif;color:var(--navy);background:var(--white);}
 
/* NAV */
.fp-nav{position:sticky;top:0;z-index:200;background:rgba(10,25,49,.97);backdrop-filter:blur(14px);border-bottom:1px solid rgba(201,168,76,.18);}
.fp-nav-inner{max-width:1280px;margin:0 auto;padding:0 40px;height:72px;display:flex;align-items:center;gap:20px;}
.fp-nav-back{display:inline-flex;align-items:center;gap:8px;color:rgba(255,255,255,.65);text-decoration:none;font-size:14px;font-weight:500;transition:color .2s;white-space:nowrap;}
.fp-nav-back:hover{color:var(--gold);}
.fp-nav-divider{width:1px;height:20px;background:rgba(255,255,255,.15);flex-shrink:0;}
.fp-nav-title{font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:var(--white);}
.fp-nav-cta{margin-left:auto;background:var(--gold);color:var(--navy);font-weight:700;font-size:13px;padding:10px 24px;border-radius:100px;text-decoration:none;transition:background .2s;white-space:nowrap;}
.fp-nav-cta:hover{background:var(--gold-lt);}
@media(max-width:600px){.fp-nav-inner{padding:0 20px;}.fp-nav-title{display:none;}}
 
/* HERO */
.fp-hero{background:linear-gradient(135deg,var(--navy) 0%,#112550 100%);padding:80px 40px 90px;position:relative;overflow:hidden;text-align:center;}
.fp-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(201,168,76,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.05) 1px,transparent 1px);background-size:56px 56px;}
.fp-hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:80px;background:var(--white);clip-path:ellipse(55% 100% at 50% 100%);}
.fp-hero-label{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;position:relative;z-index:1;}
.fp-hero-label::before,.fp-hero-label::after{content:'';display:block;width:24px;height:2px;background:var(--gold);}
.fp-hero h1{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,60px);font-weight:900;color:var(--white);line-height:1.1;margin-bottom:16px;position:relative;z-index:1;}
.fp-hero h1 em{color:var(--gold);font-style:normal;}
.fp-hero-sub{font-size:17px;line-height:1.8;color:rgba(255,255,255,.6);max-width:520px;margin:0 auto;position:relative;z-index:1;}
 
/* COUNT STRIP */
.fp-strip{background:var(--navy);padding:28px 40px;display:flex;justify-content:center;align-items:center;gap:40px;flex-wrap:wrap;}
.fp-strip-item{text-align:center;}
.fp-strip-num{font-family:'Playfair Display',serif;font-size:32px;font-weight:900;color:var(--gold);display:block;}
.fp-strip-lbl{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.5);display:block;margin-top:4px;}
.fp-strip-div{width:1px;height:40px;background:rgba(201,168,76,.2);}
@media(max-width:560px){.fp-strip-div{display:none;}}
 
/* ZIGZAG LIST */
.fp-list{padding:80px 40px;}
@media(max-width:768px){.fp-list{padding:56px 20px;}}
.fp-list-inner{max-width:1060px;margin:0 auto;}
 
.fp-member{
  display:grid;grid-template-columns:1fr 1fr;
  gap:72px;align-items:center;
  padding:80px 0;
  border-bottom:1px solid rgba(10,25,49,.08);
}
.fp-member:last-child{border-bottom:none;}
.fp-member.rev{direction:rtl;}
.fp-member.rev>*{direction:ltr;}
@media(max-width:860px){
  .fp-member,.fp-member.rev{grid-template-columns:1fr;direction:ltr;gap:36px;padding:52px 0;max-width:480px;margin:0 auto;}
}
 
/* Image side */
.fp-img-wrap{position:relative;border-radius:24px;overflow:hidden;box-shadow:0 20px 70px rgba(10,25,49,.18);aspect-ratio:3/4;background:var(--navy);}
.fp-img-wrap img{width:100%;height:100%;object-fit:contain;display:block;transition:transform .6s;}
.fp-img-wrap:hover img{transform:scale(1.03);}
.fp-img-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%,rgba(10,25,49,.65) 100%);}
.fp-img-subject{position:absolute;bottom:20px;left:20px;background:var(--gold);color:var(--navy);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:6px 14px;border-radius:100px;}
 
/* Avatar fallback */
.fp-avatar-block{aspect-ratio:3/4;border-radius:24px;background:linear-gradient(135deg,var(--navy),var(--blue));border:2px solid rgba(201,168,76,.2);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;box-shadow:0 20px 70px rgba(10,25,49,.18);}
.fp-avatar-initials{font-family:'Playfair Display',serif;font-size:80px;font-weight:900;color:var(--gold);line-height:1;}
.fp-avatar-name{font-size:13px;color:rgba(255,255,255,.45);letter-spacing:2px;text-transform:uppercase;}
 
/* Text side */
.fp-text{display:flex;flex-direction:column;}
.fp-member-num{font-family:'Playfair Display',serif;font-size:88px;font-weight:900;line-height:.85;color:rgba(10,25,49,.05);margin-bottom:-12px;user-select:none;}
.fp-subject-label{display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:12px;}
.fp-subject-label::before{content:'';display:block;width:20px;height:2px;background:var(--gold);}
.fp-member-name{font-family:'Playfair Display',serif;font-size:clamp(26px,3vw,38px);font-weight:900;color:var(--navy);line-height:1.15;margin-bottom:6px;}
.fp-member-role{font-size:14px;color:var(--gray);margin-bottom:24px;}
 
/* Info pills */
.fp-info-grid{display:flex;flex-direction:column;gap:14px;margin-bottom:28px;}
.fp-info-row{display:flex;align-items:flex-start;gap:12px;}
.fp-info-icon{width:38px;height:38px;border-radius:10px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.25);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0;}
.fp-info-content{}
.fp-info-label{font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--gray);margin-bottom:2px;}
.fp-info-value{font-size:15px;font-weight:600;color:var(--navy);line-height:1.4;}
 
.fp-contact-btn{display:inline-flex;align-items:center;gap:8px;background:var(--navy);color:var(--gold);font-size:13px;font-weight:600;letter-spacing:.5px;padding:13px 26px;border-radius:100px;text-decoration:none;transition:background .2s,transform .2s;width:fit-content;font-family:'DM Sans',sans-serif;}
.fp-contact-btn:hover{background:var(--blue);transform:translateY(-2px);}
 
/* CTA */
.fp-cta{background:linear-gradient(105deg,var(--navy),#112550);padding:80px 40px;text-align:center;position:relative;overflow:hidden;}
.fp-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(201,168,76,.1),transparent 60%);}
.fp-cta h2{font-family:'Playfair Display',serif;font-size:clamp(28px,4vw,44px);font-weight:900;color:var(--white);margin-bottom:12px;position:relative;}
.fp-cta h2 em{color:var(--gold);font-style:normal;}
.fp-cta p{font-size:16px;color:rgba(255,255,255,.6);margin-bottom:32px;position:relative;}
.fp-cta-btns{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;position:relative;}
.fp-btn-gold{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--navy);font-weight:700;font-size:15px;padding:16px 34px;border-radius:100px;text-decoration:none;transition:background .2s,transform .2s;font-family:'DM Sans',sans-serif;}
.fp-btn-gold:hover{background:var(--gold-lt);transform:translateY(-2px);}
.fp-btn-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--white);font-weight:600;font-size:15px;padding:14px 32px;border-radius:100px;border:2px solid rgba(255,255,255,.3);text-decoration:none;transition:border-color .2s,color .2s;font-family:'DM Sans',sans-serif;}
.fp-btn-ghost:hover{border-color:var(--gold);color:var(--gold);}
 
/* FOOTER */
.fp-footer{background:#060f1e;padding:28px 40px;text-align:center;}
.fp-footer-copy{font-size:12px;color:rgba(255,255,255,.25);}
`;





export default function FacultyPage() {
  const location = useLocation();

  useEffect(() => {
    if(location.hash) {
      const id = location.hash.replace('#','');
      const el = document.getElementById(`fac-${id}`);
      if(el) setTimeout(() => el.scrollIntoView({ behavior:'smooth', block:'center' }), 300);
    }
  }, [location]);

  const subjects = [...new Set(facultyData.map(f => f.subject))];

  return (
    <>
      <style>{css}</style>
      <div className="fp">

        {/* NAV */}
        <nav className="fp-nav">
          <div className="fp-nav-inner">
            <Link to="/" className="fp-nav-back">← Home</Link>
            <div className="fp-nav-divider"/>
            <span className="fp-nav-title">Our Faculty</span>
            <Link to="/admissions" className="fp-nav-cta">Get Admission Form</Link>
          </div>
        </nav>

        {/* HERO */}
        <div className="fp-hero">
          <div className="fp-hero-label">Our People</div>
          <h1>Meet Our <em>Expert Faculty</em></h1>
          <p className="fp-hero-sub">Dedicated educators, accomplished scholars, and passionate mentors shaping the next generation of leaders.</p>
        </div>

        {/* STRIP */}
        <div className="fp-strip">
          <div className="fp-strip-item">
            <span className="fp-strip-num">{facultyData.length}</span>
            <span className="fp-strip-lbl">Faculty Members</span>
          </div>
          <div className="fp-strip-div"/>
          <div className="fp-strip-item">
            <span className="fp-strip-num">{subjects.length}</span>
            <span className="fp-strip-lbl">Subjects Covered</span>
          </div>
          <div className="fp-strip-div"/>
          <div className="fp-strip-item">
            <span className="fp-strip-num">100%</span>
            <span className="fp-strip-lbl">Student Focused</span>
          </div>
        </div>

        {/* ZIGZAG LIST */}
        <section className="fp-list">
          <div className="fp-list-inner">
            {facultyData.map((f, i) => {
              const isReverse = i % 2 !== 0;
              const photo     = facultyPhotos[f.id];
              const initials  = f.name.split(' ').filter(w=>w.length>1).map(w=>w[0]).slice(0,2).join('');
              const padNum    = String(i+1).padStart(2,'0');

              return (
                <motion.div
                  key={f.id}
                  id={`fac-${f.id}`}
                  className={`fp-member${isReverse?' rev':''}`}
                  initial={{ opacity:0, y:50 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true, margin:'-80px' }}
                  transition={{ duration:.7, ease:[.22,1,.36,1] }}
                >
                  {/* ── Image / Avatar ── */}
                  {photo ? (
                    <div className="fp-img-wrap">
                      <img src={photo} alt={f.name}/>
                      <div className="fp-img-overlay"/>
                      <span className="fp-img-subject">{f.subject}</span>
                    </div>
                  ) : (
                    <div className="fp-avatar-block">
                      <div className="fp-avatar-initials">{initials}</div>
                      <div className="fp-avatar-name">{f.name}</div>
                    </div>
                  )}

                  {/* ── Info ── */}
                  <div className="fp-text">
                    <div className="fp-member-num">{padNum}</div>
                    <div className="fp-subject-label">{f.subject}</div>
                    <h2 className="fp-member-name">{f.name}</h2>
                    <div className="fp-member-role">Faculty Member · {f.subject}</div>

                    <div className="fp-info-grid">
                      {/* Qualification */}
                      <div className="fp-info-row">
                        <div className="fp-info-icon">🎓</div>
                        <div className="fp-info-content">
                          <div className="fp-info-label">Qualification</div>
                          <div className="fp-info-value">{f.qual}</div>
                        </div>
                      </div>
                      {/* Experience */}
                      <div className="fp-info-row">
                        <div className="fp-info-icon">📅</div>
                        <div className="fp-info-content">
                          <div className="fp-info-label">Experience</div>
                          <div className="fp-info-value">{f.experience} Teaching Experience</div>
                        </div>
                      </div>
                      {/* Subject */}
                      <div className="fp-info-row">
                        <div className="fp-info-icon">📚</div>
                        <div className="fp-info-content">
                          <div className="fp-info-label">Subject</div>
                          <div className="fp-info-value">{f.subject}</div>
                        </div>
                      </div>
                    </div>

                    <a href="mailto:aqkhanedu@gmail.com" className="fp-contact-btn">
                      ✉️ Get in Touch
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="fp-cta">
          <h2>Ready to Learn from the <em>Best?</em></h2>
          <p>Join Dr. A.Q. Khan College and be guided by Pakistan's finest educators.</p>
          <div className="fp-cta-btns">
            <Link to="/admissions" className="fp-btn-gold">📄 Get Admission Form</Link>
            <Link to="/contact" className="fp-btn-ghost">📞 Contact Us</Link>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="fp-footer">
          <p className="fp-footer-copy">© {new Date().getFullYear()} Dr. A.Q. Khan College · 3 Harley Street, Rawalpindi · Building futures, Empowering Pakistan</p>
        </footer>

      </div>
    </>
  );
}