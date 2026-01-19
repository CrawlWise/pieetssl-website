import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Card from '../ui/Card'

interface BenefitCardProps {
  icon: React.ReactNode;
  heading: string;
  itemsList: string[];
}

export default function BenefitsCard({ icon, heading, itemsList }: BenefitCardProps) {
  return (
    <Card className="w-full max-w-md" data-aos="fade-up">
      <div className="flex items-center space-x-4">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-full shadow-md text-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{heading}</h3>
      </div>

      <ul className="space-y-2 mt-2">
        {itemsList.map((item, index) => (
          <li key={index} className="flex items-start text-sm text-gray-700 space-x-2">
            <span className="text-green-500 mt-0.5 text-lg">
              <IoMdCheckmarkCircleOutline />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
