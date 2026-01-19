import React from 'react'
import HomeRSSSectionFeeds from './HomeRSSSectionFeeds'
import { getRSSFeed } from '../js/getRSSFeeds';

interface rssFeedsType {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
}

export default async function HomeRSSSectionFeedsServer() {
  const rawItems = await getRSSFeed('https://dailycaring.com/feed/');
  const items: rssFeedsType[] = rawItems
    .filter((item) => item.title && item.link && item.pubDate && item.contentSnippet)
    .map((item) => ({
      title: item.title as string,
      link: item.link as string,
      pubDate: item.pubDate as string,
      contentSnippet: item.contentSnippet as string,
    }));

  return (
    <div>
      <HomeRSSSectionFeeds rssFeeds={items} />
    </div>
  );
}
