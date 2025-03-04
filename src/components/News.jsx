import React, { useEffect, useState } from 'react';
import { convert } from 'xml-js';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // In a real application, this would fetch from an XML file
    const mockXmlData = `
      <news>
        <item>
          <title>Annual Sports Meet Announced</title>
          <description>The annual sports meet will be held on April 10-12, 2025. Students are encouraged to register for various events.</description>
          <date>January 15, 2025</date>
        </item>
        <item>
          <title>Science Exhibition Winners</title>
          <description>Congratulations to all the winners of the Inter-School Science Exhibition. Our school secured the first position.</description>
          <date>January 10, 2025</date>
        </item>
        <item>
          <title>Parent-Teacher Meeting</title>
          <description>The next parent-teacher meeting is scheduled for February 5, 2025. All parents are requested to attend.</description>
          <date>January 8, 2025</date>
        </item>
        <item>
          <title>New Library Books</title>
          <description>The school library has been updated with new books across various subjects and fiction categories.</description>
          <date>January 5, 2025</date>
        </item>
      </news>
    `;

    try {
      const result = convert.xml2js(mockXmlData, { compact: true });
      setNews(result.news.item);
    } catch (error) {
      console.error('Error parsing XML:', error);
    }
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center">Latest News</h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-2">{item.title._text}</h3>
              <p className="text-gray-600 mb-4">{item.description._text}</p>
              <p className="text-sm text-royal-blue font-medium">{item.date._text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;