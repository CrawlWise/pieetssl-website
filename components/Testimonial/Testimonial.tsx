/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';


interface testimonialProps{
  description: string,
  testimonials: any[]

}



// const testimonials = [
//   {
//     _id: 1,
//     name: 'Serena Williams',
//     title: 'American Professional Tennis Player',
//     usrImg: 'https://picsum.photos/300/302',
//     text: 'Tony Robbins helped me discover what I am really made of. With Tony’s help, I’ve set new standards for myself, and I’ve taken my tennis game—and my life—to a whole new level!',
//   },
//   {
//     _id: 2,
//     name: 'Maria Menounos',
//     title: 'Actress & TV Host',
//     usrImg: 'https://picsum.photos/300/303',
//     text: 'I feel on top of the world. I feel incredibly motivated. I feel empowered. I am the master of my own destiny.',
//   },
//   {
//     _id: 3,
//     name: 'Marc Benioff',
//     title: 'Founder, Chairman and CEO of Salesforce',
//     usrImg: 'https://picsum.photos/300/304',
//     text: 'Tony Robbins and his strategies and his tools, they’re right at the core of our culture from the beginning. He has been one of the critical keys to Salesforce’s leadership in cloud computing.',
//   },
//   {
//     _id: 4,
//     name: 'Marc Benioff',
//     title: 'Founder, Chairman and CEO of Salesforce',
//     usrImg: 'https://picsum.photos/300/304',
//     text: 'Tony Robbins and his strategies and his tools, they’re right at the core of our culture from the beginning. He has been one of the critical keys to Salesforce’s leadership in cloud computing.',
//   },
// ];

function Testimonial({ description, testimonials }: testimonialProps ) {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">{description}</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="max-w-6xl mx-auto h-8/10"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className="testimonial-inner">
              <div className="place-items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <div className="bg-white p-10 rounded-xl shadow-lg text-center -mt-12">
                <h3 className="mt-2 text-lg font-bold  text-gray-500">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
                <p className="mt-4 italic text-gray-700">{testimonial.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonial;
