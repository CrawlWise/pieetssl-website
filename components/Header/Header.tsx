'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import Button from '../ui/Button'
import { usePathname } from 'next/navigation';
import Image from 'next/image';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const pathname = usePathname();

  const headersName = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Service', link: '/services' },
    { name: 'Career', link: '/careers' },
    { name: 'Visit Us', link: '#', dropdown: true },
    { name: 'Blog', link: '/blog' },
  ];

  const dropdownList = [
    { name: 'Virtual', link: '/virtual' },
    { name: 'Physical', link: '/physical' },
    { name: 'Online', link: '/online' },
  ];

  const [menu, setMenu] = useState(false);
  const [showDropDown, setShowDropdown] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-100 text-blue-900 shadow-md w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 relative">
        {/* Logo */}
        <div className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-4">
          <ul className="flex items-center space-x-4">
            {headersName.map((header, index) => (
              <div
                key={index}
                onMouseEnter={() => header.dropdown && setShowDropdown(true)}
                onMouseLeave={() => header.dropdown && setShowDropdown(false)}
                className="relative"
              >
                <li className="list-none">
                  <Link
                    href={header.link}
                    className={classNames(
                      pathname === header.link
                        ? 'bg-white text-orange-500 p-3 rounded-md'
                        : 'hover:bg-white hover:text-orange-500 text-blue-800 p-3 rounded-md transition'
                    )}
                  >
                    {header.name}
                  </Link>
                </li>

                {/* Dropdown */}
                {header.dropdown && showDropDown && (
                  <div className="absolute top-full left-0 bg-white text-blue-900 shadow-md rounded-md z-10 w-40">
                    <ul className="p-2">
                      {dropdownList.map((dropdownItem, idx) => (
                        <li
                          key={idx}
                          className="hover:bg-gray-100 px-4 py-2 whitespace-nowrap"
                        >
                          <Link href={dropdownItem.link}>
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <Button className="p-2 text-black" onClick={() => setMenu(!menu)} variant="ghost">
            <CiMenuFries size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <ul className="lg:hidden px-4 pb-4 space-y-2">
          {headersName.map((header, index) => (
            <div key={index}>
              <li
                className="hover:bg-white hover:text-orange-500 p-3 rounded-md text-lg flex justify-between items-center"
                onClick={() => {
                  if (header.dropdown) {
                    setMobileDropdownOpen(!mobileDropdownOpen);
                  } else {
                    setMenu(false);
                  }
                }}
              >
                <Link href={header.link}>{header.name}</Link>
                {header.dropdown && (
                  <span className="ml-2 text-sm text-orange-500">
                    {mobileDropdownOpen ? '▲' : '▼'}
                  </span>
                )}
              </li>

              {/* Mobile Dropdown */}
              {header.dropdown && mobileDropdownOpen && (
                <ul className="ml-4">
                  {dropdownList.map((dropdownItem, idx) => (
                    <li
                      key={idx}
                      className="text-base text-blue-800 hover:underline py-1"
                    >
                      <Link href={dropdownItem.link}>
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      )}
    </header>
  );
}
