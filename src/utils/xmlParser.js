import { xml2js } from 'xml-js';

export const parseXML = async (filePath) => {
  try {
    const response = await fetch(filePath);
    const xmlData = await response.text();
    const result = xml2js(xmlData, { compact: true, spaces: 2 });
    return result;
  } catch (error) {
    console.error('Error parsing XML:', error);
    return null;
  }
};