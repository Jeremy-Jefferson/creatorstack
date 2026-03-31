import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button, Badge } from '../../components/ui';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../../hooks/useToast';

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const toast = useToast();

  const handleRemoveItem = (productId, productName) => {
    removeItem(productId);
    toast.info(`${productName} removed from cart`);
  };

  const handleUpdateQuantity = (productId, newQuantity, productName) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId, productName);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F]">
      {/* Header */}
      <header className="border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/store/astra-vale" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6FE7E0] to-[#6FE7E0]/60 flex items-center justify-center">
              <span className="text-[#0B0B0F] font-bold text-sm">AV</span>
            </div>
            <span className="font-semibold text-[#F5F7FB]">Astra Vale Studio</span>
          </Link>
          <Link to="/store/astra-vale" className="text-sm text-[#7C859A] hover:text-[#A8B0C2] transition-colors">
            Continue Shopping
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-[#F5F7FB] mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#7C859A] mb-4">Your cart is empty</p>
            <Link to="/store/astra-vale">
              <Button>
                <ArrowLeft size={16} />
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.productId} className="bg-[#111218] border border-white/[0.08] rounded-xl p-5 flex gap-5">
                  <div className="w-20 h-20 rounded-lg bg-[#1E2230] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-[#F5F7FB] font-medium">{item.product?.name}</h3>
                        <p className="text-sm text-[#7C859A] mt-0.5">{item.product?.shortDescription}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.productId, item.product?.name)}
                        className="text-[#7C859A] hover:text-[#EF4444] transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1, item.product?.name)}
                          className="w-7 h-7 rounded-md bg-[#1E2230] border border-white/[0.08] flex items-center justify-center text-[#A8B0C2] hover:text-[#F5F7FB] transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm text-[#F5F7FB] w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1, item.product?.name)}
                          className="w-7 h-7 rounded-md bg-[#1E2230] border border-white/[0.08] flex items-center justify-center text-[#A8B0C2] hover:text-[#F5F7FB] transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="text-[#F5F7FB] font-medium">
                        ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-[#111218] border border-white/[0.08] rounded-xl p-5 sticky top-6">
                <h3 className="text-[#F5F7FB] font-medium mb-4">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#7C859A]">Subtotal</span>
                    <span className="text-[#A8B0C2]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7C859A]">Tax</span>
                    <span className="text-[#A8B0C2]">$0.00</span>
                  </div>
                  <div className="border-t border-white/[0.08] pt-3 flex justify-between">
                    <span className="text-[#F5F7FB] font-medium">Total</span>
                    <span className="text-[#F5F7FB] font-semibold text-lg">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <Link to="/checkout" className="block mt-6">
                  <Button className="w-full" size="lg">
                    Checkout
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
