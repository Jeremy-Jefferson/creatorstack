import { Link } from 'react-router-dom';
import { ShoppingCart, Share2, ArrowRight, Download, Package, Truck } from 'lucide-react';
import { Button, Badge } from '../../components/ui';
import { AppFooter } from '../../components/layout';
import { storefrontConfig, products } from '../../data';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';

const typeIcons = {
  digital: Download,
  print: Package,
  merch: Truck,
};

const typeBadgeColors = {
  digital: 'primary',
  print: 'info',
  merch: 'magenta',
};

export default function Storefront() {
  const { itemCount, addItem } = useCart();
  const toast = useToast();
  const featuredProducts = products.filter((p) => storefrontConfig.sections.featuredProducts.productIds.includes(p.id));

  const handleAddToCart = (product) => {
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      {/* Header */}
      <header className="border-b border-white/[0.08] sticky top-0 bg-[#0B0B0F]/90 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/store/astra-vale" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6FE7E0] to-[#6FE7E0]/60 flex items-center justify-center">
              <span className="text-[#0B0B0F] font-bold text-sm">AV</span>
            </div>
            <span className="font-semibold text-[#F5F7FB]">{storefrontConfig.brand.name}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-[#F5F7FB]">Home</Link>
            <Link to="/store/astra-vale/products" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">Products</Link>
            <a href="#about" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">About</a>
          </nav>
          <Link to="/cart" className="relative text-[#7C859A] hover:text-[#A8B0C2] transition-colors">
            <ShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#6FE7E0] text-[#0B0B0F] text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Hero */}
      {storefrontConfig.hero.enabled && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#6FE7E0]/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto px-6 py-24 text-center relative">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F5F7FB] mb-4">
              {storefrontConfig.hero.headline}
            </h1>
            <p className="text-lg text-[#7C859A] max-w-xl mx-auto mb-8">
              {storefrontConfig.hero.subheadline}
            </p>
            <Link to="/store/astra-vale/products">
              <Button size="lg">
                {storefrontConfig.hero.ctaText}
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Featured Products */}
      {storefrontConfig.sections.featuredProducts.enabled && (
        <section className="py-20 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-[#F5F7FB] mb-2">{storefrontConfig.sections.featuredProducts.title}</h2>
              <p className="text-[#7C859A]">{storefrontConfig.sections.featuredProducts.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => {
                const TypeIcon = typeIcons[product.type];
                return (
                  <div key={product.id} className="group">
                    <div className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.12] transition-colors">
                      <div className="aspect-square bg-[#1E2230] relative overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge variant={typeBadgeColors[product.type]} size="sm">{product.type}</Badge>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <TypeIcon size={12} className="text-[#7C859A]" />
                          <span className="text-xs text-[#7C859A]">{product.category}</span>
                        </div>
                        <h3 className="text-sm font-medium text-[#F5F7FB] mb-1 group-hover:text-[#6FE7E0] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-xs text-[#7C859A] mb-3 line-clamp-2">{product.shortDescription}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-[#6FE7E0]">${product.price.toFixed(2)}</span>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Link to="/store/astra-vale/products">
                <Button variant="secondary">
                  View All Products
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About */}
      {storefrontConfig.sections.about.enabled && (
        <section id="about" className="py-20 border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-[#F5F7FB] mb-4">{storefrontConfig.sections.about.title}</h2>
                <p className="text-[#A8B0C2] leading-relaxed">{storefrontConfig.sections.about.content}</p>
              </div>
              <div className="aspect-[4/3] rounded-2xl bg-[#111218] border border-white/[0.08] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60"
                  alt="Creative studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      {storefrontConfig.sections.newsletter.enabled && (
        <section className="py-20 border-t border-white/[0.05]">
          <div className="max-w-xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-[#F5F7FB] mb-2">{storefrontConfig.sections.newsletter.title}</h2>
            <p className="text-[#7C859A] mb-6">{storefrontConfig.sections.newsletter.subtitle}</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder={storefrontConfig.sections.newsletter.placeholder}
                className="flex-1 bg-[#171922] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#F5F7FB] placeholder:text-[#7C859A] focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40"
              />
              <Button>{storefrontConfig.sections.newsletter.buttonText}</Button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <AppFooter />
    </div>
  );
}
