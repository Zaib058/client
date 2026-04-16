import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { leadershipData } from './Home';

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');
:root{--navy:#0A1931;--blue:#1A3A6E;--gold:#C9A84C;--gold-lt:#E8C97A;--light:#F7F9FC;--white:#FFFFFF;--gray:#6B7A99;}
.lp*,.lp *::before,.lp *::after{box-sizing:border-box;margin:0;padding:0;}
.lp{font-family:'DM Sans',sans-serif;color:var(--navy);background:var(--white);min-height:100vh;}

/* NAV */
.lp-nav{position:sticky;top:0;z-index:200;background:rgba(10,25,49,.97);backdrop-filter:blur(14px);border-bottom:1px solid rgba(201,168,76,.18);}
.lp-nav-inner{max-width:1280px;margin:0 auto;padding:0 40px;height:72px;display:flex;align-items:center;gap:20px;}
.lp-nav-back{display:inline-flex;align-items:center;gap:8px;color:rgba(255,255,255,.65);text-decoration:none;font-size:14px;font-weight:500;transition:color .2s;white-space:nowrap;}
.lp-nav-back:hover{color:var(--gold);}
.lp-nav-div{width:1px;height:20px;background:rgba(255,255,255,.15);flex-shrink:0;}
.lp-nav-title{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:var(--white);}
.lp-nav-cta{margin-left:auto;background:var(--gold);color:var(--navy);font-weight:700;font-size:13px;padding:10px 24px;border-radius:100px;text-decoration:none;transition:background .2s;white-space:nowrap;}
.lp-nav-cta:hover{background:var(--gold-lt);}
@media(max-width:600px){.lp-nav-inner{padding:0 20px;}.lp-nav-title{display:none;}}

/* HERO BAND */
.lp-hero{
  background:linear-gradient(135deg,var(--navy) 0%,#0d2550 100%);
  padding:72px 40px 80px;
  position:relative;overflow:hidden;
}
.lp-hero::before{
  content:'';position:absolute;inset:0;
  background-image:linear-gradient(rgba(201,168,76,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.05) 1px,transparent 1px);
  background-size:56px 56px;
}
.lp-hero::after{
  content:'';position:absolute;bottom:0;left:0;right:0;
  height:72px;background:var(--white);
  clip-path:ellipse(55% 100% at 50% 100%);
}
.lp-hero-inner{
  max-width:900px;margin:0 auto;
  display:grid;grid-template-columns:auto 1fr;
  gap:48px;align-items:center;
  position:relative;z-index:1;
}
@media(max-width:700px){.lp-hero-inner{grid-template-columns:1fr;text-align:center;justify-items:center;gap:28px;}}

/* Photo */
.lp-photo-ring{
  position:relative;flex-shrink:0;
}
.lp-photo{
  width:200px;height:200px;border-radius:50%;
  object-fit:contain;background:rgba(255,255,255,.06);
  border:5px solid var(--gold);
  box-shadow:0 0 0 12px rgba(201,168,76,.1),0 24px 80px rgba(0,0,0,.5);
  display:block;
}
.lp-photo-initials{
  width:200px;height:200px;border-radius:50%;
  background:linear-gradient(135deg,var(--blue),#0d2550);
  border:5px solid var(--gold);
  box-shadow:0 0 0 12px rgba(201,168,76,.1),0 24px 80px rgba(0,0,0,.5);
  display:flex;align-items:center;justify-content:center;
  font-family:'Playfair Display',serif;
  font-size:60px;font-weight:900;color:var(--gold);
}
.lp-badge{
  position:absolute;bottom:8px;right:8px;
  width:42px;height:42px;border-radius:50%;
  background:var(--gold);border:4px solid var(--navy);
  display:flex;align-items:center;justify-content:center;font-size:20px;
}

/* Text */
.lp-category{
  display:inline-flex;align-items:center;gap:8px;
  font-size:11px;font-weight:600;letter-spacing:3px;
  text-transform:uppercase;color:var(--gold);margin-bottom:12px;
}
.lp-category::before{content:'';display:block;width:20px;height:2px;background:var(--gold);}
.lp-name{
  font-family:'Playfair Display',serif;
  font-size:clamp(32px,5vw,52px);font-weight:900;
  color:var(--white);line-height:1.1;margin-bottom:10px;
}
.lp-role{
  font-size:15px;color:rgba(255,255,255,.55);margin-bottom:0;
}

/* MESSAGE BODY */
.lp-body{max-width:900px;margin:0 auto;padding:80px 40px;}
@media(max-width:768px){.lp-body{padding:56px 20px;}}

.lp-message-wrap{
  position:relative;
  background:var(--light);
  border-radius:24px;
  padding:56px 56px 56px 72px;
  border-left:5px solid var(--gold);
  box-shadow:0 8px 48px rgba(10,25,49,.07);
}
@media(max-width:600px){.lp-message-wrap{padding:36px 28px 36px 36px;}}

.lp-quote-icon{
  position:absolute;top:32px;left:28px;
  font-size:60px;line-height:1;color:var(--gold);opacity:.18;
  font-family:'Playfair Display',serif;font-weight:900;
  user-select:none;
}
.lp-message-text{
  font-size:17px;line-height:2;color:#334;
  white-space:pre-line;
  position:relative;z-index:1;
}
.lp-message-text p{margin-bottom:24px;}
.lp-message-text p:last-child{margin-bottom:0;}

/* OTHERS STRIP */
.lp-others{
  background:var(--navy);padding:60px 40px;
}
@media(max-width:768px){.lp-others{padding:48px 20px;}}
.lp-others-inner{max-width:900px;margin:0 auto;}
.lp-others-label{
  font-size:11px;font-weight:600;letter-spacing:3px;
  text-transform:uppercase;color:var(--gold);
  display:flex;align-items:center;gap:10px;margin-bottom:32px;
}
.lp-others-label::before{content:'';display:block;width:24px;height:2px;background:var(--gold);}
.lp-others-grid{
  display:grid;gap:16px;
  grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
}
.lp-other-card{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(201,168,76,.18);
  border-radius:14px;overflow:hidden;
  text-decoration:none;
  transition:transform .25s,background .25s,border-color .25s;
  display:block;
}
.lp-other-card:hover{transform:translateY(-5px);background:rgba(201,168,76,.08);border-color:rgba(201,168,76,.4);}
.lp-other-img{
  width:100%;height:120px;
  object-fit:contain;background:var(--navy);display:block;
}
.lp-other-initials{
  width:100%;height:120px;
  background:linear-gradient(135deg,var(--blue),#0d2550);
  display:flex;align-items:center;justify-content:center;
  font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:var(--gold);
}
.lp-other-info{padding:12px 14px;}
.lp-other-name{font-family:'Playfair Display',serif;font-size:13px;font-weight:700;color:var(--white);margin-bottom:3px;}
.lp-other-role{font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--gold);}

/* FOOTER */
.lp-footer{background:#060f1e;padding:28px 40px;text-align:center;}
.lp-footer-copy{font-size:12px;color:rgba(255,255,255,.25);}

/* CTA */
.lp-cta-row{
  max-width:900px;margin:48px auto 0;
  display:flex;gap:16px;flex-wrap:wrap;
}
.lp-btn-gold{display:inline-flex;align-items:center;gap:8px;background:var(--gold);color:var(--navy);font-weight:700;font-size:15px;padding:15px 32px;border-radius:100px;text-decoration:none;transition:background .2s,transform .2s;font-family:'DM Sans',sans-serif;}
.lp-btn-gold:hover{background:var(--gold-lt);transform:translateY(-2px);}
.lp-btn-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--navy);font-weight:600;font-size:15px;padding:13px 30px;border-radius:100px;border:2px solid rgba(10,25,49,.2);text-decoration:none;transition:border-color .2s,color .2s;font-family:'DM Sans',sans-serif;}
.lp-btn-ghost:hover{border-color:var(--gold);color:var(--gold);}
`;

export default function LeadershipPage() {
  const { id } = useParams();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const person = leadershipData.find(p => p.id === id);

  // If id is undefined — show the full leadership directory
  if (!id) {
    return <LeadershipDirectory />;
  }

  if (!person) {
    return (
      <>
        <style>{css}</style>
        <div className="lp">
          <nav className="lp-nav">
            <div className="lp-nav-inner">
              <Link to="/" className="lp-nav-back">← Home</Link>
            </div>
          </nav>
          <div style={{padding:'120px 40px',textAlign:'center'}}>
            <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:32,color:'var(--navy)'}}>Person not found.</h2>
            <Link to="/" style={{color:'var(--gold)',display:'block',marginTop:16}}>← Back to Home</Link>
          </div>
        </div>
      </>
    );
  }

  const others = leadershipData.filter(p => p.id !== id);
  const initials = person.name.replace(/[^a-zA-Z\s]/g,'').split(' ').filter(w=>w.length>1).map(w=>w[0]).slice(0,2).join('');

  // Split message into paragraphs
  const paragraphs = person.message
    ? person.message.split('\n\n').filter(Boolean)
    : [];

  return (
    <>
      <style>{css}</style>
      <div className="lp">

        {/* NAV */}
        <nav className="lp-nav">
          <div className="lp-nav-inner">
            <Link to="/" className="lp-nav-back">← Home</Link>
            <div className="lp-nav-div"/>
            <span className="lp-nav-title">Leadership</span>
            <Link to="/admissions" className="lp-nav-cta">Get Admission Form</Link>
          </div>
        </nav>

        {/* HERO */}
        <motion.div
          className="lp-hero"
          initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6}}
        >
          <div className="lp-hero-inner">
            {/* Photo */}
            <motion.div
              className="lp-photo-ring"
              initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={{duration:.7,delay:.1}}
            >
              {person.photo
                ? <img src={person.photo} alt={person.name} className="lp-photo"/>
                : <div className="lp-photo-initials">{initials}</div>
              }
              <div className="lp-badge">{person.badge}</div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:.7,delay:.2}}
            >
              <div className="lp-category">{person.category}</div>
              <h1 className="lp-name">{person.name}</h1>
              <p className="lp-role">{person.role}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* MESSAGE */}
        <div className="lp-body">
          <motion.div
            className="lp-message-wrap"
            initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.3}}
          >
            <div className="lp-quote-icon">"</div>
            <div className="lp-message-text">
              {paragraphs.length > 0
                ? paragraphs.map((p, i) => <p key={i}>{p}</p>)
                : <p style={{color:'var(--gray)',fontStyle:'italic'}}>Message coming soon.</p>
              }
            </div>
          </motion.div>

          {/* CTA buttons */}
          <div className="lp-cta-row">
            <Link to="/admissions" className="lp-btn-gold">📄 Get Admission Form</Link>
            <Link to="/contact" className="lp-btn-ghost">📞 Contact Us</Link>
          </div>
        </div>

        {/* OTHER LEADERS */}
        <div className="lp-others">
          <div className="lp-others-inner">
            <div className="lp-others-label">More Leaders</div>
            <div className="lp-others-grid">
              {others.map(p => {
                const ini = p.name.replace(/[^a-zA-Z\s]/g,'').split(' ').filter(w=>w.length>1).map(w=>w[0]).slice(0,2).join('');
                return (
                  <Link key={p.id} to={`/leadership/${p.id}`} className="lp-other-card">
                    {p.photo
                      ? <img src={p.photo} alt={p.name} className="lp-other-img"/>
                      : <div className="lp-other-initials">{ini}</div>
                    }
                    <div className="lp-other-info">
                      <div className="lp-other-name">{p.name}</div>
                      <div className="lp-other-role">{p.category}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="lp-footer">
          <p className="lp-footer-copy">© {new Date().getFullYear()} Dr. A.Q. Khan College · 3 Harley Street, Rawalpindi · Building futures, Empowering Pakistan</p>
        </footer>

      </div>
    </>
  );
}

/* ─── Leadership Directory (at /leadership) ─── */
function LeadershipDirectory() {
  const categories = ['Founder','CEO','Board of Directors','Board of Governors'];
  return (
    <>
      <style>{css}</style>
      <style>{`
        .ld-hero{background:linear-gradient(135deg,var(--navy),#112550);padding:80px 40px 90px;text-align:center;position:relative;overflow:hidden;}
        .ld-hero::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(201,168,76,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.05) 1px,transparent 1px);background-size:56px 56px;}
        .ld-hero::after{content:'';position:absolute;bottom:0;left:0;right:0;height:72px;background:var(--white);clip-path:ellipse(55% 100% at 50% 100%);}
        .ld-hero-label{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;position:relative;z-index:1;}
        .ld-hero-label::before,.ld-hero-label::after{content:'';display:block;width:24px;height:2px;background:var(--gold);}
        .ld-hero h1{font-family:'Playfair Display',serif;font-size:clamp(36px,5vw,58px);font-weight:900;color:var(--white);line-height:1.1;margin-bottom:14px;position:relative;z-index:1;}
        .ld-hero h1 em{color:var(--gold);font-style:normal;}
        .ld-hero p{font-size:17px;color:rgba(255,255,255,.6);max-width:500px;margin:0 auto;position:relative;z-index:1;}
        .ld-body{max-width:1100px;margin:0 auto;padding:72px 40px;}
        @media(max-width:768px){.ld-body{padding:52px 20px;}}
        .ld-section{margin-bottom:64px;}
        .ld-section-title{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:var(--navy);margin-bottom:24px;padding-bottom:12px;border-bottom:2px solid rgba(201,168,76,.25);display:flex;align-items:center;gap:12px;}
        .ld-section-title::before{content:'';display:block;width:4px;height:24px;background:var(--gold);border-radius:2px;}
        .ld-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:22px;}
        .ld-card{background:var(--white);border-radius:20px;overflow:hidden;box-shadow:0 4px 28px rgba(10,25,49,.08);text-decoration:none;display:block;transition:transform .3s,box-shadow .3s;border:1px solid rgba(10,25,49,.06);}
        .ld-card:hover{transform:translateY(-7px);box-shadow:0 20px 64px rgba(10,25,49,.14);}
        .ld-card-img{width:100%;height:220px;object-fit:contain;background:var(--navy);display:block;}
        .ld-card-initials{width:100%;height:220px;background:linear-gradient(135deg,var(--navy),var(--blue));display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:48px;font-weight:900;color:var(--gold);}
        .ld-card-body{padding:20px;}
        .ld-card-name{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:var(--navy);margin-bottom:5px;}
        .ld-card-role{font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:var(--gold);margin-bottom:10px;}
        .ld-card-arrow{font-size:12px;color:var(--gray);transition:color .2s;}
        .ld-card:hover .ld-card-arrow{color:var(--gold);}
      `}</style>
      <div className="lp">
        <nav className="lp-nav">
          <div className="lp-nav-inner">
            <Link to="/" className="lp-nav-back">← Home</Link>
            <div className="lp-nav-div"/>
            <span className="lp-nav-title">Our Leadership</span>
            <Link to="/admissions" className="lp-nav-cta">Get Admission Form</Link>
          </div>
        </nav>

        <div className="ld-hero">
          <div className="ld-hero-label">Our Institution</div>
          <h1>Meet Our <em>Leadership</em></h1>
          <p>The visionaries and dedicated leaders who guide Dr. A.Q. Khan College toward excellence.</p>
        </div>

        <div className="ld-body">
          {categories.map(cat => {
            const people = leadershipData.filter(p => p.category === cat);
            if(!people.length) return null;
            return (
              <div key={cat} className="ld-section">
                <div className="ld-section-title">{cat}</div>
                <div className="ld-grid">
                  {people.map(p => {
                    const ini = p.name.replace(/[^a-zA-Z\s]/g,'').split(' ').filter(w=>w.length>1).map(w=>w[0]).slice(0,2).join('');
                    return (
                      <Link key={p.id} to={`/leadership/${p.id}`} className="ld-card">
                        {p.photo
                          ? <img src={p.photo} alt={p.name} className="ld-card-img"/>
                          : <div className="ld-card-initials">{ini}</div>
                        }
                        <div className="ld-card-body">
                          <div className="ld-card-name">{p.name}</div>
                          <div className="ld-card-role">{p.role}</div>
                          <div className="ld-card-arrow">Read Message →</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <footer className="lp-footer">
          <p className="lp-footer-copy">© {new Date().getFullYear()} Dr. A.Q. Khan College · 3 Harley Street, Rawalpindi</p>
        </footer>
      </div>
    </>
  );
}