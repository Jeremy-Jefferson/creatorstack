import { Link } from 'react-router-dom';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';
import { Button } from '../../components/ui';

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-[#22C55E]" />
        </div>
        <h1 className="text-2xl font-bold text-[#F5F7FB] mb-2">Order Confirmed!</h1>
        <p className="text-[#7C859A] mb-2">Order #ORD-2848</p>
        <p className="text-sm text-[#A8B0C2] mb-8">
          Thank you for your purchase. Your digital products are ready to download.
        </p>

        <div className="bg-[#111218] border border-white/[0.08] rounded-xl p-5 mb-8 text-left">
          <h3 className="text-sm font-medium text-[#F5F7FB] mb-3">Your Downloads</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#A8B0C2]">Nebula Brush Pack v3</p>
                <p className="text-xs text-[#7C859A]">ABR, BRUSHSET · 245 MB</p>
              </div>
              <Button variant="ghost" size="sm">
                <Download size={14} />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#A8B0C2]">Astral Drift Art Print</p>
                <p className="text-xs text-[#7C859A]">Shipping to your address</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link to="/store/astra-vale">
            <Button className="w-full" variant="primary">
              Continue Shopping
              <ArrowRight size={16} />
            </Button>
          </Link>
          <Link to="/store/astra-vale">
            <Button className="w-full" variant="ghost">
              Back to Store
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
