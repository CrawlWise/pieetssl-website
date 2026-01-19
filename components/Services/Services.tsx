/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button'
import { ServiceType } from '@/site-contents/services/serviceTypes';
import { ArrowRight  } from 'lucide-react';

export function Services({ servicesData }: { servicesData: ServiceType }) {
  return (
    <div className="hp-services-component inner-container px-4 py-8" data-aos="fade-up">
      <div className="our-services-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {servicesData.services.map((service: any, idx: number) => (
          <div
            key={idx}
            className="shadow-md rounded-lg p-4 flex flex-col items-center bg-white hover:shadow-lg transition-all duration-300"
          >
             <div className="feature-img mb-4">
              {service?.img && (
                <Image
                  src={service.img}
                  alt={service.alt || 'Service Image'}
                  width={200}
                  height={200}
                  className="w-full object-cover"
                />
              )}
            </div>

            <div className="service-title">
              <h1 className="h2 !text-black text-center mb-4">{service?.title}</h1>
              <p>{service.content}</p>
            </div>
           

            <div className="feature-content text-center m-auto mb-0">
              <h2 className="font-semibold text-lg mb-2">{service?.heading}</h2>
              <p className="text-sm text-gray-600">{service?.description}</p>
              {service?.slug && (
                <Button href={`/services/${service.slug}`} variant="ghost" className="mt-4 text-blue-500 hover:underline">
                  {service?.buttonText || 'Learn more'} <ArrowRight />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="place-items-center flex justify-center mt-8">
        {/* <ServiceBtn /> */}
      </div>
    </div>
  );
}

