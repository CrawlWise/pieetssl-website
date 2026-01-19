"use client"
import React from 'react'
import Button from '../ui/Button'

function ServiceBtn() {
    const btnText = [
        {
            _id: 1,
            title: 'View Services',
        }
    ]
  return (
    <Button href="/services" variant="default">
        <span className='flex flex-row items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span className='ml-2'>
                {btnText.map((text) => (
                    <span key={text._id}>{text.title}</span>
                ))}
            </span>
        </span>
    </Button>
  )
}

export default ServiceBtn