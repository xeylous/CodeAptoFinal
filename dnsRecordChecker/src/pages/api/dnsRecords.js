// pages/api/dns.js
import dns from 'dns/promises';

const dnsResolvers = {
  A: dns.resolve4,
  AAAA: dns.resolve6,
  MX: dns.resolveMx,
  NS: dns.resolveNs,
  TXT: dns.resolveTxt,
  SOA: dns.resolveSoa,
};

const resolveDnsRecord = async (type, domain) => {
  const resolver = dnsResolvers[type];
  if (!resolver) {
    return { type, records: "Not available", error: `No resolver function for DNS record type: ${type}` };
  }

  try {
    const records = await resolver(domain);
    return { type, records: records.length ? records : "Not available" };
  } catch (err) {
    if (err.code === 'ENODATA' || err.code === 'ENOTFOUND') {
      return { type, records: "Not available", error: `${type} record not found for ${domain}` };
    }
    return { type, records: "Not available", error: err.message };
  }
};

const getAllDnsRecords = async (domain) => {
  const recordTypes = ['A', 'AAAA', 'MX', 'NS', 'TXT', 'SOA'];
  const results = await Promise.all(
    recordTypes.map((type) => resolveDnsRecord(type, domain))
  );
  return results;
};

export default async function handler(req, res) {
  const { domain } = req.query;

  if (!domain) {
    return res.status(400).json({ error: 'Domain parameter is required' });
  }

  try {
    const records = await getAllDnsRecords(domain);
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching DNS records' });
  }
}