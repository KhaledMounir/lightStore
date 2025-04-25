import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';

const categories = [
  {
    id: 'indoor',
    name: 'Indoor Lighting',
    description: 'Illuminate your interior spaces with our stylish indoor lighting collection.',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
    products: 24
  },
  {
    id: 'outdoor',
    name: 'Outdoor Lighting',
    description: 'Transform your outdoor areas with weather-resistant lighting solutions.',
    image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg',
    products: 18
  },
  {
    id: 'smart',
    name: 'Smart LED Bulbs',
    description: 'Control your lighting with smart technology and automation.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    products: 15
  },
  {
    id: 'decorative',
    name: 'Decorative Lamps',
    description: 'Add style and character to any room with our decorative lighting.',
    image: 'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg',
    products: 30
  },
  {
    id: 'energy-efficient',
    name: 'Energy Efficient',
    description: 'Save energy and reduce costs with our efficient lighting options.',
    image: 'https://images.pexels.com/photos/534433/pexels-photo-534433.jpeg',
    products: 20
  },
  {
    id: 'custom',
    name: 'Custom Designs',
    description: 'Create unique lighting solutions tailored to your specific needs.',
    image: 'https://images.pexels.com/photos/133640/pexels-photo-133640.jpeg',
    products: 12
  }
];

const CategoriesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">Product Categories</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of lighting solutions, from indoor fixtures to smart lighting technology.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link key={category.id} to={`/shop?category=${category.id}`}>
              <Card hoverable className="h-full">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-400 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.products} products</span>
                    <div className="flex items-center text-blue-400 hover:text-blue-300">
                      <span className="mr-2">View Collection</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Category Banner */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"
                alt="Smart Lighting Collection"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Smart Lighting Collection
              </h2>
              <p className="text-gray-400 mb-6">
                Transform your home with our latest smart lighting solutions. Control your lights with your smartphone, set schedules, and create the perfect ambiance for any occasion.
              </p>
              <Link
                to="/shop?category=smart"
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                <span className="mr-2">Explore Smart Lighting</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;