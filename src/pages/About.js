import React from 'react';
import mission from './asset/image/mission.jpg';
import facilities from './asset/image/facilities.jpg';
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

const About = () => {
  const renderGallery = (title, images) => (
    <>
      <h2 className="text-blue-800 text-3xl text-center mb-6">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`${title} ${idx + 1}`} className="w-36 sm:w-40 md:w-44 lg:w-48 rounded-lg shadow-md hover:scale-105 transition-transform duration-300" />
        ))}
      </div>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      <section className="text-center mb-12">
        <h1 className="text-blue-800 text-4xl mb-4">About Dr. A.Q. Khan College of Science and Technology</h1>
        <p className="text-gray-700 text-lg">
          Dr. A.Q. Khan College of Science and Technology, located on Harley Street, Rawalpindi, 
          is a premier institution dedicated to academic excellence in science and technology.
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="flex-1">
          <h2 className="text-blue-800 text-3xl mb-2">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            To provide comprehensive education that fosters innovation, critical thinking, and lifelong learning. 
            We aim to produce graduates who contribute positively to society.
          </p>
        </div>
        <img src={mission} alt="Mission" className="w-full md:w-80 rounded-lg shadow-lg object-cover" />
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center gap-6 mb-12">
        <img src={facilities} alt="Facilities" className="w-full md:w-80 rounded-lg shadow-lg object-cover" />
        <div className="flex-1">
          <h2 className="text-blue-800 text-3xl mb-2">Facilities</h2>
          <p className="text-gray-700 text-lg">
            Equipped with state-of-the-art labs, modern classrooms, and a rich library to support students’ academic growth.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div className="flex-1">
          <h2 className="text-blue-800 text-3xl mb-2">Our Faculty</h2>
          <p className="text-gray-700 text-lg">
            Our faculty members are industry experts, passionate about mentoring and empowering students in their academic journeys.
          </p>
        </div>
        <img src={faculty} alt="Faculty" className="w-full md:w-80 rounded-lg shadow-lg object-cover" />
      </section>

      <section className="mb-12">
        {renderGallery("Career Counseling Sessions", [img02, img03, img04, img05])}
        {renderGallery("Trips For Students", [img06, img07, img08, img09])}
        {renderGallery("Iqbal Day Ceremony", [img10, img11, img12, img13])}
        {renderGallery("Parents Teacher Meeting", [img14a, img15, img16, img17])}
        {renderGallery("Football Champion League", [img18, img19, img20, img21])}
        {renderGallery("Orientation Sessions", [img22, img23, img24, img25])}
      </section>

      <section className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-lg">
        <img src={joinUs} alt="Join Us" className="w-full md:w-80 rounded-lg shadow-lg object-cover" />
        <div className="flex-1">
          <h2 className="text-blue-800 text-3xl mb-2">Join Us</h2>
          <p className="text-blue-600 text-lg">
            Become a part of our academic community and embark on a journey of discovery and innovation. 
            We are committed to your success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
