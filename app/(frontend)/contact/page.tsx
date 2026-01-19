import React from 'react'
import Contact from '@/components/Contact/Contact'
import ContactAddress from '@/components/Contact/ContactAddress'
import { contactBanner, contactText } from '@/site-contents/contact/contact'
import Banners from '@/components/BannerInfo/Banners'
import Map from "@/components/map/map";


export default function page() {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  return (
    <div className='contact-page '>
      <section className="banner-section">
        <Banners
          title={contactBanner.title}
          bgImg={contactBanner.img}
        />
      </section>

      <section className="map-section">
           <Map apiKey={googleMapsApiKey} height="300px" />
      </section>
      <div className="inner-container flex flex-col lg:flex-row gap-2 p-4">
        <div className="contact-details lg:w-1/3 mt-8 ">
          <ContactAddress />
        </div>

        <div className="contact-form w-full lg:w-2/3">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
             <h1 className='h1 !text-black'>{contactText.title}</h1>
              <p>{contactText.description}</p>
            </div>
            <Contact
            />
          </div>
        </div>
      </div>
    </div>
      )
}