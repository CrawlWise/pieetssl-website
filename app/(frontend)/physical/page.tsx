import React from 'react'
import Banners from '@/components/BannerInfo/Banners'
import Image from 'next/image';
import Calendly from '@/components/Calendly/Calendly';
import {physicalVisit} from '@/site-contents/visit/visits';


export default async function page() {
    return (
        <section className='phycical-meet-page'>
            <section className="banner-section">
                <Banners
                    title={physicalVisit.banner.title}
                    bgImg={physicalVisit.banner.img}
                />
            </section>

            <section className="content flex flex-col md:flex-row gap-6 p-4 m-4">
                {/* Left Section */}
                <div className="main-content w-full md:w-1/2">
                    <div className="img-section rounded-xl overflow-hidden">
                        <Image
                            src={physicalVisit.content.img}
                            alt={physicalVisit.content.altText}
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>

                    <div className="text-content">
                        <h2 className="text-2xl font-bold mb-4 mt-4 text-center text-black">{physicalVisit.content.title}</h2>
                        <span>{physicalVisit.content.content.map((para: string, idx) => (
                            <p key={idx}>{para}</p>
                        ))}</span>  
                    </div>
                </div>

                {/* Right Section */}
                 {/* Right Section */}
                                <div className="book-appointment w-full md:w-1/2">
                                    <Calendly />
                                </div>
            </section>

        </section>
    )
}
