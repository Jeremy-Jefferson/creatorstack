import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ToastProvider } from './contexts/ToastContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Toast from './components/ui/Toast';
import AppShell from './layouts/AppShell';

// Marketing pages
import Landing from './pages/marketing/Landing';

// Auth pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

// App pages
import Dashboard from './pages/app/Dashboard';
import Products from './pages/app/Products';
import ProductDetail from './pages/app/ProductDetail';
import ProductForm from './pages/app/ProductForm';
import Orders from './pages/app/Orders';
import Customers from './pages/app/Customers';
import Analytics from './pages/app/Analytics';
import Storefront from './pages/app/Storefront';
import Billing from './pages/app/Billing';
import Settings from './pages/app/Settings';

// Shop pages
import PublicStorefront from './pages/shop/Storefront';
import PublicProducts from './pages/shop/Products';
import PublicProduct from './pages/shop/PublicProduct';
import Cart from './pages/shop/Cart';
import Checkout from './pages/shop/Checkout';
import OrderSuccess from './pages/shop/OrderSuccess';

// System pages
import NotFound from './pages/system/NotFound';

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <ToastProvider>
              <Routes>
                {/* Marketing */}
                <Route path="/" element={<Landing />} />

                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* App (logged-in) */}
                <Route
                  path="/app"
                  element={
                    <ProtectedRoute>
                      <AppShell />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate to="/app/dashboard" replace />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="products" element={<Products />} />
                  <Route path="products/new" element={<ProductForm />} />
                  <Route path="products/:productId" element={<ProductDetail />} />
                  <Route path="products/:productId/edit" element={<ProductForm />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="customers" element={<Customers />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="storefront" element={<Storefront />} />
                  <Route path="billing" element={<Billing />} />
                  <Route path="settings" element={<Settings />} />
                </Route>

                {/* Public storefront */}
                <Route path="/store/:storeSlug" element={<PublicStorefront />} />
                <Route path="/store/:storeSlug/products" element={<PublicProducts />} />
                <Route path="/store/:storeSlug/products/:productSlug" element={<PublicProduct />} />

                {/* Shop */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Toast />
            </ToastProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
