import { speakerNotes } from './speakerNotes.js';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const configuredPassword = process.env.NOTES_PASSWORD;

  if (!configuredPassword) {
    return res.status(500).json({ error: 'Speaker notes password is not configured.' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};

  if (body.password !== configuredPassword) {
    return res.status(401).json({ error: 'Invalid password.' });
  }

  return res.status(200).json({ notes: speakerNotes });
}
