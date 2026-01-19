import React from 'react'
import VideoGallery from '@/components/videoGallery/videoGallery'
import BannerInfo from '@/components/BannerInfo/BannerInfo'
import { onlineVisit } from '@/site-contents/visit/visits'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Video Section */}
      <div className="video-banner relative lg:min-h-[600px] md:min-h-[500px] h-[450px] w-full overflow-hidden shadow-2xl">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover scale-105"
          src="/video/online_video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 flex items-center justify-center p-4">
          <div className="animate-fade-in">
            <BannerInfo
              heading="Online Meet"
              subHeading="Join us for our online meet"
              description="Connect with us virtually and be part of our community."
              // btnText="Join Now"
              // btnLink="/online/meet"
            />
          </div>
        </div>
      </div>

      {/* Video Gallery Section */}
      <div className="video-gallery inner-container px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="heading mb-12 space-y-4">
          <h1 className="h1 !text-gray-900 text-center mb-4 font-bold tracking-tight">
            {onlineVisit.content.title}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            {onlineVisit.content.content[0]}
          </p>
        </div>
        
        <div className="mt-12">
          <VideoGallery />
        </div>
      </div>
    </div>
  )
}
