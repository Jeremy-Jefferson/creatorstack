import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { Button, Input } from '../../components/ui';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const toast = useToast();
  const [formData, setFormData] = useState({
    studioName: '',
    email: 'studio@astravale.com',
    password: 'password',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studioName) {
      newErrors.studioName = 'Studio name is required';
    } else if (formData.studioName.length < 2) {
      newErrors.studioName = 'Studio name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      await signup(formData.studioName, formData.email, formData.password);
      toast.success('Account created successfully!');
      navigate('/app/dashboard', { replace: true });
    } catch {
      setErrors({ submit: 'Failed to create account. Please try again.' });
      toast.error('Signup failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] flex">
      {/* Left side - branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#111218] items-center justify-center p-12">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-4">
              <img src="/src/assets/CreatorStackLock.svg" alt="Creator Stack" className="h-8 w-auto" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#F5F7FB] mb-4">
            Start selling your creative work
          </h1>
          <p className="text-[#7C859A] text-lg">
            Join thousands of creators who use CreatorStack to sell digital products, prints, and merchandise.
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

          <h2 className="text-2xl font-bold text-[#F5F7FB] mb-2">Create your account</h2>
          <p className="text-sm text-[#7C859A] mb-8">
            Set up your creator store in minutes
          </p>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {errors.submit && (
              <div className="p-3 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/20 text-[#EF4444] text-sm" role="alert">
                {errors.submit}
              </div>
            )}

            <Input
              label="Studio name"
              type="text"
              name="studioName"
              placeholder="Astra Vale Studio"
              icon={User}
              value={formData.studioName}
              onChange={handleChange}
              error={errors.studioName}
              aria-invalid={!!errors.studioName}
              aria-describedby={errors.studioName ? 'studioName-error' : undefined}
            />

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
              helperText="At least 8 characters"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />

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
                  Creating account...
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight size={16} />
                </>
              )}
            </Button>
          </form>

          <p className="text-sm text-[#7C859A] text-center mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#6FE7E0] hover:underline focus:outline-none focus:ring-2 focus:ring-[#6FE7E0]/40 rounded">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
