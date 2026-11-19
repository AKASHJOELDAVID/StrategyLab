const { neon } = require('@neondatabase/serverless');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.DATABASE_URL) {
    return res.status(503).json({ error: 'Database connection is not configured' });
  }

  const { action, sessionId, visitorId, authorName, commentText } = req.body ?? {};
  const project = 'reading-cinemas';
  const validId = (value) =>
    typeof value === 'string' && /^[a-zA-Z0-9_-]{1,128}$/.test(value);

  try {
    const sql = neon(process.env.DATABASE_URL);

    switch (action) {
      case 'view': {
        if (!validId(sessionId)) {
          return res.status(400).json({ error: 'Invalid session ID' });
        }
        const [row] = await sql`SELECT public.record_view(${project}, ${sessionId}) AS views`;
        return res.status(200).json(row);
      }
      case 'like': {
        if (!validId(visitorId)) {
          return res.status(400).json({ error: 'Invalid visitor ID' });
        }
        const [row] = await sql`SELECT * FROM public.toggle_like(${project}, ${visitorId})`;
        return res.status(200).json(row);
      }
      case 'share': {
        const [row] = await sql`SELECT public.record_share(${project}) AS shares`;
        return res.status(200).json(row);
      }
      case 'comment': {
        const name = typeof authorName === 'string' ? authorName.trim() : '';
        const comment = typeof commentText === 'string' ? commentText.trim() : '';
        if (name.length > 40 || !comment || comment.length > 1000) {
          return res.status(400).json({ error: 'Invalid comment or author name' });
        }
        const [row] = await sql`
          SELECT public.add_comment(${project}, ${name || 'Anonymous'}, ${comment}) AS comment_id
        `;
        return res.status(201).json(row);
      }
      default:
        return res.status(400).json({ error: 'Unknown engagement action' });
    }
  } catch {
    return res.status(500).json({ error: 'Could not save engagement activity' });
  }
};
