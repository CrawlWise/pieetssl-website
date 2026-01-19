'use client';
import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Button from '../ui/Button'
import {onlineVisit, virtualVisitOnlineType} from '@/site-contents/visit/visits';



export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<virtualVisitOnlineType["content"]["videos"][string] | null>(null);

  const openModal = (video: virtualVisitOnlineType["content"]["videos"][string]) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);


  return (
    <div className="video-gallery grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 rounded-xl">
      {Object.values(onlineVisit.content.videos).map((video) => (
        <div
          key={video.id}
          className="video-card  bg-cover bg-center bg-no-repeat rounded-xl"
          style={{ backgroundImage: `url(${video.thumbnail})` }}
          data-aos="zoom-out-down"
        >
          <div className="main-gallery-wrapper gap-4">
            <div className="video-thumbnail bg-overlay lg:h-64 md:h-64 place-items-center flex flex-col justify-center rounded-xl">
              <div className="playbutton">
                <Button onClick={() => openModal(video)} variant="ghost" className="cursor-pointer p-0">
                  <FaPlayCircle className="text-6xl text-white hover:bg-blue-400 hover:shadow-lg transition-all duration-300 rounded-full" />
                </Button>
              </div>
              <div className="video-info text-center text-white">
                <h3 className="h3">{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
            <Button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-red-500 rounded-full p-2 hover:bg-red-600 transition-colors duration-300"
              variant="default"
            >
              <IoMdClose />
            </Button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96"
                src={selectedVideo.url}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
