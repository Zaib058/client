import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');
  :root { --navy:#0A1931; --blue:#1A3A6E; --gold:#C9A84C; --gold-lt:#E8C97A; --light:#F7F9FC; --gray:#6B7A99; --gray-lt:#EEF2F8; }
  .ct * { box-sizing: border-box; }
  .ct { font-family: 'DM Sans', sans-serif; background: var(--light); color: var(--navy); min-height: 100vh; }

  /* HERO */
  .ct-hero {
    background: linear-gradient(135deg, var(--navy) 0%, #112550 100%);
    padding: 80px 40px 110px;
    position: relative; overflow: hidden;
    text-align: center;
  }
  .ct-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px);
    background-size: 56px 56px;
  }
  .ct-hero::after {
    content: '';
    position: absolute; bottom:-2px; left:0; right:0;
    height: 60px; background: var(--light);
    clip-path: ellipse(55% 100% at 50% 100%);
  }
  .ct-hero-inner { position: relative; z-index: 1; }
  .ct-hero-label {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
    justify-content: center;
  }
  .ct-hero-label::before { content:''; width:24px; height:2px; background:var(--gold); }
  .ct-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 58px); font-weight: 900;
    color: #fff; margin-bottom: 14px; line-height: 1.1;
  }
  .ct-hero h1 span { color: var(--gold); }
  .ct-hero-sub { font-size: 17px; color: rgba(255,255,255,0.6); max-width: 480px; margin: 0 auto; line-height: 1.7; }

  /* QUICK INFO CARDS */
  .ct-info-strip {
    max-width: 1100px; margin: 0 auto;
    padding: 0 40px; margin-top: -36px;
    position: relative; z-index: 2;
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  @media (max-width: 768px) { .ct-info-strip { grid-template-columns: 1fr; padding: 0 20px; } }
  .ct-info-card {
    background: #fff; border-radius: 16px;
    padding: 28px 24px;
    box-shadow: 0 8px 40px rgba(10,25,49,0.1);
    display: flex; align-items: flex-start; gap: 18px;
    border-bottom: 3px solid transparent;
    transition: border-color .2s, transform .2s;
  }
  .ct-info-card:hover { border-color: var(--gold); transform: translateY(-4px); }
  .ct-info-icon {
    width: 52px; height: 52px; flex-shrink: 0;
    background: linear-gradient(135deg, var(--navy), var(--blue));
    border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
  }
  .ct-info-title { font-family:'Playfair Display',serif; font-size: 16px; font-weight: 700; color: var(--navy); margin-bottom: 4px; }
  .ct-info-value { font-size: 14px; color: var(--gray); line-height: 1.5; }
  .ct-info-value a { color: var(--blue); text-decoration: none; }
  .ct-info-value a:hover { color: var(--gold); }

  /* MAIN BODY */
  .ct-body { max-width: 1100px; margin: 0 auto; padding: 60px 40px 100px; }
  @media (max-width: 768px) { .ct-body { padding: 40px 20px 80px; } }
  .ct-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 56px;
  }
  @media (max-width: 900px) { .ct-grid { grid-template-columns: 1fr; } }

  /* SEC LABEL */
  .ct-sec-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; font-weight: 600; letter-spacing: 3px;
    text-transform: uppercase; color: var(--gold); margin-bottom: 8px;
  }
  .ct-sec-label::before { content:''; width:20px; height:2px; background:var(--gold); }
  .ct-sec-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(22px, 3vw, 30px); font-weight: 700;
    color: var(--navy); margin-bottom: 24px;
  }

  /* FORM */
  .ct-form-wrap { background: #fff; border-radius: 20px; padding: 40px; box-shadow: 0 4px 32px rgba(10,25,49,0.07); }
  .ct-field { margin-bottom: 20px; }
  .ct-label { display: block; font-size: 13px; font-weight: 600; color: var(--navy); margin-bottom: 6px; letter-spacing: 0.3px; }
  .ct-input, .ct-textarea {
    width: 100%; padding: 13px 16px;
    border: 1.5px solid var(--gray-lt);
    border-radius: 10px;
    font-size: 14px; font-family: 'DM Sans', sans-serif;
    color: var(--navy); background: var(--light);
    transition: border-color .2s, box-shadow .2s;
    outline: none;
  }
  .ct-input:focus, .ct-textarea:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(201,168,76,0.15);
    background: #fff;
  }
  .ct-textarea { resize: vertical; min-height: 130px; }
  .ct-submit {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--navy); color: #fff;
    font-weight: 700; font-size: 15px;
    padding: 15px 36px; border-radius: 100px;
    border: none; cursor: pointer;
    transition: background .2s, transform .2s;
    font-family: 'DM Sans', sans-serif;
  }
  .ct-submit:hover { background: var(--blue); transform: translateY(-2px); }

  /* MAP */
  .ct-map-wrap { border-radius: 20px; overflow: hidden; box-shadow: 0 4px 32px rgba(10,25,49,0.1); height: 100%; min-height: 360px; }
  .ct-map-wrap iframe { width: 100%; height: 100%; min-height: 360px; display: block; border: none; }

  /* HOURS */
  .ct-hours {
    background: linear-gradient(135deg, var(--navy), #112550);
    border-radius: 20px; padding: 40px;
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;
    margin-bottom: 56px;
  }
  @media (max-width: 768px) { .ct-hours { grid-template-columns: 1fr; } }
  .ct-hour-item { text-align: center; }
  .ct-hour-day { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 8px; }
  .ct-hour-time { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: #fff; }
  .ct-hour-status { font-size: 12px; color: rgba(255,255,255,0.45); margin-top: 4px; }
`;

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "cf26476a-73fa-42fc-ac54-9de6906e4a3d");
    const json = JSON.stringify(Object.fromEntries(formData));
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json,
    }).then(r => r.json());
    setLoading(false);
    if (res.success) {
      Swal.fire({ title: "Message Sent!", text: "We'll get back to you soon.", icon: "success", confirmButtonColor: "#C9A84C" });
      event.target.reset();
    }
  };

  return (
    <>
      <style>{css}</style>
      <div className="ct">

        {/* HERO */}
        <div className="ct-hero">
          <div className="ct-hero-inner">
            <div className="ct-hero-label">Get in Touch</div>
            <h1>We'd Love to <span>Hear</span> From You</h1>
            <p className="ct-hero-sub">
              Have a question about admissions, programs, or campus life? Reach out and our team will be happy to help.
            </p>
          </div>
        </div>

        {/* INFO STRIP */}
        <div className="ct-info-strip">
          <div className="ct-info-card">
            <div className="ct-info-icon">📞</div>
            <div>
              <div className="ct-info-title">Call Us</div>
              <div className="ct-info-value"><a href="tel:+923453300699">+92 345 3300699</a></div>
              <div className="ct-info-value" style={{ marginTop: 2 }}>Mon–Sat during office hours</div>
            </div>
          </div>
          <div className="ct-info-card">
            <div className="ct-info-icon">✉️</div>
            <div>
              <div className="ct-info-title">Email Us</div>
              <div className="ct-info-value"><a href="mailto:aqkhanedu@gmail.com">aqkhanedu@gmail.com</a></div>
              <div className="ct-info-value" style={{ marginTop: 2 }}>We reply within 24 hours</div>
            </div>
          </div>
          <div className="ct-info-card">
            <div className="ct-info-icon">📍</div>
            <div>
              <div className="ct-info-title">Visit Us</div>
              <div className="ct-info-value">3 Harley Street, Rawalpindi</div>
              <div className="ct-info-value" style={{ marginTop: 2 }}>Punjab, Pakistan</div>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="ct-body">

          {/* Form + Map */}
          <div className="ct-grid">
            <div>
              <div className="ct-sec-label">Send a Message</div>
              <h2 className="ct-sec-title">Contact Form</h2>
              <div className="ct-form-wrap">
                <form onSubmit={onSubmit}>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="name">Full Name</label>
                    <input className="ct-input" type="text" id="name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="email">Email Address</label>
                    <input className="ct-input" type="email" id="email" name="email" placeholder="your@email.com" required />
                  </div>
                  <div className="ct-field">
                    <label className="ct-label" htmlFor="message">Message</label>
                    <textarea className="ct-textarea" id="message" name="message" placeholder="How can we help you?" required />
                  </div>
                  <button type="submit" className="ct-submit" disabled={loading}>
                    {loading ? '⏳ Sending...' : '✉️ Send Message'}
                  </button>
                </form>
              </div>
            </div>

            <div>
              <div className="ct-sec-label">Find Us</div>
              <h2 className="ct-sec-title">Our Location</h2>
              <div className="ct-map-wrap">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&height=500&hl=en&q=3%20Harley%20Street,%20Rawalpindi,%20Pakistan+(Dr%20AQ%20Khan%20College%20)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  title="Google Maps — Dr AQ Khan College"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="ct-sec-label">Opening Hours</div>
          <h2 className="ct-sec-title">When We're Available</h2>
          <div className="ct-hours">
            <div className="ct-hour-item">
              <div className="ct-hour-day">Monday – Friday</div>
              <div className="ct-hour-time">8:00 am – 4:00 pm</div>
              <div className="ct-hour-status">Office & Admissions open</div>
            </div>
            <div className="ct-hour-item">
              <div className="ct-hour-day">Saturday</div>
              <div className="ct-hour-time">9:00 am – 1:00 pm</div>
              <div className="ct-hour-status">Limited services</div>
            </div>
            <div className="ct-hour-item">
              <div className="ct-hour-day">Sunday</div>
              <div className="ct-hour-time">Closed</div>
              <div className="ct-hour-status">Public holiday</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}