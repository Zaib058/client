import React from 'react';

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
import img23 from './asset/image/img23.jpg';  
import img26 from './asset/image/img26.jpg'; 

const images = [
  img15, img04, img07, img06, img11, img13, img14a, img21, img23, img16,
  img26, img02, img05, img08, img03, img12, img17, img18, img19, img20,
  img09, img10
];

const GalleryEvents = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800 underline decoration-blue-500 decoration-4 underline-offset-8">
          Our Gallery & Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={img}
                alt={`gallery-${index + 1}`}
                className="h-48 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryEvents;
