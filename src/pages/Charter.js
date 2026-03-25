import React from "react";

// IST images
import img1 from './asset/image/img1.jpg';
import img2 from './asset/image/img2.jpg';
import img3 from './asset/image/img3.jpg';
import img4 from './asset/image/img4.jpg';
import img5 from './asset/image/img5.jpg';
import img6 from './asset/image/img6.jpg';
import img7 from './asset/image/img7.jpg';
import img8 from './asset/image/img8.jpg';

// Riphah images
import img9 from './asset/image/img9.jpg';
import img10 from './asset/image/img10.jpg';
import img11 from './asset/image/img11.jpg';
import img12 from './asset/image/img12.jpg';
import img13 from './asset/image/img13.jpg';
import img14 from './asset/image/img14.jpg';

const Charter = () => {
  return (
    <div className="bg-[#f3f8fc] text-dark-blue min-h-screen px-4 md:px-20 py-12">
      
      <section className="mb-20">
        <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-sm">
          🤝 MOU with IST University
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
          To support student success, Dr. A Q Khan College has signed a Memorandum of Understanding (MOU) with IST University. This collaboration offers better guidance, admission opportunities, and academic resources.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[img1, img2, img3, img4, img5, img6, img7, img8].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`IST MOU Image ${idx + 1}`}
              className="rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 w-full h-60 object-cover"
            />
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-6 drop-shadow-sm">
          🎓 Collaboration with Riphah International University
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
          We're proud to announce a formal partnership with Riphah International University! Students from Dr. A Q Khan College can now benefit from merit and need-based scholarships under this MOU. Exceptional students with 80%+ marks in HSSC are eligible for fully funded scholarships!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[img9, img10, img11, img12, img13, img14].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Riphah MOU Image ${idx + 1}`}
              className="rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 w-full h-60 object-cover"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t pt-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-gray-700">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-dark-blue">Dr. A Q Khan College</h3>
            <p className="text-sm mt-1">Empowering minds, shaping futures.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/admissions" className="hover:text-blue-600 transition">Admissions</a>
            <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6 mb-2">&copy; {new Date().getFullYear()} Dr. A Q Khan College. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Charter;
