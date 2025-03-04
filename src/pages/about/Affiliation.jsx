import React from 'react';

const Affiliation = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-navy mb-6">Affiliation & License</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          Central Board of Secondary Education Syllabus, Under the Supervision of Saudi Ministry of Education- License No. 75 / J. P.O. Box: 207 — Al —khafji 31971-Kingdom of Saudi Arabia.
        </p>
        <p className="mb-4">
          It is licensed by the Ministry of Education, Kingdom of Saudi Arabia. License No. 75/J.
        </p>
        <p className="mb-4">
          The school will be affiliated to the Central Board of Secondary Education (CBSE), Shiksha Kendra 2, Community Center, Preet Vihar, New Delhi, India.
        </p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-royal-blue mb-4">CBSE Affiliation Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-semibold text-navy mb-2">Standardized Curriculum</h3>
              <p className="text-gray-700">
                CBSE provides a well-structured and comprehensive curriculum that ensures quality education across all affiliated schools.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-semibold text-navy mb-2">National Recognition</h3>
              <p className="text-gray-700">
                CBSE certification is recognized throughout India and in many countries worldwide, facilitating smooth transitions for students.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-semibold text-navy mb-2">Competitive Advantage</h3>
              <p className="text-gray-700">
                The CBSE curriculum prepares students for various national-level competitive examinations and entrance tests.
              </p>
            </div>
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-semibold text-navy mb-2">Holistic Development</h3>
              <p className="text-gray-700">
                CBSE emphasizes not only academic excellence but also co-curricular activities, life skills, and value education.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-navy mb-2">Ministry of Education License</h3>
          <p className="text-gray-700">
            The school operates under the supervision of the Saudi Ministry of Education with License No. 75/J, ensuring compliance with local educational standards and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;