import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Static footer data
const footer = {
  image: "/images/logo.png",
  alternativeText: "Company Logo",
  footer: "Providing exceptional senior living care with compassion, dignity, and respect. Our dedicated team ensures that every resident feels at home and receives personalized attention.",
  company_address: "123 Senior Care Avenue, Suite 100\nYour City, State 12345\nPhone: (555) 123-4567\nEmail: info@pieetseniorliving.com"
};

async function Footer() {
  return (
    <div className='footer-wrapper bg-gray-100 text-gray-700'>
      <div className='footer-inner-wrapper inner-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-6 max-w-7xl mx-auto'>
        
        {/* Logo and About */}
        <div className='footer-text'>
          <div className="img-section mb-4">
            <div className="w-40 bg-gray-300 flex items-center justify-center text-sm text-white">
              <Image
              src={footer.image}
              alt={footer.alternativeText}
              width={50}
              height={50}
              className='!w-full !h-15'
              />
            </div>
          </div>
          <div className="about-psl text-sm">
            <p>{footer.footer}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/careers" className="hover:underline">Career</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            
          </ul>
        </div>

        {/* Important Documents */}
        <div className="important-document">
          <h3 className="font-semibold mb-4">Important Documents</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
            <li><a href="/faqs" className="hover:underline">FAQs</a></li>
           
          </ul>
        </div>

        {/* Company Address */}
        <div className="company-address text-sm">
          <h3 className="font-semibold mb-4">Our Address</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{footer.company_address}</p>
        </div>
        
      </div>
      <div className="text-center py-4 text-xs border-t border-gray-200">
        &copy; {new Date().getFullYear()} Logix Seven Solutions. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
