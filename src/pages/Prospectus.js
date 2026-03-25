import React from 'react';

const Prospectus = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50 py-10 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6 underline underline-offset-4 decoration-blue-500">
          College Prospectus
        </h1>

        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 mb-6">
          <iframe
            src="https://online.fliphtml5.com/ckjsc/qvqt/#p=1"
            frameBorder="0"
            width="100%"
            height="500px"
            title="Online Prospectus"
            className="w-full sm:h-[600px] md:h-[700px] lg:h-[800px]"
          ></iframe>
        </div>

        <div className="mt-4">
          <a
            href="https://online.fliphtml5.com/ckjsc/qvqt/#p=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white text-sm sm:text-base px-5 py-2.5 rounded shadow hover:bg-blue-700 transition duration-300"
          >
            Open Fullscreen Prospectus
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prospectus;
