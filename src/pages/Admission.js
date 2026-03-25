import React, { useState } from 'react';

const Admissions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const programs = [
    { name: 'FSC. Pre Medical', details: ['Biology, Chemistry & Physics'] },
    { name: 'FSC. Pre Engineering', details: ['Maths, Chemistry & Physics'] },
    {
      name: 'I.CS',
      details: ['Maths, Computer & Physics', 'Maths, Computer & Stats'],
    },
    {
      name: 'ICOM (Intermediate in Commerce)',
      details: [
        'B.Maths, Accounting, Commerce & Economics (HSSC-1)',
        'B.Stats, Accounting, Banking & Commercial Geography (HSSC-2)',
      ],
    },
    { name: 'FA (IT)', details: ['Computer Science + Civics + Psychology/Sociology'] },
    {
      name: 'FA (Humanities)',
      details: [
        'Civics + Education + Psychology',
        'Civics + Education + Sociology',
        'Civics + Education + Isl-elective',
      ],
    },
  ];

  const evaluationSections = [
    {
      title: 'Check Points',
      content: ['There will be 3 check points during study', 'Each paper will comprise of 25 Marks'],
    },
    {
      title: 'Winter Task',
      content: ['Third check point will be in the form of Winter task containing each subject of 25 marks'],
    },
    {
      title: 'Passing Criteria',
      content: ['Passing percentage is 60% in each subject'],
    },
    {
      title: 'Important Note',
      content: [
        'Attending the exam is compulsory',
        'Prior written application is required from parents if student can’t attend',
        'No applications accepted directly from students',
        'Without sanctioned leave, retaking paper is not allowed',
      ],
    },
  ];

  return (
    <div className="bg-[#f3f8fc] text-dark-blue min-h-screen px-4 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8 border-b-2 border-blue-200">
        <h1 className="text-4xl font-extrabold text-center md:text-left text-dark-blue drop-shadow-sm">Admissions 🎓</h1>
        <a
          href="/form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white font-semibold py-2 px-5 rounded shadow-md hover:bg-blue-700 transition"
        >
          Get Your Admission Form Now
        </a>
      </div>

      <section className="py-8">
        <h2 className="text-3xl font-semibold mb-6">📜 Offered Programs</h2>
        <ul className="space-y-4">
          {programs.map((program, index) => (
            <li key={index} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
              <div
                className="flex justify-between items-center font-bold cursor-pointer text-lg"
                onClick={() => toggleAccordion(index)}
              >
                ▶ {program.name}
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <ul className="mt-2 pl-5 list-disc text-sm text-gray-700">
                  {program.details.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-semibold mb-6">📄 Required Documents</h2>
        <ul className="space-y-2 pl-5 list-disc text-gray-800">
          <li>Passport size photos with blue background (03)</li>
          <li>Matric Marksheet (03 Copies)</li>
          <li>Form-B (03 Copies)</li>
          <li>NOC (if board is other than FBISE)</li>
          <li>GAP certificate (if applicable)</li>
        </ul>
      </section>

      <section className="py-8">
        <h2 className="text-3xl font-semibold mb-2">📘 Evaluation Method</h2>
        <p className="text-gray-700 mb-4">(Examination System)</p>
        <ul className="space-y-4">
          {evaluationSections.map((section, i) => (
            <li key={i} className="bg-white rounded shadow p-4 hover:shadow-lg transition">
              <div
                className="flex justify-between items-center font-bold cursor-pointer text-lg"
                onClick={() => toggleAccordion(i + 10)}
              >
                ▶ {section.title}
                <span>{activeIndex === i + 10 ? '-' : '+'}</span>
              </div>
              {activeIndex === i + 10 && (
                <ul className="mt-2 pl-5 list-disc text-sm text-gray-700">
                  {section.content.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Criteria for Regular Admission */}
      <section className="py-8">
        <h2 className="text-3xl font-semibold mb-4">📗 Criteria for Regular Admission with “Single Fee”</h2>
        <ul className="pl-5 list-disc space-y-2 text-gray-800">
          <li><strong>80% Attendance</strong> of total working days</li>
          <li>10% weightage from First Check Point</li>
          <li>10% weightage from Second Check Point</li>
          <li>10% weightage from Winter Task</li>
          <li>20% weightage from Pre-Sendups</li>
          <li>50% weightage from Sendups</li>
          <li><strong>60% aggregated marks required</strong></li>
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
