'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Swiper as SwiperType } from 'swiper';

interface rssType {
  rssFeeds: {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet: string;
  }[];
}

export default function HomeRSSSectionFeeds({ rssFeeds }: rssType) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="blog-contents w-full">
      <main className="max-w-7xl mx-auto">
        {!rssFeeds || rssFeeds.length === 0 ? (
          <p>No news found. Please try again later.</p>
        ) : (
          <div
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {rssFeeds.map((item) => (
                <SwiperSlide key={item.link}>
                  <div className="h-full bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-[1.02] flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-blue-700 hover:underline mb-2">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </h2>
                      <p className="text-xs text-gray-500 mb-2">
                        {new Date(item.pubDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-700 line-clamp-3">{item.contentSnippet}</p>
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
                </SwiperSlide>

              ))}
            </Swiper>
          </div>
        )}
      </main>
    </div>
  );
}
