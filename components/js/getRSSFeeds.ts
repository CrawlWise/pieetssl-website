// lib/getRSSFeed.js
import Parser from 'rss-parser';

const parser = new Parser();

export async function getRSSFeed(feedUrl: string) {
  try {
    const feed = await parser.parseURL(feedUrl);
    return feed.items.slice(0, 12); // Limit to 10 items
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Failed to fetch RSS feed:", error.message);
    return [];
  }
}
