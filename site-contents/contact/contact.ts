import { subInformationType, contactContentType, contactBannertype } from "@/site-contents/contact/contactTypes";

export const contactBanner: contactBannertype = {
    img: "/contact/c-1.jpeg",
    alt: "Contact Banner Image",
    title: "Contact Us"
}

export const contactText: contactContentType = {
    title: "Get in Touch",
    description: "We would love to hear from you. Please fill out the form below and we will get back to you as soon as possible."
}

export const contactShortForm: subInformationType = {
    title: "Welcome to PIEETS Senior Living",
    description: "Connect With us today.",
    subInformation: [
        {
            icon: "/image/location-icon.png",
            title: "Call us for inquiry",
            content: "(654)-XXX-XXX"
        },

        {
            icon: "/image/phone-icon.png",
            title: "Email us anytime",
            content: "support@pieets.com"
        },

        {
            icon: "/image/email-icon.png",
            title: "visit our office",
            content: "22421 Merrick BLVD, STE 101,Laurenton, NY 11413-2024"
        }
    ]
}