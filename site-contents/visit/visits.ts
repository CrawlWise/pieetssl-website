import { virtualVisitInterface, virtualVisitOnlineType } from "@/site-contents/visit/vistTypes"

export type { virtualVisitOnlineType };

export const virtualVisit: virtualVisitInterface = {
    banner: {
        img: "/visit/v-1.jpeg",
        alt: "Virtual Visit Banner Image",
        title: "Virtual Visit",
    },

    content: {
        img: "/visit/v-2.png",
        altText: "Virtual Tour Image",
        title: "Virtual Tour",
        content: ["A virtual tour is a digital experience that allows elderly individuals to explore places—like museums, gardens, cities, or even senior living communities—right from the comfort of their homes. It uses images, videos, or immersive 360-degree views to create the feeling of being there in person.",]
    },
}


export const physicalVisit: virtualVisitInterface = {
    banner: {
        img: "/visit/p-1.jpeg",
        alt: "Physical Visit Banner Image",
        title: "Physical Tour",
    },

    content: {
        img: "/visit/p-2.jpeg",
        altText: "Physical Tour",
        title: "Physical Tour",
        content: ["We are excited to offer you the opportunity to meet with us in person. Our physical meet is designed to provide you with a personalized experience, allowing you to connect with our team and learn more about our services.",
            "Whether you have questions, need assistance, or simply want to explore our offerings, we are here to help. Schedule your appointment today and let us know how we can assist you.",
        ]
    }
}

export const onlineVisit: virtualVisitOnlineType = {
    banner: {
        url: "/video/online_video.mp4",
        title: "Online Visit Banner Image",
        description: "Online Meeting",
    },

    content: {
        title: "Get to know our facilities through online videos",
        content: ["An online meeting is a virtual gathering that allows elderly individuals to connect with others, attend events, or participate in activities through the internet. It utilizes video conferencing platforms to facilitate real-time communication and interaction.",

        ],
        videos: {
            video1: {
                id: 1,
                title: "Virtual Social Gatherings",
                url: "https://www.youtube.com/embed/cBKItGWe1F0",
                description: "Inside view of the appartment and amenities.",
                thumbnail: "/images/bannerImg/home1.jpg",
            },

            video2: {
                id: 2,
                title: "Online Educational Workshops",
                url: "https://www.youtube.com/embed/cBKItGWe1F0",
                thumbnail: "/images/bannerImg/home2.jpg",
                description: "A tour of the community and resident testimonials."
            },
            video3: {
                id: 3,
                title: "Virtual Fitness Classes",
                url: "https://www.youtube.com/embed/cBKItGWe1F0",
                thumbnail: "/images/bannerImg/home3.jpg",
                description: "Overview of services and activities offered."
            },

            video4: {
                id: 4,
                title: "Remote Family Visits",
                url: "https://www.youtube.com/embed/cBKItGWe1F0",
                thumbnail: "/images/bannerImg/home1.jpg",
                description: "Interview with staff and community highlights."
            },

            video5: {
                id: 5,
                title: "Telehealth Consultations",
                url: "https://www.youtube.com/embed/cBKItGWe1F0",
                thumbnail: "/images/bannerImg/home2.jpg",
                description: "Detailed walkthrough of living spaces and amenities."
            }


        }
    }
}