import React from "react";
import Contact from "@/components/Contact/Contact";
import ServiceBtn from "@/components/Buttons/ServiceBtn";
import HomeRSSFeedsServer from "@/components/RSSFeeds/HomeRSSFeedsServer";
import { IoNewspaper } from "react-icons/io5";
import HomeRSSSectionFeedsServer from "@/components/RSSFeeds/HomeRSSSectionFeedsServer";
import CarouselSever from "@/components/Carousel/CarouselSever";
import { About } from "@/site-contents/about/about";
import { ServicesData } from "@/site-contents/services/services";
import { Services } from "@/components/Services/Services";
import { contactText } from "@/site-contents/contact/contact";
import HomeVideo from "@/components/InsideHomeView/homeVideo";


export default async function Home() {
  // Fetch about us content
  const aboutContent = About.contents;

  // reduce the contents that display on the homepage
  const HOME_SERVICE_LIMIT = 3

  //Note: create a service for home page, destructure it, then pass the new data to servives component to handle
  const homeServicesData = {
    ...ServicesData,
    services: ServicesData.services.slice(0, HOME_SERVICE_LIMIT),
  }

  return (
    <section className="main-wrapper">

      {/* the is the carousel section */}
      <section className="carousel-wrapper">
        <div className="carousel-inner-wrapper">
          <CarouselSever />
        </div>
        <div className="rss-feed-news flex flex-row gap-1 bg-gray-100">
          <div className="rss-message p-2 bg-blue-400 text-white pr-2 flex gap-1">
            <span className="pt-1"><IoNewspaper /></span><h1>News</h1>
          </div>
          <div className="rss-feeds overflow-hidden p-2">
            <HomeRSSFeedsServer />
          </div>
        </div>
      </section>

      {/** About us section of the website */}
      <section className="about-wrapper-hp">
        <div className="about-inner-hp inner-container !pt-0">
          <div className="about-section grid grid-cols-1 lg:grid-cols-2 gap-6 my-10 items-center">
            <div
              className=" w-full bg-cover bg-center min-h-96 rounded-tr-lg rounded-bl-lg rounded-tl-4xl rounded-br-4xl shadow-lg bg-no-repeat"
              style={{ backgroundImage: `url(${aboutContent.img})` }}
            >
              {/* Background image */}
            </div>
            <div className="about-content">
              <h1 className="h1 !text-black mb-4 text-center">{aboutContent.title}</h1>
              <p>
                {/* content is an array in my data content, that is why i have to map it in other to get all the information added*/}
                {aboutContent.content.map((para: string, pIdx: number) => (
                  <span key={pIdx}>
                    {para}<br />
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/** Our Services Section */}
      <section className="our-services-hp bg-blue-950 text-black py-10">
        <div>
          <h1 className="h1 !text-center !text-white mb-5">{homeServicesData.serviceTitle.title}</h1>
          <p className="text-center text-white mb-8">{homeServicesData.serviceTitle.description}</p>
        </div>
        <div className="">
          <Services servicesData={homeServicesData} />
        </div>
        <div className='place-items-center flex justify-center mb-5'>
          <ServiceBtn />
        </div>
      </section>

      <section className="py-5">
        <div className="title">
          <h1 className="h1 !text-center !text-black m-5">Recent Blogs Post</h1>
        </div>
        <HomeRSSSectionFeedsServer />
      </section>

      {/** Testimonial section */}
      {/* <section className="testimonial-wrapper-hp">
        {testimonialBgImg.map((tImg, index) => (
          <div key={index} style={{ backgroundImage: `url(${tImg.imgSrc})` }}
            aria-label={tImg.imgAlt}
            className="bg-no-repeat bg-cover"
          >
            <div className="bg-overlay text-white">
              <TestimonialServer/>
            </div>
          </div>
        ))}
      </section> */}

      {/** Our Home section */}
      <section className="home-wrapper-section">
        <div className="video-display">
          <HomeVideo />
        </div>
      </section>


      {/** Contact us section on the homepage */}
      <section className="contact-us-hp relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: "url(/contact/cb-1.jpeg)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-950/90"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="h1 !text-white mb-4">{contactText.title}</h2>
              <p className="text-gray-200 text-lg max-w-2xl mx-auto">
                {contactText.description}
              </p>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl ">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
