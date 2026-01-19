// app/elderly-news/page.js
import React from 'react';
import Banners from '@/components/BannerInfo/Banners';
import RSSFeeds from '@/components/RSSFeeds/RSSFeeds';
import { blogBanner } from '@/site-contents/blog/blog';

export default async function Page() {
  return (
    <section className="main-blog-page">
      <div className="banner">
        <Banners title={blogBanner.title} bgImg={blogBanner.img} />
      </div>

      <div className="rss">
        <RSSFeeds/>
      </div>
      
    </section>
  );
}
