import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { getBlogPostById, getRecentBlogPosts } from '../data/blog';
import { Card, CardBody } from './ui/Card';
import Button from './ui/Button';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getBlogPostById(id) : undefined;
  const recentPosts = getRecentBlogPosts(3);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog">
            <Button variant="primary">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Back to Blog */}
            <Link to="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
            
            {/* Featured Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />
            
            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  {post.publishedAt}
                </span>
                <span className="flex items-center">
                  <User size={16} className="mr-2" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Tag size={16} className="mr-2" />
                  {post.category}
                </span>
              </div>
            </div>
            
            {/* Article Content */}
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-lg font-medium text-gray-300 mb-6">
                {post.excerpt}
              </p>
              
              <p className="mb-4">{post.content}</p>
              
              <p className="mb-4">
                In addition to these considerations, don't overlook the importance of color temperature in setting the right mood. Cool white lights (4000K-6500K) create an energetic, focused atmosphere ideal for task-oriented spaces like kitchens and offices. Warm white lights (2700K-3000K) generate a cozy, relaxing environment perfect for living rooms and bedrooms. Many modern fixtures offer tunable white functionality, allowing you to adjust the color temperature throughout the day to match your activities and natural circadian rhythms.
              </p>
              
              <p className="mb-4">
                Ultimately, the best lighting solution is one that balances functionality, energy efficiency, aesthetics, and personal preference. Whether you're renovating your entire home or simply updating a single room, thoughtful lighting choices can dramatically transform your space and enhance your daily experience within it.
              </p>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
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
            
            {/* Share Buttons */}
            <div className="border-t border-gray-700 pt-6 mb-8">
              <div className="flex items-center">
                <span className="text-gray-400 mr-4">Share this article:</span>
                <div className="flex space-x-3">
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Facebook size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <div className="flex items-start sm:items-center flex-col sm:flex-row">
                <div className="w-16 h-16 bg-gray-700 rounded-full mr-4 flex-shrink-0 mb-4 sm:mb-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{post.author}</h3>
                  <p className="text-gray-400">
                    Lighting specialist with over 10 years of experience in interior design and energy-efficient solutions. Passionate about helping people transform their spaces with the perfect lighting arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Recent Posts */}
            <div className="bg-gray-800 rounded-md overflow-hidden">
              <div className="p-4 bg-gray-750 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">Recent Articles</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {recentPosts
                    .filter(recentPost => recentPost.id !== post.id)
                    .map(recentPost => (
                      <Link key={recentPost.id} to={`/blog/${recentPost.id}`}>
                        <div className="flex items-start hover:bg-gray-750 p-2 rounded-md transition-colors">
                          <img
                            src={recentPost.image}
                            alt={recentPost.title}
                            className="w-16 h-16 object-cover rounded-md mr-3"
                          />
                          <div>
                            <h4 className="text-white font-medium mb-1 line-clamp-2">
                              {recentPost.title}
                            </h4>
                            <div className="text-xs text-gray-400">
                              {recentPost.publishedAt}
                            </div>
                          </div>
                        </div>
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
                  Stay updated with our latest articles and lighting trends.
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

export default BlogPostPage;