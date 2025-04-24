import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Lightbulb className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Light Store</span>
            </div>
            <p className="mb-4">
              Specializing in premium lighting solutions for all your needs. From energy-efficient bulbs to designer fixtures, illuminate your space with our quality products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-500 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-500 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/indoor" className="hover:text-blue-500 transition-colors">Indoor Lighting</Link>
              </li>
              <li>
                <Link to="/categories/outdoor" className="hover:text-blue-500 transition-colors">Outdoor Lighting</Link>
              </li>
              <li>
                <Link to="/categories/smart" className="hover:text-blue-500 transition-colors">Smart LED Bulbs</Link>
              </li>
              <li>
                <Link to="/categories/decorative" className="hover:text-blue-500 transition-colors">Decorative Lamps</Link>
              </li>
              <li>
                <Link to="/categories/energy-efficient" className="hover:text-blue-500 transition-colors">Energy-Efficient</Link>
              </li>
              <li>
                <Link to="/categories/custom" className="hover:text-blue-500 transition-colors">Custom Designs</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-500" />
                <span>1234 Light Avenue, Bright City, BC 56789</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <span>info@lightstore.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-white text-base font-semibold mb-3">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Light Store. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-blue-500 transition-colors">Shipping Info</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;