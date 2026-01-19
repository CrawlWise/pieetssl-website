"use client"
import React, { useState} from 'react'
import Button from '../ui/Button'
import { useForm } from 'react-hook-form'

const baseURL = process.env.NEXT_PUBLIC_SITE_URL

// interface ContactProps {
//   title: string;
//   description: string;
// }



interface FormDataProps {
  fullname: string;
  phone_number: string;
  sender_email: string;
  subject: string;
  comment: string;
}

function Contact() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDataProps>();
  const [isLoading, setIsLoading] = useState(false);

  // api/vs/email/send-email endpoint
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendEmail = async (data: any) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${baseURL}/api/v2/email/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const dataVal = await response.json()
        console.log(dataVal)
        const result = await response.json();
        console.log('Email sent successfully:', result);

      } else {
        // Handle API error more gracefully
        const errorFeed = await response.json();
        console.error('API error:', errorFeed?.detail || errorFeed?.error || errorFeed);
      }
    } catch (error) {
      console.error('Network or fetch error:', error);
    } finally {
      reset(); // reset form fields after submission
      setIsLoading(false);
    }
  };




  return (
    <div className="px-2 py-4">
      <form onSubmit={handleSubmit(sendEmail)} className="max-w-2xl mx-auto p-6 rounded-lg shadow-md" suppressHydrationWarning={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="fullname"
              {...register("fullname", { required: "Name is required" })}
              placeholder="Enter your full name"
              className="form-input"
            />
            {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              id="phone_number"
              {...register("phone_number", { required: "Phone number is required" })}
              placeholder="Enter your phone number"
              className="form-input"
            />
            {errors.phone_number && <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>}
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            {...register("subject", { required: "Provide the subject of the information" })}
            placeholder="Enter your subject"
            className="form-input"
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="sender_email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="sender_email"
            {...register("sender_email", { required: "Email is required" })}
            placeholder="Enter your email"
            className="form-input"
          />
          {errors.sender_email && <p className="text-red-500 text-sm mt-1">{errors.sender_email.message}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
          <textarea
            id="comment"
            rows={6}
            {...register("comment", { required: "Comment is required" })}
            placeholder="Enter your comment"
            className="form-input"
          />
          {errors.comment && <p className="text-red-500 text-sm mt-1">{errors.comment.message}</p>}
        </div>

        <div className="mt-6 text-center">
          <Button type="submit" disabled={isLoading} variant="default">
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
