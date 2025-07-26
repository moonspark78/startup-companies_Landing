import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }


const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* rand column */}
          <div className="lg:col-span-4">
            <div className="flex gap-1 items-center mb-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100 transition-opacity"></div>
              <div className="w-4 h-4 bg-red-500 -ml-2 rounded-full opacity-100 hover:opacity-75 transition-opacity"></div>
            </div>
            <span className="text-xl font-medium ml-1">The Next Desugn</span>
            </div>
            <p className="text-gray-600 mb-6">
              The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.
            </p>

            <div className="flex gap-4">
              <a className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600
               hover:bg-blue-500 hover:text-white transit