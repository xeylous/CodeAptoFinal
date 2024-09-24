'use server'
import { promises as dns } from 'dns';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({ message: 'Domain is required' });
  }

  try {
    // Perform DNS lookup to get the IP address
    const { address } = await dns.lookup(domain);

    // Get nameserver (NS) records for the domain
    const nsRecords = await dns.resolveNs(domain);

    // Perform reverse DNS lookup to get the host name (if available)
    let reverseHost = 'No reverse DNS found';
    try {
      const hostnames = await dns.reverse(address);
      reverseHost = hostnames[0] || reverseHost;
    } catch (reverseError) {
      // Ignore if reverse DNS fails
    }

    // Send the gathered data as a response
    res.status(200).json({
      ip: address,
      nameservers: nsRecords,
      reverse_dns: reverseHost,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching DNS information', error: error.message });
  }
}