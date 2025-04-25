import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Choose the Perfect Lighting for Each Room',
    excerpt: 'Learn about the ideal lighting solutions for different spaces in your home, from kitchens to bedrooms.',
    content: 'Choosing the right lighting for your home is crucial for both functionality and ambiance. Each room has specific lighting needs based on the activities typically performed there. For example, kitchens benefit from bright, task-oriented lighting over work surfaces combined with ambient lighting for general illumination. In living rooms, a combination of floor lamps, table lamps, and possibly recessed lighting creates a layered effect that can be adjusted for different occasions. Bedrooms generally need a combination of ambient lighting with task lighting for reading. Bathrooms require bright, even lighting around mirrors to eliminate shadows on the face. When selecting fixtures, consider the color temperature as well — cooler lights (4000K+) are energizing and good for workspaces, while warmer lights (2700K-3000K) create a cozy, relaxing atmosphere ideal for living rooms and bedrooms.',
    author: 'Emma Rodriguez',
    publishedAt: '2025-03-15',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    tags: ['home lighting', 'interior design', 'lighting tips'],
    category: 'Interior Design'
  },
  {
    id: '2',
    title: 'Smart Lighting: Transform Your Home with Intelligent Solutions',
    excerpt: 'Discover how smart lighting can enhance your living space, save energy, and simplify your daily routine.',
    content: 'Smart lighting represents one of the most accessible and impactful ways to modernize your home. With features like remote control via smartphone apps, voice command capability through virtual assistants, and programmable schedules, smart lighting systems offer unprecedented convenience and customization. Beyond the novelty, these systems provide practical benefits such as energy savings through automatic shutoff when rooms are unoccupied, or dimming capabilities that reduce electricity consumption. Integration with other smart home devices allows for coordinated scenes — imagine your lights automatically dimming when you start a movie, or gradually brightening in the morning as part of your wake-up routine. Installation is typically straightforward, with many systems operating wirelessly and requiring minimal technical knowledge. As you build your smart lighting environment, consider starting with high-traffic areas like living rooms and kitchens before expanding to the entire home.',
    author: 'Michael Chang',
    publishedAt: '2025-03-10',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    tags: ['smart home', 'automation', 'LED lighting'],
    category: 'Smart Home'
  },
  {
    id: '3',
    title: 'Energy-Efficient Lighting: Save Money While Saving the Planet',
    excerpt: 'Explore how energy-efficient lighting options can reduce your carbon footprint and lower your electricity bills.',
    content: 'Making the switch to energy-efficient lighting is one of the simplest yet most effective steps toward reducing both environmental impact and utility costs. LED bulbs, now the industry standard for efficiency, use up to 90% less energy than traditional incandescent bulbs and last up to 25 times longer. This translates to significant savings over time — the average household can save hundreds of dollars annually by converting entirely to LED lighting. Beyond basic bulb replacement, strategic lighting design can further enhance efficiency. Natural light harvesting, which involves positioning fixtures to complement available daylight, can drastically reduce daytime energy consumption. Motion sensors and timers eliminate wasteful illumination of unoccupied spaces. When shopping for efficient lighting, look for ENERGY STAR certification and pay attention to lumens (brightness) rather than wattage (energy consumption). With proper planning, your lighting upgrade can pay for itself through energy savings within just a few years.',
    author: 'Sarah Johnson',
    publishedAt: '2025-03-05',
    image: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg',
    tags: ['energy efficiency', 'LED lighting', 'sustainability'],
    category: 'Sustainability'
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function searchBlogPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) || 
    post.excerpt.toLowerCase().includes(lowerQuery) || 
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)));
}