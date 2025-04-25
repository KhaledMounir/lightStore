import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck, Star } from 'lucide-react';
import { featuredProducts, newArrivals } from '../data/products';
import { getRecentBlogPosts } from '../data/blog';
import ProductCard from './ProductCard';
import { Card, CardBody } from './ui/Card';
import Button from './ui/Button';

const HomePage: React.FC = () => {
  const blogPosts = getRecentBlogPosts(3);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Illuminate Your World with Premium Lighting
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the perfect lighting solutions for every space. From smart LEDs to custom designs, transform your environment with our high-quality products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
                  <Button size="lg" variant="primary">
                    Shop Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Explore Collections
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg"
                  alt="Modern pendant lights"
                  className="rounded-md shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gray-800 rounded-md p-4 shadow-xl border border-gray-700">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-white font-medium">Trusted by 10,000+ customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Indoor Lighting',
                image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
                link: '/categories/indoor'
              },
              {
                title: 'Smart LED Bulbs',
                image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
                link: '/categories/smart'
              },
              {
                title: 'Outdoor Lighting',
                image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg',
                link: '/categories/outdoor'
              }
            ].map((category, index) => (
              <Link key={index} to={category.link}>
                <Card hoverable className="h-56 relative overflow-hidden group">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                    <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                      <span className="mr-2">Shop now</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Products</h2>
            <Link to="/products" className="text-blue-400 hover:text-blue-300 flex items-center">
              <span className="mr-2">View all</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.length > 0 && (
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">New Arrivals</h2>
              <Link to="/products/new" className="text-blue-400 hover:text-blue-300 flex items-center">
                <span className="mr-2">View all</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Light Store?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-green-500" />,
                title: 'Energy Efficient',
                description: 'Save on your electricity bills with our energy-efficient lighting solutions.'
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-500" />,
                title: 'Quality Guaranteed',
                description: 'All our products come with extended warranties and satisfaction guarantee.'
              },
              {
                icon: <Truck className="h-10 w-10 text-purple-500" />,
                title: 'Fast Shipping',
                description: 'Free shipping on orders over $50, with quick delivery nationwide.'
              },
              {
                icon: <Star className="h-10 w-10 text-yellow-500" />,
                title: 'Expert Support',
                description: 'Our lighting experts are available to help with your selection and installation.'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Latest from Our Blog</h2>
            <Link to="/blog" className="text-blue-400 hover:text-blue-300 flex items-center">
              <span className="mr-2">View all posts</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Card key={post.id} hoverable>
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardBody>
                    <div className="mb-3">
                      <span className="text-sm text-gray-400">{post.publishedAt} • {post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-blue-400 hover:text-blue-300">
                      <span className="mr-2">Read more</span>
                      <ArrowRight size={16} />
                    </div>
                  </CardBody>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest product updates, lighting inspiration, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;