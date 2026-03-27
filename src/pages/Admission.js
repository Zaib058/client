import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  :root { --navy:#0A1931; --blue:#1A3A6E; --gold:#C9A84C; --gold-lt:#E8C97A; --light:#F7F9FC; --gray:#6B7A99; --gray-lt:#EEF2F8; }
  .adm * { box-sizing: border-box; }
  .adm { font-family: 'DM Sans', sans-serif; background: var(--light); color: var(--navy); min-height: 100vh; }

  /* HERO */
  .adm-hero {
    background: linear-gradient(135deg, var(--navy) 0%, #112550 100%);
    padding: 80px 40px 100px;
    position: relative; overflow: hidden;
  }
  .adm-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px);
    background-size: 56px 56px;
  }
  .adm-hero::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0; right: 0;
    height: 60px;
    background: var(--light);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .adm-hero-inner {
    max-width: 1100px; margin: 0 auto;
    position: relative; z-index: 1;
    display: flex; flex-direction: column; align-items: center; text-align: center;
  }
  .adm-hero-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 16px;
  }
  .adm-hero-label::before { content:''; width:24px; height:2px; background:var(--gold); }
  .adm-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 60px); font-weight: 900;
    color: #fff; margin-bottom: 16px; line-height: 1.1;
  }
  .adm-hero h1 span { color: var(--gold); }
  .adm-hero-sub { font-size: 17px; color: rgba(255,255,255,0.6); max-width: 540px; margin-bottom: 36px; line-height: 1.7; }
  .adm-btn-gold {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold); color: var(--navy);
    font-weight: 700; font-size: 15px;
    padding: 16px 36px; border-radius: 100px;
    text-decoration: none; border: none; cursor: pointer;
    transition: background .2s, transform .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .adm-btn-gold:hover { background: var(--gold-lt); transform: translateY(-2px); }

  /* BODY */
  .adm-body { max-width: 1100px; margin: 0 auto; padding: 60px 40px 100px; }
  @media (max-width: 768px) { .adm-body { padding: 40px 20px 80px; } }

  /* SECTION HEADER */
  .adm-sec-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold); margin-bottom: 8px;
  }
  .adm-sec-label::before { content:''; width:20px; height:2px; background:var(--gold); }
  .adm-sec-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 3vw, 34px); font-weight: 700;
    color: var(--navy); margin-bottom: 32px;
  }
  .adm-section { margin-bottom: 72px; }

  /* PROGRAMS GRID */
  .adm-programs { display: flex; flex-direction: column; gap: 12px; }
  .adm-program-card {
    background: #fff; border-radius: 14px;
    border: 1px solid var(--gray-lt);
    box-shadow: 0 2px 16px rgba(10,25,49,0.05);
    overflow: hidden;
    transition: box-shadow .2s, border-color .2s;
  }
  .adm-program-card.open { border-color: var(--gold); box-shadow: 0 8px 32px rgba(201,168,76,0.12); }
  .adm-program-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 24px; cursor: pointer;
    gap: 16px;
  }
  .adm-program-header:hover { background: rgba(201,168,76,0.03); }
  .adm-program-left { display: flex; align-items: center; gap: 16px; }
  .adm-program-icon {
    width: 44px; height: 44px; flex-shrink: 0;
    background: linear-gradient(135deg, var(--navy), var(--blue));
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
  }
  .adm-program-name {
    font-family: 'Playfair Display', serif;
    font-size: 17px; font-weight: 700; color: var(--navy);
  }
  .adm-program-toggle {
    width: 32px; height: 32px; flex-shrink: 0;
    border-radius: 50%;
    background: var(--gray-lt);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; color: var(--navy); font-weight: 300;
    transition: background .2s, transform .2s;
  }
  .adm-program-card.open .adm-program-toggle {
    background: var(--gold); color: var(--navy); transform: rotate(45deg);
  }
  .adm-program-body {
    border-top: 1px solid var(--gray-lt);
    padding: 16px 24px 20px 84px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .adm-program-detail {
    display: flex; align-items: center; gap: 10px;
    font-size: 14px; color: var(--gray);
  }
  .adm-program-detail::before {
    content: ''; flex-shrink: 0;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold);
  }

  /* DOCUMENTS */
  .adm-docs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
  }
  .adm-doc-card {
    background: #fff; border-radius: 14px;
    padding: 20px; border: 1px solid var(--gray-lt);
    display: flex; align-items: flex-start; gap: 14px;
    box-shadow: 0 2px 12px rgba(10,25,49,0.04);
    transition: transform .2s, box-shadow .2s;
  }
  .adm-doc-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(10,25,49,0.1); }
  .adm-doc-icon {
    width: 40px; height: 40px; flex-shrink: 0;
    background: rgba(201,168,76,0.12);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
  }
  .adm-doc-text { font-size: 14px; color: var(--navy); font-weight: 500; line-height: 1.5; }

  /* EVALUATION */
  .adm-eval-grid { display: flex; flex-direction: column; gap: 12px; }

  /* CRITERIA — weightage bar */
  .adm-criteria { display: flex; flex-direction: column; gap: 14px; }
  .adm-criterion {
    background: #fff; border-radius: 12px; padding: 16px 20px;
    border: 1px solid var(--gray-lt);
    box-shadow: 0 2px 10px rgba(10,25,49,0.04);
  }
  .adm-criterion-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
  .adm-criterion-label { font-size: 14px; font-weight: 600; color: var(--navy); }
  .adm-criterion-pct { font-size: 14px; font-weight: 700; color: var(--gold); }
  .adm-bar-track { height: 6px; background: var(--gray-lt); border-radius: 3px; }
  .adm-bar-fill { height: 6px; border-radius: 3px; background: linear-gradient(90deg, var(--gold), var(--gold-lt)); }

  /* TWO-COL layout for bottom sections */
  .adm-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
  @media (max-width: 768px) { .adm-two-col { grid-template-columns: 1fr; } }

  /* CTA banner */
  .adm-cta {
    background: linear-gradient(135deg, var(--navy), #112550);
    border-radius: 20px; padding: 48px 40px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 32px; flex-wrap: wrap;
    position: relative; overflow: hidden;
    margin-top: 32px;
  }
  .adm-cta::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(circle at 80% 50%, rgba(201,168,76,0.1) 0%, transparent 50%);
  }
  .adm-cta-text { position: relative; z-index: 1; }
  .adm-cta-title { font-family:'Playfair Display',serif; font-size: 26px; font-weight:700; color:#fff; margin-bottom: 8px; }
  .adm-cta-sub { font-size: 15px; color: rgba(255,255,255,0.6); }
  .adm-cta-action { position: relative; z-index: 1; }
`;

const programs = [
  { icon: '🔬', name: 'FSc Pre-Medical', details: ['Biology, Chemistry & Physics'] },
  { icon: '⚙️', name: 'FSc Pre-Engineering', details: ['Mathematics, Chemistry & Physics'] },
  { icon: '💻', name: 'ICS (Computer Science)', details: ['Mathematics, Computer & Physics', 'Mathematics, Computer & Statistics'] },
  { icon: '📊', name: 'ICOM (Intermediate in Commerce)', details: ['B.Maths, Accounting, Commerce & Economics (HSSC-1)', 'B.Stats, Accounting, Banking & Commercial Geography (HSSC-2)'] },
  { icon: '🖥️', name: 'FA (Information Technology)', details: ['Computer Science + Civics + Psychology/Sociology'] },
  { icon: '📖', name: 'FA (Humanities)', details: ['Civics + Education + Psychology', 'Civics + Education + Sociology', 'Civics + Education + Islamic Elective'] },
];

const documents = [
  { icon: '📸', text: 'Passport-size photos with blue background (3 copies)' },
  { icon: '📋', text: 'Matric Marksheet (3 copies)' },
  { icon: '🪪', text: 'Form-B / B-Form (3 copies)' },
  { icon: '📄', text: 'NOC — if board is other than FBISE' },
  { icon: '🗓️', text: 'GAP Certificate (if applicable)' },
];

const evaluationSections = [
  { icon: '📌', title: 'Check Points', items: ['3 check points during the academic year', 'Each paper comprises 25 marks'] },
  { icon: '❄️', title: 'Winter Task', items: ['Third check point in the form of a Winter Task', 'Each subject carries 25 marks'] },
  { icon: '✅', title: 'Passing Criteria', items: ['Minimum 60% required in each subject to pass'] },
  { icon: '⚠️', title: 'Important Rules', items: ['Attending every exam is compulsory', 'Written parental application required for absences', 'No applications accepted directly from students', 'Without sanctioned leave, retaking a paper is not allowed'] },
];

const criteria = [
  { label: 'Attendance (80% required)', pct: 80 },
  { label: 'First Check Point', pct: 10 },
  { label: 'Second Check Point', pct: 10 },
  { label: 'Winter Task', pct: 10 },
  { label: 'Pre-Sendups', pct: 20 },
  { label: 'Sendups (Final)', pct: 50 },
];

export default function Admissions() {
  const [openProgram, setOpenProgram] = useState(null);
  const [openEval, setOpenEval] = useState(null);

  return (
    <>
      <style>{css}</style>
      <div className="adm">

        {/* HERO */}
        <div className="adm-hero">
          <div className="adm-hero-inner">
            <div className="adm-hero-label">Academic Year 2025–26</div>
            <h1>Admissions <span>Open</span></h1>
            <p className="adm-hero-sub">
              Begin your journey at Dr. A.Q. Khan College — where science, technology, and character building come together to shape Pakistan's future leaders.
            </p>
            <a href={`${process.env.PUBLIC_URL}/form.pdf`} target="_blank" rel="noopener noreferrer" className="adm-btn-gold">
              📄 Download Admission Form
            </a>
          </div>
        </div>

        {/* BODY */}
        <div className="adm-body">

          {/* Programs */}
          <div className="adm-section">
            <div className="adm-sec-label">Courses</div>
            <h2 className="adm-sec-title">Offered Programs</h2>
            <div className="adm-programs">
              {programs.map((p, i) => (
                <div key={i} className={`adm-program-card${openProgram === i ? ' open' : ''}`}>
                  <div className="adm-program-header" onClick={() => setOpenProgram(openProgram === i ? null : i)}>
                    <div className="adm-program-left">
                      <div className="adm-program-icon">{p.icon}</div>
                      <div className="adm-program-name">{p.name}</div>
                    </div>
                    <div className="adm-program-toggle">+</div>
                  </div>
                  {openProgram === i && (
                    <div className="adm-program-body">
                      {p.details.map((d, j) => (
                        <div key={j} className="adm-program-detail">{d}</div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Documents + Evaluation side-by-side */}
          <div className="adm-two-col adm-section">
            {/* Documents */}
            <div>
              <div className="adm-sec-label">Requirements</div>
              <h2 className="adm-sec-title">Required Documents</h2>
              <div className="adm-docs-grid">
                {documents.map((d, i) => (
                  <div key={i} className="adm-doc-card">
                    <div className="adm-doc-icon">{d.icon}</div>
                    <div className="adm-doc-text">{d.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation */}
            <div>
              <div className="adm-sec-label">Exam System</div>
              <h2 className="adm-sec-title">Evaluation Method</h2>
              <div className="adm-eval-grid">
                {evaluationSections.map((sec, i) => (
                  <div key={i} className={`adm-program-card${openEval === i ? ' open' : ''}`}>
                    <div className="adm-program-header" onClick={() => setOpenEval(openEval === i ? null : i)}>
                      <div className="adm-program-left">
                        <div className="adm-program-icon">{sec.icon}</div>
                        <div className="adm-program-name">{sec.title}</div>
                      </div>
                      <div className="adm-program-toggle">+</div>
                    </div>
                    {openEval === i && (
                      <div className="adm-program-body">
                        {sec.items.map((item, j) => (
                          <div key={j} className="adm-program-detail">{item}</div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Criteria */}
          <div className="adm-section">
            <div className="adm-sec-label">Eligibility</div>
            <h2 className="adm-sec-title">Regular Admission Criteria <span style={{ fontSize: 16, fontWeight: 400, color: 'var(--gray)' }}>(Single Fee)</span></h2>
            <div className="adm-criteria">
              {criteria.map((c, i) => (
                <div key={i} className="adm-criterion">
                  <div className="adm-criterion-top">
                    <span className="adm-criterion-label">{c.label}</span>
                    <span className="adm-criterion-pct">{c.pct}%</span>
                  </div>
                  <div className="adm-bar-track">
                    <div className="adm-bar-fill" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: '12px 16px', background: 'rgba(201,168,76,0.1)', borderRadius: 10, fontSize: 14, color: 'var(--navy)', fontWeight: 600 }}>
                ✅ 60% aggregated marks required across all components
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="adm-cta">
            <div className="adm-cta-text">
              <div className="adm-cta-title">Ready to Apply?</div>
              <div className="adm-cta-sub">Download the form, fill it out, and bring your documents to campus.</div>
            </div>
            <div className="adm-cta-action" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={`${process.env.PUBLIC_URL}/form.pdf`} target="_blank" rel="noopener noreferrer" className="adm-btn-gold">
                📄 Admission Form
              </a>
              <Link to="/contact" style={{ display:'inline-flex', alignItems:'center', gap:8, border:'2px solid rgba(255,255,255,0.3)', color:'#fff', padding:'14px 28px', borderRadius:'100px', fontWeight:600, fontSize:15, textDecoration:'none', transition:'border-color .2s', fontFamily:"'DM Sans',sans-serif" }}
                onMouseOver={e => e.currentTarget.style.borderColor='#C9A84C'}
                onMouseOut={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.3)'}
              >
                📞 Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}