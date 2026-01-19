import React from 'react'
import { getRSSFeed } from '@/components/js/getRSSFeeds';
import Head from 'next/head';


export default async function RSSFeeds() {
    const items = await getRSSFeed('https://dailycaring.com/feed/');
  return (
    <div className="blog-contents">
        <Head>
          <title>Elderly News | Daily Updates</title>
        </Head>

        <main className="p-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Latest Elderly Care Articles</h1>

          {items.length === 0 ? (
            <p>No news found. Please try again later.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-all p-5 flex flex-col justify-between" data-aos="fade-down">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-700 hover:underline mb-2">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h2>
                    <p className="text-sm text-gray-500 mb-3">
                      {new Date(item.pubDate!).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700">{item.contentSnippet}</p>
                  </div>
                  <div className="mt-4">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
  )
}
