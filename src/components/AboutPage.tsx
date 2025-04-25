import React from 'react';
import { Award, Users, Globe, Shield } from 'lucide-react';
import { Card } from './ui/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Light Store</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Illuminating spaces and transforming environments with premium lighting solutions since 2020.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400">
              To provide innovative and sustainable lighting solutions that enhance the quality of life for our customers while maintaining the highest standards of energy efficiency and environmental responsibility.
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-400">
              To become the leading provider of smart and sustainable lighting solutions, recognized globally for our innovation, quality, and commitment to customer satisfaction.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Award className="h-8 w-8 text-blue-500" />,
              title: 'Premium Quality',
              description: 'Only the finest materials and craftsmanship'
            },
            {
              icon: <Users className="h-8 w-8 text-green-500" />,
              title: 'Expert Team',
              description: 'Dedicated lighting specialists at your service'
            },
            {
              icon: <Globe className="h-8 w-8 text-purple-500" />,
              title: 'Global Reach',
              description: 'Serving customers worldwide with local support'
            },
            {
              icon: <Shield className="h-8 w-8 text-yellow-500" />,
              title: 'Warranty',
              description: 'Extended warranty on all our products'
            }
          ].map((feature, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3637786/pexels-photo-3637786.jpeg"
                alt="Our workshop"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-400">
                Founded in 2020, Light Store began with a simple mission: to make premium lighting accessible to everyone. What started as a small workshop has grown into a global brand, trusted by thousands of customers worldwide.
              </p>
              <p className="text-gray-400">
                Our commitment to innovation and sustainability has driven us to develop cutting-edge lighting solutions that not only beautify spaces but also contribute to a more energy-efficient future.
              </p>
              <p className="text-gray-400">
                Today, we continue to push the boundaries of lighting technology while maintaining our core values of quality, service, and environmental responsibility.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
              },
              {
                name: 'Michael Chang',
                role: 'Head of Design',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
              },
              {
                name: 'Emma Rodriguez',
                role: 'Technical Director',
                image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;