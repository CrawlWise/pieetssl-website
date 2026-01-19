import React from 'react'
import Testimonial from './Testimonial';

// Static testimonials data
const testimonials = [
  {
    _id: "1",
    name: "Mary Johnson",
    title: "Happy Resident",
    description: "The care and attention I receive here is exceptional. The staff truly cares about my well-being.",
    image: "/images/testimonial/person1.jpg"
  },
  {
    _id: "2",
    name: "Robert Williams",
    title: "Family Member",
    description: "My mother has been so happy here. The facility is clean, the staff is wonderful, and the activities keep her engaged.",
    image: "/images/testimonial/person2.jpg"
  },
  {
    _id: "3",
    name: "Susan Davis",
    title: "Resident's Daughter",
    description: "I'm so grateful for the professional and compassionate care my father receives. This place feels like home.",
    image: "/images/testimonial/person3.jpg"
  }
];

export default async function TestimonialServer() {
  return (
    <div data-aos="zoom-in">
        <Testimonial
        description='What People are Saying about Us'
        testimonials = {testimonials}
        />
    </div>
  )
}
