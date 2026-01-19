import React from 'react'
import { homeVideoShow } from "@/site-contents/videos/videos";

export default function HomeVideo() {
    return (
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
                {/* Heading Section */}
                <div className="text-center mb-12 space-y-4">
                    <h1 className="h1 !text-black leading-tight">
                        {homeVideoShow.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {homeVideoShow.description}
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative w-full max-w-5xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video hover:shadow-3xl transition-shadow duration-300">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={homeVideoShow.url}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}
