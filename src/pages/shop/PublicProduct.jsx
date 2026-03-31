import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Download, Package, Truck } from 'lucide-react';
import { Button, Badge } from '../../components/ui';
import { products, storefrontConfig } from '../../data';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';

const typeIcons = {
  digital: Download,
  print: Package,
  merch: Truck,
};

export default function PublicProduct() {
  const { productSlug } = useParams();
  const { itemCount, addItem } = useCart();
  const toast = useToast();
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#7C859A] mb-4">Product not found</p>
          <Link to="/store/astra-vale">
            <Button variant="secondary">Back to Store</Button>
          </Link>
        </div>
      </div>
    );
  }

  const TypeIcon = typeIcons[product.type];

  const handleAddToCart = () => {
    addItem(product, 1);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      {/* Header */}
      <header className="border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/store/astra-vale" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6FE7E0] to-[#6FE7E0]/60 flex items-center justify-center">
              <span className="text-[#0B0B0F] font-bold text-sm">AV</span>
            </div>
            <span className="font-semibold text-[#F5F7FB]">{storefrontConfig.brand.name}</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/store/astra-vale" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">
              Shop
            </Link>
            <Link to="/cart" className="relative text-[#7C859A] hover:text-[#A8B0C2] transition-colors">
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#6FE7E0] text-[#0B0B0F] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link to="/store/astra-vale" className="inline-flex items-center gap-2 text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-2xl bg-[#111218] border border-white/[0.08] flex items-center justify-center">
            <span className="text-8xl">🎨</span>
          </div>

          {/* Details */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="default" size="sm">{product.category}</Badge>
              <Badge variant={product.type === 'digital' ? 'primary' : product.type === 'print' ? 'info' : 'magenta'} size="sm">
                {product.type}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold text-[#F5F7FB] mb-3">{product.name}</h1>
            <p className="text-[#A8B0C2] mb-6">{product.description}</p>

            <div className="text-3xl font-bold text-[#F5F7FB] mb-6">${product.price.toFixed(2)}</div>

            <div className="space-y-4 mb-8">
              {product.type === 'digital' && (
                <div className="flex items-center gap-3 text-sm text-[#A8B0C2]">
                  <Download size={16} className="text-[#6FE7E0]" />
                  Instant download · {product.fileSize} · {product.format}
                </div>
              )}
              {product.type === 'print' && (
                <>
                  <div className="flex items-center gap-3 text-sm text-[#A8B0C2]">
                    <Package size={16} className="text-[#60A5FA]" />
                    {product.dimensions} · {product.paper}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#A8B0C2]">
                    <Truck size={16} className="text-[#60A5FA]" />
                    Ships in 3-5 business days
                  </div>
                </>
              )}
              {product.type === 'merch' && (
                <>
                  <div className="flex items-center gap-3 text-sm text-[#A8B0C2]">
                    <Package size={16} className="text-[#E1066D]" />
                    {product.material}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#A8B0C2]">
                    <Truck size={16} className="text-[#E1066D]" />
                    Ships in 3-5 business days
                  </div>
                </>
              )}
            </div>

            {product.sizes && (
              <div className="mb-6">
                <label className="text-sm text-[#7C859A] block mb-2">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="w-12 h-10 rounded-lg border border-white/[0.08] bg-[#171922] text-sm text-[#A8B0C2] hover:border-[#6FE7E0]/40 hover:text-[#F5F7FB] transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
            </div>

            {product.stock !== null && product.stock < 30 && (
              <p className="text-sm text-[#F59E0B] mt-4">Only {product.stock} left in stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
