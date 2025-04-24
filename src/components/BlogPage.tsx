import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, Search } from 'lucide-react';
import { blogPosts, searchBlogPosts } from '../data/blog';
import { Card, CardBody } from './ui/Card';
import Button from './ui/Button';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setFilteredPosts(searchBlogPosts(searchQuery));
    } else {
      setFilteredPosts(blogPosts);
    }
  };
  
  // Get all unique tags from blog posts
  const allTags = Array.from(
    new Set(blogPosts.flatMap(post => post.tags))
  );
  
  // Get all unique categories from blog posts
  const allCategories = Array.from(
    new Set(blogPosts.map(post => post.category))
  );
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-8 md:p-12 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lighting Inspiration & Tips
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Discover the latest trends, DIY guides, and expert advice for all your lighting needs.
          </p>
          <form onSubmit={handleSearch} className="max-w-lg">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full py-3 pl-10 pr-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Button
                type="submit"
                variant="primary"
                className="absolute right-1 top-1 bottom-1"
              >
                Search
              </Button>
            </div>
          </form>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
            
            {filteredPosts.length === 0 ? (
              <div className="bg-gray-800 rounded-md p-8 text-center">
                <p className="text-gray-400 mb-4">No articles found for "{searchQuery}"</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setFilteredPosts(blogPosts);
                  }}
                >
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredPosts.map(post => (
                  <Card key={post.id}>
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <CardBody className="md:w-2/3">
                        <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {post.publishedAt}
                          </span>
                          <span className="flex items-center">
                            <User size={14} className="mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Tag size={14} className="mr-1" />
                            {post.category}
                          </span>
                        </div>
                        
                        <Link to={`/blog/${post.id}`}>
                          <h3 className="text-xl font-semibold text-white mb-2 hover:text-blue-400 transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md hover:bg-gray-600 transition-colors cursor-pointer"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <Link to={`/blog/${post.id}`}>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </Link>
                      </CardBody>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Categories */}
            <div className="bg-gray-800 rounded-md overflow-hidden">
              <div className="p-4 bg-gray-750 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Categories</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {allCategories.map((category, index) => (
                    <li key={index}>
                      <Link 
                        to={`/blog/category/${category.toLowerCase()}`} 
                        className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Popular Tags */}
            <div className="bg-gray-800 rounded-md overflow-hidden">
              <div className="p-4 bg-gray-750 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Popular Tags</h3>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="inline-block text-sm bg-gray-700 text-gray-300 px-3 py-1 rounded-md hover:bg-gray-600 transition-colors">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gray-800 rounded-md overflow-hidden">
              <div className="p-4 bg-gray-750 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Newsletter</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4">
                  Subscribe to our newsletter for the latest articles and lighting tips.
                </p>
                <form>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 mb-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button variant="primary" fullWidth>
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;