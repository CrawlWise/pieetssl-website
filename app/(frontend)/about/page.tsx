import Banners from '@/components/BannerInfo/Banners'
import TeamMembers from '@/components/Team/TeamMembers';
import OurValues from '@/components/About/OurValues';
import { aboutWhoWeare, aboutBanner, aboutOurValues } from '@/site-contents/about/about';
import React from 'react'

export default function Page() {
  return (
    <section className="main-banner-wrapper">
      <section className="banner-section">

        <Banners
          title={aboutBanner.title}
          bgImg={aboutBanner.img}
        />
      </section>

      {/* who we are section */}
      <section className="about-us-info">
        <div className="inner-container flex flex-col lg:flex-row">
          <div className="information w-full lg:w-1/2 p-4">
            <h1 className="h1 !text-black text-center mb-4">{aboutWhoWeare.title}</h1>
            <p>{aboutWhoWeare.content.map((para, idx) => (
              <span key={idx}>
                {para}<br />
              </span>
            ))}</p>
          </div>

          <div
            className="we-are-bgImg w-full lg:w-1/2 bg-cover bg-center min-h-[300px] rounded-tr-lg rounded-bl-lg rounded-tl-4xl rounded-br-4xl shadow-lg"
            style={{ backgroundImage: `url(${aboutWhoWeare.img})` }}
          >
            {/* Background image */}
          </div>
        </div>
      </section>

      <section className="our-core-values bg-blue-900 pt-6">
        <div className="title-desc w-1/2 text-center mx-auto">
          <h1 className='h1 !text-white text-center'>{aboutOurValues.title}</h1>
          <p className='text-center text-white'>{aboutOurValues.description}</p>
        </div>

        <div className="inner-container place-items-center ">
          <OurValues valuesData={aboutOurValues} />
        </div>
      </section>

      <section className="meet-team-members mt-4">
        <h1 className='h1 !text-black text-center'>Meet Our Excellent Team Members</h1>
        <div className="inner-container">
          <TeamMembers />
        </div>

      </section>
    </section>
  );
}
