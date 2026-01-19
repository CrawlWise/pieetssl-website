import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import "./Header.css"


function HeaderInfo() {
  return (
    <div className='headerinfo-wrapper flex flex-row justify-between p-3 bg-black text-white'>
        <div className="phone-number flex flex-row gap-2">
            <div className="phone-icon social-media-icons"><FaPhoneAlt /></div>
            <div className="phone !mt-1"><p>Phone: xxxx xxxx xxxx</p></div>
        </div>
        <div className="social-media flex flex-row gap-4">
            <div className="fb-icon social-media-icons">
              <Link href="">
              <FaFacebook />
              </Link>
              </div>
            <div className="x-icon social-media-icons">
              <Link href="">
                <FaXTwitter />
              </Link>
            
            </div>
            <div className="linkedin-icon social-media-icons">
              <Link href="">
                <FaLinkedinIn />
              </Link>
            
            </div>
        </div>
    </div>
  )
}

export default HeaderInfo