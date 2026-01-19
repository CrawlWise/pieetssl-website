'use client'
import { useEffect, useRef } from 'react';

export default function Calendly() {
  const ref = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget"
      data-url="https://calendly.com/pieetssl-support/30min"
      style={{ minWidth: '350px', height: '700px' }}
    />
  );
}
