import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '../../components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-[#6FE7E0] mb-2">404</p>
        <h1 className="text-xl font-semibold text-[#F5F7FB] mb-2">Page not found</h1>
        <p className="text-sm text-[#7C859A] mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary">
            <Home size={16} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
