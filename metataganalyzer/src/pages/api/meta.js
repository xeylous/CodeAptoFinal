import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const metaData = {
      title: $('title').text(),
      description: $('meta[name="description"]').attr('content'),
      keywords: $('meta[name="keywords"]').attr('content'),
      charset: $('meta[charset]').attr('charset'),
      viewport: $('meta[name="viewport"]').attr('content'),
    };

    res.status(200).json(metaData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch meta tags' });
  }
}
