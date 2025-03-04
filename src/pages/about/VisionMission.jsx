import React from 'react';

const VisionMission = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-navy mb-6">Our Vision & Mission</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-royal-blue mb-4">Vision</h2>
          <p className="text-gray-700">
            A vision to build and win the world of success.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-royal-blue mb-4">Mission</h2>
          <p className="text-gray-700">
            Our mission is to provide a superior higher studies preparation and liberal art education opportunities to young people of cultural and intellectual diversity. IISK is a school which provides equal opportunities within a dignified and supportive setting, promotes the academic, artistic, moral character, as well as leadership qualities, along with physical and emotional development of all students, so that they can pursue excellence in their lives and career, and play effective roles in their families and communities.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-semibold text-royal-blue mb-4">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-navy mb-2">Excellence</h3>
            <p className="text-gray-700">Striving for the highest standards in academic and personal development.</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-navy mb-2">Integrity</h3>
            <p className="text-gray-700">Upholding honesty, ethics, and moral principles in all actions.</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-navy mb-2">Respect</h3>
            <p className="text-gray-700">Valuing diversity and treating everyone with dignity and consideration.</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-navy mb-2">Innovation</h3>
            <p className="text-gray-700">Encouraging creative thinking and problem-solving approaches.</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-navy mb-2">Responsibility</h3>
            <p className="text-gray-700">Taking ownership of actions and contributing positively to society.</p>
          </div>
          <div className="border border-gray-200 rounded p-4">
            <h3 className="font-semibold text-navy mb-2">Collaboration</h3>
            <p className="text-gray-700">Working together to achieve common goals and foster community spirit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;