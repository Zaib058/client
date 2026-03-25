
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog } from '@headlessui/react';

import logo     from './asset/logo.jpg';
import heroImg1 from './asset/image/hero1.jpg';
import heroImg2 from './asset/image/hero2.jpg';
import heroImg3 from './asset/image/hero3.jpg';

import event1 from './asset/image/img05.jpg';
import event2 from './asset/image/img06.jpg';
import event3 from './asset/image/img08.jpg';
import event4 from './asset/image/img07.jpg';
import event5 from './asset/image/img18.jpg';
import event6 from './asset/image/img13a.jpg';

import alumni1 from './asset/image/alumni.jpg';
import alumni2 from './asset/image/alumni.jpg';
import alumni3 from './asset/image/alumni.jpg';
import alumni4 from './asset/image/alumni4.jpg';

const heroContent = [
  { heading: 'Our Mission',  text: 'We foster innovation and critical thinking.',                                  image: heroImg1 },
  { heading: 'Our Vision',   text: 'Education that empowers individuals to achieve their dreams.',                image: heroImg2 },
  { heading: 'Director’s Message', text: 'Education is the foundation of progress in the modern world.',          image: heroImg3 }
];

const facultyData = [
  { id: 1, name: 'Dr Rimsha Latif', title: 'Professor of Biology',       image: 'https://via.placeholder.com/600', details: '20+ years of research in molecular biology, published widely, and department head.' },
  { id: 2, name: 'Dr Humair Ali',   title: 'Professor of Chemistry',     image: 'https://via.placeholder.com/600', details: 'Award‑winning chemist specialising in organic synthesis, mentoring senior projects.' },
  { id: 3, name: 'Prof Sikander Abbass',  title: 'Professor of Physics',       image: 'https://via.placeholder.com/600', details: 'Quantum‑mechanics PhD making complex ideas accessible, guiding science‑fair winners.' },
  { id: 4, name: 'Prof Haseeb ', title: 'Professor of Mathematics',   image: 'https://via.placeholder.com/600', details: 'Transforms abstract maths into fun; coach of the national Olympiad team.' },
  { id: 5, name: 'Prof Taimur ', title: 'Professor of Comp. Science', image: 'https://via.placeholder.com/600', details: 'AI & ML expert integrating real‑world tech problems into every class project.' },
  { id: 6, name: 'Prof Arslan Sabir',  title: 'Professor of English',       image: 'https://via.placeholder.com/600', details: 'Brings Shakespeare to life and coaches public‑speaking champions.' }
];

const alumniData = [
  { name: 'Hussnain',      quote: '…transformed me into a confident young man…', full: '…capable of taking up challenges and overcoming obstacles.', img: alumni1 },
  { name: 'Ahsan',         quote: 'I owe my success to the diligent staff…',     full: '…whose supportive environment allowed me to excel.',        img: alumni2 },
  { name: 'Taskeen Zahra', quote: 'The education here is second to none…',        full: '…preparing you academically and teaching crucial life skills.', img: alumni3 },
  { name: 'Abdul Rafay',   quote: 'The Girls Campus shaped my future…',           full: '…with excellent faculty and a nurturing atmosphere.',     img: alumni4 }
];

const events = [
  { img: event1, title: 'Parents‑Teacher Meeting', desc: 'Career‑counselling sessions.' },
  { img: event2, title: 'Outdoor Trip',            desc: 'Exciting day out for Boys Campus.' },
  { img: event3, title: 'Educational Trip',        desc: 'Visit to IST University for Girls Campus.' },
  { img: event4, title: 'Visit to Liaqat Bagh',     desc: 'Historical excursion for all grades.' },
  { img: event5, title: 'Sports Gala',             desc: 'Inter‑campus sporting extravaganza.' },
  { img: event6, title: 'Celebrating Iqbal Day',    desc: 'Tribute to the national poet.' }
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSlide((p) => (p + 1) % heroContent.length), 5000);
    return () => clearInterval(id);
  }, []);

  const [count, setCount] = useState({ students: 0, programs: 0, faculty: 0, awards: 0 });
  useEffect(() => {
    const id = setInterval(() => setCount((p) => ({
      students: Math.min(p.students + 1, 500),
      programs: Math.min(p.programs + 1, 10),
      faculty:  Math.min(p.faculty  + 1, 30),
      awards:   Math.min(p.awards   + 1, 15)
    })), 25);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="font-sans bg-gray-100">
      {/* ── Navbar ── */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src={logo} alt="logo" className="h-10 sm:h-12" />
          <ul className="flex gap-6 text-sm font-medium">
            <li><a className="hover:text-blue-600" href="/">Home</a></li>
            <li><a className="hover:text-blue-600" href="/about">About</a></li>
            <li><a className="hover:text-blue-600" href="#events">Events</a></li>
            <li><a className="hover:text-blue-600" href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ── Top part ── */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide}
              src={heroContent[slide].image}
              alt="Hero"
              className="w-full h-full object-contain sm:object-contain object-center"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-white text-center px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            {heroContent[slide].heading}
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg drop-shadow">
            {heroContent[slide].text}
          </p>
        </div>
      </section>

      {/* ── Numbers rotating ── */}
      <section className="py-14 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {Object.entries(count).map(([k, v]) => (
            <div key={k} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-extrabold text-blue-600">{v}</h3>
              <p className="capitalize text-gray-600 mt-1">{k}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Faculty ── */}
      <FacultySection />

      {/* ── Alumni ── */}
      <section className="py-14 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Alumni</h2>
        <p className="text-center max-w-lg mx-auto mb-10 text-gray-600">
          See what our alumni have to say about their experience at Dr A.Q. Khan College.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {alumniData.map((al, i) => <AlumniCard key={i} {...al} />)}
        </div>
      </section>

      {/* ── Events ── */}
      <section id="events" className="py-14 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Programs & Events</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {events.map((ev, i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden">
              <img src={ev.img} alt={ev.title} className="w-full h-48 object-contain sm:object-cover object-center bg-gray-200" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{ev.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{ev.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-800 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold tracking-wide text-white">Dr A.Q. Khan College System</h3>
          <p className="mt-2 text-gray-400">Shaping the future through excellence in education.</p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <a className="hover:text-blue-400" href="https://www.facebook.com/aqkhancollegeharleycampus/">Facebook</a>
            <a className="hover:text-blue-400" href="#">Twitter</a>
            <a className="hover:text-blue-400" href="#">LinkedIn</a>
          </div>
          <p className="mt-4 text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Dr A.Q. Khan College. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ───────── Faculty Section ───────── */
function FacultySection() {
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;
    const id = setInterval(() => setIdx((p) => (p + 1) % facultyData.length), 3000);
    return () => clearInterval(id);
  }, [pause]);

  /* 1 card on mobile, 2 on md, 3 on lg */
  const visibleCount = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const visible = Array.from({ length: visibleCount }, (_, i) => facultyData[(idx + i) % facultyData.length]);

  return (
    <section className="py-14 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Qualified Faculty</h2>
      <div className="flex justify-center gap-6 flex-wrap max-w-6xl mx-auto">
        {visible.map((f, i) => (
          <motion.div
            key={f.id}
            whileHover={{ scale: 1.04 }}
            className="p-4 w-72 sm:w-64 bg-white rounded-2xl shadow-lg cursor-pointer border-4 border-transparent hover:border-blue-500 transition"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            onClick={() => setSelected(f)}
          >
            <img src={f.image} alt={f.name} className="w-full h-56 object-contain sm:object-cover object-center bg-gray-200 rounded-xl mb-4" />
            <h3 className="text-lg font-semibold text-blue-800">{f.name}</h3>
            <p className="text-sm text-gray-600">{f.title}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <Dialog open={true} onClose={() => setSelected(null)} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative z-10"
            >
              <img src={selected.image} alt={selected.name} className="w-full h-64 object-contain bg-gray-200 rounded-xl mb-4" />
              <h4 className="text-2xl font-bold text-blue-800 mb-1">{selected.name}</h4>
              <p className="text-sm text-gray-700 font-medium mb-3">{selected.title}</p>
              <p className="text-gray-600 leading-relaxed">{selected.details}</p>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-300 hover:text-blue-600"
              >
                &times;
              </button>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ───────── Alumni Card ───────── */
function AlumniCard({ name, quote, full, img }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden text-center">
      <img src={img} alt={name} className="w-full h-48 object-contain sm:object-cover object-center bg-gray-200" />
      <div className="p-5">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-gray-600 mt-2">
          {open ? full : `${quote.slice(0, 80)}…`}
        </p>
        <button
          onClick={() => setOpen((o) => !o)}
          className="mt-3 text-blue-600 hover:underline text-sm"
        >
          {open ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}
