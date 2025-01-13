import React from 'react';
import { assets } from '../assets/assets';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <img width={160} src={assets.logo} alt="GreatStack Logo" />

        {/* Copyright */}
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} GreatStack.dev | All rights reserved
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <img width={38} src={assets.facebook_icon} alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <img width={38} src={assets.twitter_icon} alt="Twitter" />
          </a>
          <a href="#" aria-label="Instagram">
            <img width={38} src={assets.instagram_icon} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
