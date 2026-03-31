import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { Button, Input } from '../../components/ui';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import CreatorStackLockLogo from '../../assets/CreatorStackLock.svg';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: 'studio@astravale.com',
    password: 'password',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      await login(formData.email, formData.password);
      toast.success('Welcome back!');
      
      // Navigate to the page user was trying to access, or dashboard
      const from = location.state?.from?.pathname || '/app/dashboard';
      navigate(from, { replace: true });
    } catch {
      setErrors({ submit: 'Invalid email or password. Please try again.' });
      toast.error('Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] flex">
      {/* Left side - branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#111218] items-center justify-center p-12">
        <div className="max-w-md">
          <div className="flex items-center gap-4">
            <img src={CreatorStackLockLogo} alt="Creator Stack" className="h-8 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-[#F5F7FB] mb-4">
            Welcome back to your creative studio
          </h1>
          <p className="text-[#7C859A] text-lg">
            Manage your products, track orders, and grow your creator business from one powerful dashboard.
          </p>
        </div>
      </div>

      {/* Right side - form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6FE7E0] to-[#6FE7E0]/60 flex items-center justify-center">
              <span className="text-[#0B0B0F] font-bold">AV</span>
            </div>
            <span className="text-xl font-semibold text-[#F5F7FB]">CreatorStack</span>
          </div>

          <h2 className="text-2xl font-bold text-[#F5F7FB] mb-2">Sign in</h2>
          <p className="text-sm text-[#7C859A] mb-8">
            Enter your credentials to access your dashboard
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {errors.submit && (
              <div className="p-3 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-sm" role="alert">
                {errors.submit}
              </div>
            )}

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="studio@astravale.com"
              icon={Mail}
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              icon={Lock}
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#A8B0C2] cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="rounded border-white/[0.08] bg-[#171922] text-[#6FE7E0] focus:ring-[#6FE7E0]/40"
                  aria-label="Remember me"
                />
                Remember me
              </label>
              <a href="#" className="text-[#6FE7E0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 rounded">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <ArrowRight size={16} />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-[#7C859A] text-center mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#6FE7E0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 rounded">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
