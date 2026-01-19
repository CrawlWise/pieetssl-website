'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface rssType {
  rssFeeds: { title: string; link: string }[];
}

export default function HomeRSSFeeds({ rssFeeds }: rssType) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null); // or use Swiper type if available

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
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {rssFeeds.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="transition-all flex flex-col justify-between">
                    <div className="img"></div>
                    <div>
                      <h2 className="lg:text-md md:text-md text-sm text-blue-700 hover:underline">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </h2>
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
