import { ServiceType } from "@/site-contents/services/serviceTypes"

export const ServicesData: ServiceType = {
    banner: {
        img: "/services/sb-1.jpeg",
        alt: "About Banner Image",
        title: "Services",
    },
    serviceTitle: {
        title: "Our Services",
        description: "We offer a comprehensive range of services tailored to meet the unique needs of each resident",
    },
    services: [
        {   id: 1,
            img: "/services/s-1.jpeg",
            alt: "Respite & Short-Term Care",
            title: "Respite & Short-Term Care",
            content: "Short-term stays with full access to care, meals, and amenities. Ideal for post-surgery recovery or caregiver breaks.",
            fullContent: [
                "Short-term stays with full access to care, meals, and amenities. Ideal for post-surgery recovery or caregiver breaks. Our respite care provides a safe and comfortable environment where seniors can recuperate while receiving personalized attention from our dedicated staff."
            ],
            slug: "respite-short-term-care"
        },
        {
            id: 2,
            img: "/services/s-2.jpeg",
            alt: "Nutritious Dining Services",
            title: "Nutritious Dining Services",
            content: "Enjoy chef-prepared meals tailored to dietary needs. PIEETS offers fresh, nutritious, and delicious options in a social dining setting.",
            fullContent: [
                "Enjoy chef-prepared meals tailored to dietary needs. PIEETS offers fresh, nutritious, and delicious options in a social dining setting. Our culinary team works closely with nutritionists to create menus that cater to various health requirements while ensuring every meal is a delightful experience."
            ],
            slug: "nutritious-dining-services"
        },

        {
            id: 3,
            img: "/services/s-3.jpeg",
            alt: "Memory Care Services",
            title: "Memory Care Services",
            content: "Specialized care in a secure, nurturing environment for seniors with Alzheimer's or dementia.",
            fullContent: [
                "Specialized care in a secure, nurturing environment for seniors with Alzheimer's or dementia. Our memory care program is designed to enhance quality of life through personalized activities, structured routines, and compassionate support from trained professionals."
            ],
            slug: "memory-care-services"
        },
        {
            id: 4,
            img: "/services/s-4.jpeg",
            alt: "Reliable Medication Management",
            title: "Reliable Medication Management",
            content: "Ensure safe and accurate medication use with PIEETS' professional management services. We handle prescriptions and monitor side effects.",
            fullContent: [
                "Ensure safe and accurate medication use with PIEETS' professional management services. We handle prescriptions and monitor side effects. Our trained staff works closely with healthcare providers to ensure that each resident's medication regimen is followed meticulously, promoting health and well-being."
            ],
            slug: "reliable-medication-management"
        },
        {
            id: 5,
            img: "/services/s-5.jpeg",
            alt: "Professional Nursing Care for Seniors",
            title: "Professional Nursing Care for Seniors",
            content: "Compassionate on-site nursing care from licensed professionals. We support post-acute care, chronic illness, and clinical needs for every resident.",
            fullContent: [
                "Compassionate on-site nursing care from licensed professionals. We support post-acute care, chronic illness, and clinical needs for every resident. Our nursing team is dedicated to providing personalized care plans that address the unique health requirements of each individual, ensuring comfort and safety at all times."
            ],
            slug: "professional-nursing-care-for-seniors"

        },
        {
            id: 6,
            img: "/services/s-6.jpeg",
            alt: "Personalized Senior Care Assistance (ADLs)",
            title: "Personalized Senior Care Assistance (ADLs)",
            content: "Get compassionate personal care assistance for seniors. We offer respectful support with daily activities like bathing, dressing, and mobility to maintain dignity and independence.",
            fullContent: [
                "Get compassionate personal care assistance for seniors. We offer respectful support with daily activities like bathing, dressing, and mobility to maintain dignity and independence. Our caregivers are trained to provide individualized attention, ensuring that each resident's preferences and needs are met with kindness and professionalism."
            ],
            slug: "personalized-senior-care-assistance-adls"
        },
        // {
        //     img: "/image/service7.jpg",
        //     alt: "Service 7 Image",
        //     title: "Independent Living",
        //     content: "Active retirement living with private residences, social opportunities, and well ness programs.",
        //     fullContent: [
        //         "Active retirement living with private residences, social opportunities, and wellness programs. Our independent living options are designed for seniors who value their freedom while enjoying the benefits of a supportive community. Residents can participate in a variety of activities and events that promote social engagement and healthy living."
        //     ],
        //     slug: "independent-living"
        // }

    ],
}

