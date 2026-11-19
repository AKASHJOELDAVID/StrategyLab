const { neon } = require('@neondatabase/serverless');

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.DATABASE_URL) {
    return res.status(503).json({ error: 'Database connection is not configured' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const projectKey = 'reading-cinemas';
    const [stats, comments] = await Promise.all([
      sql`
        SELECT views, likes, shares
        FROM public.engagement_stats
        WHERE project_key = ${projectKey}
      `,
      sql`
        SELECT author_name, comment_text, created_at
        FROM public.comments
        WHERE project_key = ${projectKey} AND is_hidden = false
        ORDER BY created_at ASC, id ASC
      `,
    ]);

    return res.status(200).json({
      stats: stats[0] ?? { views: 0, likes: 0, shares: 0 },
      comments,
      commentCount: comments.length,
    });
  } catch {
    return res.status(500).json({ error: 'Could not load engagement data' });
  }
};
