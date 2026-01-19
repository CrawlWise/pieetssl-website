import React from 'react';
import { getRSSFeed } from '../js/getRSSFeeds';
import HomeRSSFeeds from './HomeRSSFeeds';

interface rssFeedsType {
  title: string;
  link: string;
}

export default async function HomeRSSFeedsServer() {
  const rawItems = await getRSSFeed('https://dailycaring.com/feed/');
  const items: rssFeedsType[] = rawItems
    .filter((item) => item.title && item.link)
    .map((item) => ({
      title: item.title as string,
      link: item.link as string,
    }));


  return (
    <div>
      <HomeRSSFeeds rssFeeds={items} />
    </div>
  );
}
