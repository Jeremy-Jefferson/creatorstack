import { Link } from 'react-router-dom';
import { Lock, CreditCard } from 'lucide-react';
import { Button, Input, Badge } from '../../components/ui';
import { useCart } from '../../hooks/useCart';

export default function Checkout() {
  const { items, subtotal } = useCart();

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
          <div className="flex items-center gap-2 text-sm text-[#7C859A]">
            <Lock size={14} />
            Secure Checkout
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-[#F5F7FB] mb-8">Checkout</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#7C859A] mb-4">Your cart is empty</p>
            <Link to="/store/astra-vale">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#111218] border border-white/[0.08] rounded-xl p-6">
                <h2 className="text-[#F5F7FB] font-medium mb-4">Contact Information</h2>
                <Input label="Email" type="email" placeholder="your@email.com" />
              </div>

              <div className="bg-[#111218] border border-white/[0.08] rounded-xl p-6">
                <h2 className="text-[#F5F7FB] font-medium mb-4">Payment</h2>
                <div className="space-y-4">
                  <Input label="Card Number" placeholder="4242 4242 4242 4242" icon={CreditCard} />
                  <div className="grid grid-cols-2 gap-4">
                    <Input label="Expiry" placeholder="MM/YY" />
                    <Input label="CVC" placeholder="123" />
                  </div>
                  <Input label="Name on Card" placeholder="Full name" />
                </div>
              </div>

              <Link to="/order-success" className="block">
                <Button className="w-full" size="lg">
                  <Lock size={16} />
                  Pay ${subtotal.toFixed(2)}
                </Button>
              </Link>
            </div>

            {/* Summary */}
            <div>
              <div className="bg-[#111218] border border-white/[0.08] rounded-xl p-5 sticky top-6">
                <h3 className="text-[#F5F7FB] font-medium mb-4">Order Summary</h3>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.productId} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#1E2230] flex items-center justify-center">
                          <span>🎨</span>
                        </div>
                        <div>
                          <p className="text-sm text-[#F5F7FB]">{item.product?.name}</p>
                          <p className="text-xs text-[#7C859A]">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-sm text-[#A8B0C2]">
                        ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/[0.08] pt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#7C859A]">Subtotal</span>
                    <span className="text-[#A8B0C2]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7C859A]">Tax</span>
                    <span className="text-[#A8B0C2]">$0.00</span>
                  </div>
                  <div className="border-t border-white/[0.08] pt-2 flex justify-between">
                    <span className="text-[#F5F7FB] font-medium">Total</span>
                    <span className="text-[#F5F7FB] font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
