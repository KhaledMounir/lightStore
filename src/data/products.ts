import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Pendant Light',
    description: 'Elegant pendant light with adjustable height, perfect for dining rooms and kitchen islands. Features dimmable LED with warm to cool white temperature control.',
    price: 129.99,
    discountPrice: 99.99,
    images: [
      'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg',
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
    ],
    category: 'indoor',
    features: [
      'Adjustable height',
      'Dimmable LED light',
      'Color temperature control (2700K-5000K)',
      'Energy efficient - only 18W',
      '50,000 hour lifespan'
    ],
    specifications: {
      'Dimensions': '12" diameter × 48" max height',
      'Material': 'Brushed aluminum and glass',
      'Bulb Type': 'Integrated LED',
      'Wattage': '18W',
      'Lumens': '1600lm',
      'Voltage': '120V',
      'Color Temperature': '2700K-5000K (adjustable)',
      'Warranty': '5 years'
    },
    stock: 15,
    rating: 4.7,
    reviewCount: 124,
    isFeatured: true,
    relatedProducts: ['3', '5', '7']
  },
  {
    id: '2',
    name: 'Smart LED Bulb Pack',
    description: 'Set of 4 smart LED bulbs compatible with Alexa, Google Home, and Apple HomeKit. Control via app or voice commands for the perfect lighting in any situation.',
    price: 59.99,
    images: [
      'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
      'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg',
    ],
    category: 'smart',
    features: [
      'Works with Alexa, Google Assistant, and Apple HomeKit',
      'Millions of colors and white temperatures',
      'Schedule and automation capabilities',
      'Group control for multiple bulbs',
      'Music sync feature'
    ],
    specifications: {
      'Bulb Type': 'A19 E26',
      'Wattage': '9W (60W equivalent)',
      'Lumens': '800lm',
      'Lifespan': '25,000 hours',
      'Connectivity': 'Wi-Fi 2.4GHz, Bluetooth',
      'Dimensions': '2.4" diameter × 4.2" height',
      'Warranty': '2 years'
    },
    stock: 42,
    rating: 4.5,
    reviewCount: 256,
    isFeatured: true,
    isNew: true,
    relatedProducts: ['4', '8', '9']
  },
  {
    id: '3',
    name: 'Solar Garden Pathway Lights',
    description: 'Set of 6 solar-powered garden pathway lights with auto on/off feature. Weather-resistant design with warm white LEDs for beautiful garden illumination.',
    price: 49.99,
    discountPrice: 39.99,
    images: [
      'https://images.pexels.com/photos/3302537/pexels-photo-3302537.jpeg',
      'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg',
    ],
    category: 'outdoor',
    features: [
      'Solar powered - no wiring needed',
      'Auto on at dusk, off at dawn',
      'Weather and rust resistant',
      'Easy installation, no tools required',
      '8-10 hours of illumination when fully charged'
    ],
    specifications: {
      'Dimensions': '16.5" height × 4.7" diameter',
      'Material': 'Stainless steel and tempered glass',
      'Light Color': 'Warm white (3000K)',
      'Solar Panel': '2V 100mA polycrystalline',
      'Battery': '1.2V 600mAh Ni-MH rechargeable',
      'Charge Time': '6-8 hours of direct sunlight',
      'Waterproof Rating': 'IP65',
      'Warranty': '1 year'
    },
    stock: 78,
    rating: 4.3,
    reviewCount: 189,
    relatedProducts: ['1', '7', '10']
  },
  {
    id: '4',
    name: 'Minimalist Table Lamp',
    description: 'Contemporary table lamp with touch control and 3 brightness levels. Perfect for bedside tables, offices, or living room side tables.',
    price: 79.99,
    images: [
      'https://images.pexels.com/photos/6492402/pexels-photo-6492402.jpeg',
      'https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg',
    ],
    category: 'decorative',
    features: [
      'Touch control with 3 brightness levels',
      'USB charging port built-in',
      'Contemporary minimalist design',
      'Soft, glare-free illumination',
      'Energy efficient LED'
    ],
    specifications: {
      'Dimensions': '9" × 5" × 14" height',
      'Material': 'Metal base with fabric shade',
      'Bulb Type': 'Integrated LED',
      'Wattage': '8W',
      'Lumens': '650lm',
      'Color Temperature': '3000K (warm white)',
      'Cable Length': '5 feet',
      'Warranty': '2 years'
    },
    stock: 23,
    rating: 4.6,
    reviewCount: 107,
    relatedProducts: ['2', '8', '11']
  },
  {
    id: '5',
    name: 'Recessed LED Ceiling Lights',
    description: 'Pack of 4 ultra-thin recessed LED ceiling lights with baffle trim. Easy installation and energy-efficient design for modern homes.',
    price: 89.99,
    images: [
      'https://images.pexels.com/photos/534433/pexels-photo-534433.jpeg',
      'https://images.pexels.com/photos/4050323/pexels-photo-4050323.jpeg',
    ],
    category: 'energy-efficient',
    features: [
      'Ultra-thin profile (0.5" depth)',
      'Simple retrofit installation',
      'Dimmable from 10-100%',
      'IC-rated for direct contact with insulation',
      'Even light distribution with no hot spots'
    ],
    specifications: {
      'Dimensions': '6" diameter × 0.5" depth',
      'Cutout Size': '6.25"',
      'Wattage': '12W (75W equivalent)',
      'Lumens': '900lm each, 3600lm total',
      'Color Temperature': '3000K (warm white)',
      'Beam Angle': '110 degrees',
      'Lifespan': '35,000 hours',
      'Warranty': '5 years'
    },
    stock: 56,
    rating: 4.8,
    reviewCount: 312,
    isFeatured: true,
    relatedProducts: ['1', '7', '12']
  },
  {
    id: '6',
    name: 'Custom Chandelier',
    description: 'Customizable statement chandelier for entryways, dining rooms, or large living spaces. Choose from multiple finishes and configurations.',
    price: 299.99,
    images: [
      'https://images.pexels.com/photos/133640/pexels-photo-133640.jpeg',
      'https://images.pexels.com/photos/267151/pexels-photo-267151.jpeg',
    ],
    category: 'custom',
    features: [
      'Customizable arm configuration',
      'Multiple finish options (brushed nickel, matte black, brass)',
      'Adjustable height installation',
      'Compatible with smart bulbs',
      'Statement piece for luxury spaces'
    ],
    specifications: {
      'Dimensions': '32" diameter × adjustable height',
      'Material': 'Metal frame with glass accents',
      'Bulb Type': 'E26 base, 6 sockets',
      'Recommended Bulb': '60W equivalent LED',
      'Weight': '18 lbs',
      'Voltage': '120V',
      'Warranty': '10 years'
    },
    stock: 8,
    rating: 4.9,
    reviewCount: 87,
    relatedProducts: ['1', '5', '12']
  }
];

export const featuredProducts = products.filter(product => product.isFeatured);
export const newArrivals = products.filter(product => product.isNew);

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) || 
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery));
}