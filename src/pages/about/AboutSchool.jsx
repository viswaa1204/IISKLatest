import React from 'react';
import Header from '../../components/Header';

const AboutSchool = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-navy mb-6">About School</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">
          The International Indian School Al-Khafji (IISK), was founded on June 02, 2005. The School aims at providing education on a no-profit, no-loss basis and the educational facilities at the Pre-primary, Primary, Middle level, primarily to the Indian citizens.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">Our Facilities</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Modern classrooms with digital learning tools</li>
              <li>Well-equipped science and computer laboratories</li>
              <li>Library with extensive collection of books</li>
              <li>Sports facilities for various indoor and outdoor games</li>
              <li>Art and music rooms for creative expression</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-royal-blue mb-4">Our Achievements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Consistent academic excellence in CBSE examinations</li>
              <li>Recognition in inter-school competitions</li>
              <li>Active participation in community service initiatives</li>
              <li>Promotion of cultural diversity and global citizenship</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;