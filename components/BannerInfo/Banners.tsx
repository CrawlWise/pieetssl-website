import React from 'react'

interface Props {
    title: string;
    bgImg: string;
}

function Banners({ title, bgImg }: Props) {
  return (
    <div className='banner-wrapper relative flex flex-col lg:flex-row w-full overflow-hidden shadow-lg'>
        {/* Background Image Section */}
        <div 
            className="banner-bg relative w-full lg:w-4/5 h-48 sm:h-64 lg:h-80 xl:h-96 bg-center bg-cover bg-no-repeat transition-transform duration-300 hover:scale-105" 
            style={{ backgroundImage: `url(${bgImg})` }}
            role="img"
            aria-label={`Banner image for ${title}`}
        >
            <div className="bg-overlay absolute inset-0 bg-gradient-to-r from-black/30 to-black/20"></div>
        </div>
        
        {/* Title Section */}
        <div className="title-section relative w-full lg:w-1/5 min-h-[8rem] sm:min-h-[12rem] lg:min-h-[20rem] xl:min-h-[24rem] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col items-center justify-center px-6 py-8 lg:py-12 border-t-4 lg:border-t-0 lg:border-l-4 border-white shadow-xl">
            <div className="text-center space-y-4">
                <h1 className='h1 tracking-wide leading-tight'>
                    {title}
                </h1>
                <div className="mx-auto w-20 h-1 bg-white rounded-full shadow-md"></div>
            </div>
        </div>
    </div>
  )
}

export default Banners