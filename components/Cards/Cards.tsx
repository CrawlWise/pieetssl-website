import React from 'react';
import Card from '../ui/Card'

interface CardProps {
  icon: React.ReactNode;
  value: string;
  title: string;
}

export default function Cards({ icon, value, title }: CardProps) {
  return (
    <div data-aos="flip-left">
      <Card className="flex flex-col items-center justify-center p-4 space-y-3">
        <div className="card-icon text-green-500 text-4xl">{icon}</div>
        <div className="card-value"><h4 className="text-2xl font-bold text-gray-800">{value}</h4></div>
        <div className="card-title"><p className="text-gray-500 text-sm">{title}</p></div>
      </Card>
    </div>
  );
}
