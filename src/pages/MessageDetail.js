import React from "react";
import { useLocation } from "react-router-dom";

const MessageDetail = () => {
  const { state } = useLocation();

  if (!state) return <div className="p-10 text-center">No data found</div>;

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={state.image}
            alt={state.title}
            className="w-64 md:w-80 rounded-xl shadow-md"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {state.title}
          </h2>

          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            {state.full}
          </p>
        </div>

      </div>

    </section>
  );
};

export default MessageDetail;