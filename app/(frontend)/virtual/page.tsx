import React from 'react'
import Banners from '@/components/BannerInfo/Banners'
import Image from 'next/image';
import Calendly from '@/components/Calendly/Calendly';
import {virtualVisit} from '@/site-contents/visit/visits';

export default async function page() {
    
    return (
        <section className='phycical-meet-page'>
            <section className="banner-section">
                <Banners
                    title={virtualVisit.banner.title}
                    bgImg={virtualVisit.banner.img || 'image'}
                />
            </section>

            <section className="content flex flex-col md:flex-row gap-6 p-4 m-4">
                {/* Left Section */}
                <div className="main-content w-full md:w-1/2">
                    <div className="img-section bg-black rounded-xl overflow-hidden">
                        <Image
                            src={virtualVisit.content.img}
                            alt={virtualVisit.content.altText}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="text-content">
                        <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-black">{virtualVisit.content.title}</h2>
                        <span>{virtualVisit.content.content.map((para: string, idx) => (
                            <p key={idx}>{para}</p>
                        ))}</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="book-appointment w-full md:w-1/2">
                    <Calendly />
                </div>
            </section>

        </section>
    )
}
