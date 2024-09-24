import axios from 'axios';
const cheerio = require('cheerio'); // Use require instead of import

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Fetch the HTML content of the given URL with a User-Agent header
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });


    // Ensure the response data is a string (HTML)
    const html = typeof response.data === 'string' ? response.data : response.data.toString();
    

    // Load the HTML into Cheerio for parsing
    let $;
    try {
      $ = cheerio.load(html);
    } catch (cheerioError) {
      console.error('Error loading HTML with Cheerio:', cheerioError.message);
      return res.status(500).json({ error: 'Failed to parse HTML' });
    }
    
    const ogData = {};

    // Extract Open Graph meta tags
    $('meta[property^="og:"]').each((_, element) => {
      const property = $(element).attr('property');
      const content = $(element).attr('content');
      if (property && content) {
        ogData[property] = content;
      }
    });

    // Handle case where no Open Graph data is found
    if (Object.keys(ogData).length === 0) {
      console.log('No Open Graph data found');
      return res.status(404).json({ error: 'No Open Graph data found' });
    }

    res.status(200).json(ogData);
  } catch (error) {
    console.error('Error fetching Open Graph data:', error.message);
    if (error.response && error.response.status === 403) {
      res.status(403).json({ error: 'Forbidden: Access to the URL is restricted' });
    } else {
      res.status(500).json({ error: 'Failed to fetch Open Graph data' });
    }
  }
}