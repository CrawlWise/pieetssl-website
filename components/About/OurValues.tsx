/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { aboutOurValuesType } from '@/site-contents/about/aboutTypes';

async function OurValues({valuesData}: {valuesData: aboutOurValuesType}) {
  return (
    <div className="our-values-container w-full px-4 sm:px-6 md:px-12 lg:px-24 py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white">
      {valuesData.values.map((value: any) => (
        <div
          key={value._id}
          className="our-values-inner-div flex flex-col items-center text-center gap-4 p-6 rounded-lg shadow-md bg-white/5 backdrop-blur"
          data-aos="flip-up"
        >
          <div
            className="icon-div h-20 w-20 rounded-full shadow bg-center bg-cover bg-white"
            style={{ backgroundImage: `url(${value.img})` }}
            aria-label={value.title + " icon"}
          />
          <div className="title-desc flex-1">
            <h2 className="text-lg font-semibold">{value.title}</h2>
            <p className="text-sm leading-relaxed">{value.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurValues;
