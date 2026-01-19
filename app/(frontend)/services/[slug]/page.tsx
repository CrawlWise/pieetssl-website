import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ServicesData } from '@/site-contents/services/services'



export default async function page({ params }: { 
  params: Promise<{ slug: string }>;
}) 
{
  const { slug } = await params;
  const serviceData = ServicesData.services.find(service => service.slug === slug);

  if (!serviceData) {
    return <div className="text-center text-red-600">Service not found.</div>
  }

  return (
    <section className="service-detailed-page">
      <div className="inner-container !w-8/12 place-items-center mx-auto py-10">
        <div className="back-arrow mb-4">
          <Link href="/services" className="text-blue-500 hover:text-blue-700 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Services
          </Link>
        </div>

        <div className="service-image mb-6 w-full h-64 flex justify-center items-center overflow-hidden">
          <Image
            src={serviceData.img}
            alt={serviceData.alt || 'Service Image'}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="service-heading">
          <h1 className="h1 !text-black mb-5">{serviceData.title}</h1>
        </div>

        <div className="service-detail prose max-w-none">
          <p>{serviceData.fullContent?.map(content => <span key={content}>{content}</span>)}</p>
        </div>
      </div>
    </section>
  )
}
