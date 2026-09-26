import type { APIRoute } from 'astro';
import { fetchLiveScoresFromESPN } from '../../utils/sports';

export const prerender = true;

export const GET: APIRoute = async () => {
  const matches = await fetchLiveScoresFromESPN();

  return new Response(
    JSON.stringify({
      matches,
      source: 'espn-realtime',
      updatedAt: new Date().toISOString()
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=120'
      }
    }
  );
};
