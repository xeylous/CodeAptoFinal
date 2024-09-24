import axios from 'axios';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;
    console.log("Url user entered: ", url);

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      // Fetch the page content using axios
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }
      });
      // console.log("Response: ", response);
      const pageContent = response.data;

      // Calculate the size of the page content in bytes
      const pageSizeInBytes = Buffer.byteLength(pageContent, 'utf8');
      const pageSizeInKB = pageSizeInBytes / 1024;
      const pageSizeInKBString = pageSizeInKB.toFixed(2) + 'kb';

      // Send the page size in KB as a response
      console.log(pageSizeInBytes);
      console.log(pageSizeInKBString);
      res.status(200).json({ PageSize: pageSizeInKBString, PageSizeInBytes: pageSizeInBytes });
    } catch (error) {
      // Handle errors and send an error response
      res.status(500).json({ error: 'Failed to fetch page', details: error.message });
    }
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}