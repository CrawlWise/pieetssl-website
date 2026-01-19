"use client"
import React from 'react'


import "../../app/globals.css"



type BannerInfoText = {
    heading: string,
    subHeading: string,
    description: string,
    // btnText: string,
    // btnLink: string, 
}

function BannerInfo({heading, subHeading, description}: BannerInfoText) {
  return (
    <div className='banner-text-wrapper text-center text-base/loose text-white'>
        <div className="banner-text-info">
            <h1 className='h1 lg:!text-6xl md:!text-4xl !text-2xl'>{heading}</h1>
        <h2 className='h2'>{subHeading}</h2>
        <p>{description}</p>
        </div>
{/* 
        <div className="banner-btn mt-5">
            <Link href={btnLink}>
                <button className='btn-primary'>
                    <span className='flex flex-row'>{btnText}</span>
                </button>
            </Link>
        </div> 
         */}
    </div>
  )
}

export default BannerInfo