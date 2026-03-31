export const storefrontConfig = {
  brand: {
    name: 'Astra Vale Studio',
    tagline: 'Cosmic art, brushes, and goods for creative souls',
    logo: '/logo.svg',
    favicon: '/favicon.svg',
  },
  theme: {
    primaryColor: '#6FE7E0',
    accentColor: '#E1066D',
    backgroundColor: '#0B0B0F',
    surfaceColor: '#111218',
    textColor: '#F5F7FB',
    textSecondary: '#A8B0C2',
    borderRadius: '12px',
    fontFamily: 'Inter',
  },
  hero: {
    enabled: true,
    headline: 'Create Beyond Limits',
    subheadline: 'Premium digital brushes, textures, and art prints for illustrators and designers who push creative boundaries.',
    ctaText: 'Browse Collection',
    ctaLink: '/store/astra-vale/products',
    backgroundImage: '/hero-bg.jpg',
    overlayOpacity: 0.6,
  },
  sections: {
    featuredProducts: {
      enabled: true,
      title: 'Featured',
      subtitle: 'Our most loved creations',
      productIds: ['prod-001', 'prod-002', 'prod-003', 'prod-006'],
    },
    newArrivals: {
      enabled: true,
      title: 'New Arrivals',
      subtitle: 'Fresh drops from the studio',
      productIds: ['prod-006', 'prod-008'],
    },
    about: {
      enabled: true,
      title: 'About the Studio',
      content: 'Astra Vale Studio is an independent illustration and design studio creating premium digital tools, art prints, and collectible merchandise. Every piece is crafted with intention — from brush packs that feel natural in your hand to prints that transform your space.',
      image: '/about-studio.jpg',
    },
    newsletter: {
      enabled: true,
      title: 'Stay in the Loop',
      subtitle: 'Get early access to new drops, exclusive discounts, and studio updates.',
      placeholder: 'your@email.com',
      buttonText: 'Subscribe',
    },
  },
  social: {
    instagram: 'https://instagram.com/astravalestudio',
    twitter: 'https://twitter.com/astravale',
    pinterest: 'https://pinterest.com/astravalestudio',
    dribbble: 'https://dribbble.com/astravale',
  },
  policies: {
    refundPolicy: 'Digital products: 14-day satisfaction guarantee. Physical products: 30-day return window.',
    shippingPolicy: 'Physical items ship within 3-5 business days. Digital products available immediately after purchase.',
    privacyPolicy: 'We respect your privacy and never share your data with third parties.',
  },
};

export const storefrontPages = [
  { name: 'Home', path: '/store/astra-vale' },
  { name: 'Products', path: '/store/astra-vale/products' },
  { name: 'About', path: '/store/astra-vale/about' },
  { name: 'Contact', path: '/store/astra-vale/contact' },
];
