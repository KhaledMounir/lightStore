import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const handleSocialClick = (platform: string) => {
    const socialLinks = {
      facebook: 'https://facebook.com/lightstore',
      twitter: 'https://twitter.com/lightstore',
      instagram: 'https://instagram.com/lightstore',
      youtube: 'https://youtube.com/lightstore'
    };
    
    window.open(socialLinks[platform as keyof typeof socialLinks], '_blank');
  };

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Light Store</span>
            </Link>
            <p className="mb-4">
              Specializing in premium lighting solutions for all your needs. From energy-efficient bulbs to designer fixtures, illuminate your space with our quality products.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('facebook')} 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('twitter')} 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('instagram')} 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </button>
              <button 
                onClick={() => handleSocialClick('youtube')} 
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={20} />
              </button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-blue-500 transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=indoor" className="hover:text-blue-500 transition-colors">
                  Indoor Lighting
                </Link>
              </li>
              <li>
                <Link to="/shop?category=outdoor" className="hover:text-blue-500 transition-colors">
                  Outdoor Lighting
                </Link>
              </li>
              <li>
                <Link to="/shop?category=smart" className="hover:text-blue-500 transition-colors">
                  Smart LED Bulbs
                </Link>
              </li>
              <li>
                <Link to="/shop?category=decorative" className="hover:text-blue-500 transition-colors">
                  Decorative Lamps
                </Link>
              </li>
              <li>
                <Link to="/shop?category=energy-efficient" className="hover:text-blue-500 transition-colors">
                  Energy-Efficient
                </Link>
              </li>
              <li>
                <Link to="/shop?category=custom" className="hover:text-blue-500 transition-colors">
                  Custom Designs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-500" />
                <a 
                  href="https://maps.google.com/?q=1234+Light+Avenue,+Bright+City,+BC+56789" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors"
                >
                  1234 Light Avenue, Bright City, BC 56789
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <a 
                  href="tel:+11234567890" 
                  className="hover:text-blue-500 transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <a 
                  href="mailto:info@lightstore.com" 
                  className="hover:text-blue-500 transition-colors"
                >
                  info@lightstore.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white text-base font-semibold mb-3">Newsletter</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email" 
                  required
                  className="flex-grow px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Light Store. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="hover:text-blue-500 transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;