import { aboutType, aboutContentType, bannerType, aboutOurValuesType, aboutTeamMemberType } from "@/site-contents/about/aboutTypes"

export const aboutBanner: bannerType = {
  title: "About Us",
  img: "/about/ab-1.jpeg",
  alt: "About Us Banner Image"
}

export const About: aboutType = {
  contents: {
      title: "About Us",
      img: "/home/h-1.jpeg",
      alt: "About Image",
      content: ["Welcome to PIEETS Senior Living, where we redefine senior living by providing exceptional care in an elegant, home-like setting. We believe seniors deserve to live with dignity, comfort, and personalized attention. Our dedicated team is committed to creating a nurturing environment where residents thrive. Highlight key differentiators: personalized care, luxurious accommodations, professional nursing staff, home-cooked meals."]
    }
};

export const aboutWhoWeare: aboutContentType = {
  title: "Who We Are",
  img: "/about/a-1.jpeg",
  alt: "Who We Are Image",
  content: ["PIEETS Senior Living is a premier senior care organization dedicated to redefining the standard of elder living through a blend of personalized care and upscale comfort. At the heart of our mission is a deep commitment to treating every resident with dignity, respect, and the individualized attention they deserve.",
    "We provide a warm, elegant, and home-like environment where seniors not only feel safe and cared for but also empowered to thrive. Our team of compassionate professionals offers expert nursing support, ensuring health needs are met with competence and care. Residents enjoy beautifully furnished accommodations, delicious home-cooked meals, and a thoughtfully designed lifestyle that supports emotional, physical, and social well-being."
  ]
};


export const aboutOurValues: aboutOurValuesType = {
  title: "Our Values",
  description: "At PIEETS Senior Living, our core values guide everything we do. We are committed to providing exceptional care and creating a nurturing environment for our residents. Our values include:",
  values: [
    {
    _id: "1",
    title: "Compassion",
    description: "We treat every resident with kindness, empathy, and understanding.",
    img: "/values/compassion.jpeg"
  },
  {
    _id: "2",
    title: "Respect",
    description: "We honor the dignity and individuality of each person in our care.",
    img: "/values/respect.jpeg"
  },
  {
    _id: "3",
    title: "Excellence",
    description: "We strive for the highest standards in everything we do.",
    img: "/values/excellence.png"
  },
  {
    _id: "4",
    title: "Integrity",
    description: "We operate with honesty, transparency, and ethical principles.",
    img: "/values/integrity.png"
  }
  ]
}

export const aboutTeamMembersBio: aboutTeamMemberType[] = [
    {
        _id: "1",
        name: "John Doe",
        role: "Executive Director",
        bio: "Dedicated to providing exceptional care and leadership with over 20 years of experience in senior living management.",
        linkedin: "#",
        facebook: "#",
        x: "#",
        img: "/team/t-3.jpeg",
        alt: "Team Member Image"
    },
    {
        _id: "2",
        name: "Jane Smith",
        role: "Director of Nursing",
        bio: "Passionate about resident care with extensive clinical experience in geriatric nursing and healthcare management.",
        linkedin: "#",
        facebook: "#",
        x: "#",
        img: "/team/t-1.jpeg",
        alt: "Team Member Image"
    },
    {
        _id: "3",
        name: "Michael Johnson",
        role: "Activities Coordinator",
        bio: "Creating engaging programs and activities that enhance the quality of life for all our residents.",
        linkedin: "#",
        facebook: "#",
        x: "#",
        img: "/team/t-2.jpeg",
        alt: "Team Member Image"
    }
];