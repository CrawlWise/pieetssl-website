import React from 'react'
import { PhoneOutgoing } from 'lucide-react';
import { MailPlus } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
import {contactShortForm} from '@/site-contents/contact/contact'

async function ContactAddress() {
    return (
        <div className='contact-address bg-white shadow-md rounded-md lg:p-4 p-2'>
                <div className="connect">
                    <div className="">
                        <h5 className='font-semibold'>{contactShortForm.title}</h5>
                        <p>{contactShortForm.description}</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 p-2">
                    <div className="rounded-full bg-gray-300 p-4 w-12 h-12">
                        <PhoneOutgoing />
                    </div>

                    <div className="card-text">
                        <p>{contactShortForm.subInformation[0].title}</p>
                        <h6><strong>{contactShortForm.subInformation[0].content}</strong></h6>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 lg:p-2">
                    <div className="rounded-full bg-gray-300 p-4 w-12 h-12">
                        <MailPlus />
                    </div>
                    <div className="card-text">
                        <p>{contactShortForm.subInformation[1].title}</p>
                        <h6><strong>{contactShortForm.subInformation[1].content}</strong></h6>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 p-2">
                    <div className="rounded-full bg-gray-300 p-4 w-12 h-12">
                        <MapPinHouse />
                    </div>
                    <div className="card-text">
                        <p>{contactShortForm.subInformation[2].title}</p>
                        <p>{contactShortForm.subInformation[2].content}</p>
                    </div>
                </div>
            </div>        
    )
}

export default ContactAddress
