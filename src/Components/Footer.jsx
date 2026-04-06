import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <div>
            
<footer className="bg-indigo-950 text-white text-base-content px-10 pt-12 pb-6">
  
  <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
    
    <aside>
      <h2 className="text-2xl font-extrabold text-purple-500">Digitools</h2>
      <p className="mt-2 text-sm text-gray-400">
        Powerful AI-driven digital tools to create, automate, and scale your workflow effortlessly.
      </p>
    </aside>

    {/* Services */}
    <nav>
      <h6 className="footer-title opacity-70">Products</h6>
      <a className="link link-hover">AI Generator</a>
      <a className="link link-hover">Design Tools</a>
      <a className="link link-hover">Analytics</a>
      <a className="link link-hover">Automation</a>
    </nav>

    {/* Company */}
    <nav>
      <h6 className="footer-title opacity-70">Company</h6>
      <a className="link link-hover">About Us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Careers</a>
      <a className="link link-hover">Blog</a>
    </nav>

    {/* Legal */}
    <nav>
      <h6 className="footer-title opacity-70">Legal</h6>
      <a className="link link-hover">Terms of Use</a>
      <a className="link link-hover">Privacy Policy</a>
      <a className="link link-hover">Cookie Policy</a>
    </nav>

    {/* Social */}
    <nav>
      <h6 className="footer-title opacity-70">Follow Us</h6>
      <div className="flex gap-4 mt-2">
        <Icon icon="mdi:facebook" className="w-6 h-6 hover:text-purple-600 cursor-pointer" />
        <Icon icon="mdi:twitter" className="w-6 h-6 hover:text-purple-600 cursor-pointer" />
        <Icon icon="mdi:instagram" className="w-6 h-6 hover:text-purple-600 cursor-pointer" />
        <Icon icon="mdi:linkedin" className="w-6 h-6 hover:text-purple-600 cursor-pointer" />
      </div>
    </nav>

  </div>

  {/* Divider */}
  <div className="divider my-6"></div>

  
  <footer className="footer sm:footer-horizontal  text-gray-400 items-center ">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>Privacy services</a>   
    <a>Terms & Conditions</a>   
    <a>coockies</a>   
    
  </nav>
</footer>

</footer>

        </div>
    );
};

export default Footer;