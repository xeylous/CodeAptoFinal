import fetch from 'node-fetch';
import { parse } from 'node-html-parser';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { input } = req.body;

    if (!input) {
      return res.status(400).json({ error: 'Domain URL is required.' });
    }

    try {
      // Fetch webpage content
      const response = await fetch(input);
      const html = await response.text();
      const root = parse(html);
      const textContent = root.text.toLowerCase();

      // Extract and clean words
      const words = textContent.split(/\s+/).filter(word => word.length > 1); // Filter out short words

      // Calculate word frequencies and densities
      const totalWords = words.length;
      const wordFrequencies = {};
      words.forEach(word => {
        wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
      });

      // Calculate density percentages
      const wordDensities = {};
      Object.keys(wordFrequencies).forEach(word => {
        wordDensities[word] = (wordFrequencies[word] / totalWords) * 100;
      });

      return res.status(200).json({ result: { frequencies: wordFrequencies, densities: wordDensities } });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to fetch domain content.' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed.' });
  }
}