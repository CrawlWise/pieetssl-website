"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { LoadScript } from '@react-google-maps/api'


const Map = dynamic(() => import('@/components/map/map'), {
    ssr: false
})

export default function MapDisplay() {
    return (
        <div>
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                <Map />
            </LoadScript>
        </div>
    )
}
