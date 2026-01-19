import React from 'react'
import Banners from '@/components/BannerInfo/Banners';
import { ServicesData } from '@/site-contents/services/services';
import { Services } from '@/components/Services/Services';

export default function Page() {
    // Static service banner data
    const bannerData = ServicesData.banner;
    return (
        <section className='services-main-wrapper'>
            <section className="banner">
                <Banners
                    title={bannerData.title}
                    bgImg={bannerData.img}
                />
            </section>

            <section className="services-contents">
                <Services servicesData={ServicesData}/>
            </section>
        </section>
    )
}
