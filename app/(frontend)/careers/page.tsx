'use client';
import React from 'react';
import Image from 'next/image';
import Cards from '@/components/Cards/Cards';
import { FaRegHeart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import ViewJobs from '@/components/Buttons/ViewJobs';
import BenefitsCard from '@/components/Cards/BenefitsCard';
import { TbRibbonHealth, TbPigMoney, TbBriefcase, TbChartLine, TbGift, TbUsers } from 'react-icons/tb';

export default function CareerPage() {
  const CardsDetails = [
    {
      _id: 1,
      icon: <FaRegHeart />,
      value: "500+",
      title: 'Resident'
    },
    {
      _id: 2,
      icon: <FaUsers />,
      value: "10+",
      title: 'Team Members'
    },
    {
      _id: 3,
      icon: <GiAchievement />,
      value: "30+",
      title: 'Years'
    },
    {
      _id: 4,
      icon: <IoMdTime />,
      value: "24/7",
      title: 'Care'
    },
  ]

  // Generating my random data for my benefit



  const BenefitDetails = [
    {
      _id: 1,
      icon: <TbRibbonHealth />,
      heading: "Health & Wellness",
      items: [
        "Comprehensive Health Insurance",
        "Dental and Vision Coverage",
        "Mental Health Support",
        "Wellness Program",
        "Free Annual Health Screenings"
      ]
    },
    {
      _id: 2,
      icon: <TbPigMoney />,
      heading: "Financial Benefits",
      items: [
        "Competitive Salary Packages",
        "Retirement Savings Plans",
        "Performance Bonuses",
        "Equity & Stock Options",
        "Financial Planning Assistance"
      ]
    },
    {
      _id: 3,
      icon: <TbBriefcase />,
      heading: "Work-Life Balance",
      items: [
        "Flexible Work Schedules",
        "Remote Work Opportunities",
        "Generous Paid Time Off",
        "Parental Leave",
        "Recharge Days"
      ]
    },
    {
      _id: 4,
      icon: <TbChartLine />,
      heading: "Professional Growth",
      items: [
        "Ongoing Training & Certifications",
        "Sponsored Courses and Workshops",
        "Mentorship Programs",
        "Career Advancement Opportunities",
        "Annual Learning Budget"
      ]
    },
    {
      _id: 5,
      icon: <TbGift />,
      heading: "Additional Perks",
      items: [
        "Employee Discounts",
        "Free Lunch & Snacks",
        "Team Outings & Retreats",
        "Wellness Stipends",
        "Tech & Home Office Allowances"
      ]
    },
    {
      _id: 6,
      icon: <TbUsers />,
      heading: "Community Impact",
      items: [
        "Volunteer Opportunities",
        "Charity Matching Program",
        "Sustainability Initiatives",
        "Diversity & Inclusion Programs",
        "Community Outreach Events"
      ]
    }
  ];


  return (
    <section className="career-wrapper bg-gray-50 min-h-screen py-16">
      <section className="banner max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="banner-info space-y-6">
          <div className="heading">
            <h1 className="text-4xl font-extrabold text-gray-800 leading-tight text-center h1 !text-black">
              Join Our Team
            </h1>
          </div>

          <div className="par">
            <p className="text-gray-600 text-lg">
              We’re always looking for creative, talented individuals to join our growing team.
              Discover a place where you can make an impact and grow your career.
            </p>
          </div>

          <div className="cards-info grid lg:grid-cols-4 md:grid-rows-2 grid-rows-2 gap-2 min-h-32 lg:h-36">
            {CardsDetails.map((details) => (
              <div key={details._id}>
                <Cards
                  icon={details.icon}
                  value={details.value}
                  title={details.title}
                />
              </div>
            ))}

          </div>
          {/* Buttons */}
          <div className="button space-x-4 flex justify-center">
            <ViewJobs />
            {/* <Benefits /> */}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="banner-image">
          <Image
            src="/images/teamWorkers.PNG" // Replace this with your actual image
            alt="Career Banner"
            width={600}
            height={400}
            className="rounded-2xl shadow-xl object-cover w-full"
          />
        </div>
      </section>


      {/* This is the Benefits section area */}
      <section className="benefit inner-container mt-10">
        <div className="heading-par p-3 mb-5">
          <h1 className='h1 !text-black text-center p-2'>Why Choose PIEETS Senior Living</h1>
          <p className='text-gray-400 text-center'>We believe in taking care of those who take care of others. Our comprehensive benefits package reflects our commitment to your well-being and professional growth.</p>
        </div>

        <div className="benefit-card grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BenefitDetails.map(({ _id, icon, heading, items }) => (
            <BenefitsCard
              key={_id}
              icon={icon}
              heading={heading}
              itemsList={items}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
