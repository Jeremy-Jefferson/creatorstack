import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Download, Package, Truck } from 'lucide-react';
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

export default function Products() {
  const { itemCount, addItem } = useCart();
  const toast = useToast();

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
            <Link to="/" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">Home</Link>
            <Link to="/store/astra-vale/products" className="text-sm text-[#F5F7FB]">Products</Link>
            <a href="/store/astra-vale#about" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">About</a>
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

      {/* Page Header */}
      <section className="py-12 border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-[#F5F7FB] mb-2">All Products</h1>
          <p className="text-[#7C859A]">Browse our complete collection of digital art resources, prints, and merchandise</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => {
              const TypeIcon = typeIcons[product.type];
              return (
                <div key={product.id} className="group">
                  <div className="bg-[#111218] border border-white/[0.08] rounded-xl overflow-hidden hover:border-white/[0.12] transition-colors">
                    <Link to={`/store/astra-vale/products/${product.slug}`}>
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
                    </Link>
                    <div className="p-4">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <TypeIcon size={12} className="text-[#7C859A]" />
                        <span className="text-xs text-[#7C859A]">{product.category}</span>
                      </div>
                      <Link to={`/store/astra-vale/products/${product.slug}`}>
                        <h3 className="text-sm font-medium text-[#F5F7FB] mb-1 group-hover:text-[#6FE7E0] transition-colors">
                          {product.name}
                        </h3>
                      </Link>
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
        </div>
      </section>

      {/* Footer */}
      <AppFooter />
    </div>
  );
}
