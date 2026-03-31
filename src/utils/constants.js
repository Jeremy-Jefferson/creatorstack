// Application constants

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  APP: '/app',
  DASHBOARD: '/app/dashboard',
  PRODUCTS: '/app/products',
  PRODUCT_NEW: '/app/products/new',
  PRODUCT_DETAIL: '/app/products/:productId',
  PRODUCT_EDIT: '/app/products/:productId/edit',
  ORDERS: '/app/orders',
  CUSTOMERS: '/app/customers',
  ANALYTICS: '/app/analytics',
  STOREFRONT: '/app/storefront',
  BILLING: '/app/billing',
  SETTINGS: '/app/settings',
  STORE: '/store/:storeSlug',
  STORE_PRODUCT: '/store/:storeSlug/products/:productSlug',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDER_SUCCESS: '/order-success',
};

// Product types
export const PRODUCT_TYPES = {
  DIGITAL: 'digital',
  PRINT: 'print',
  MERCH: 'merch',
};

// Product statuses
export const PRODUCT_STATUSES = {
  ACTIVE: 'active',
  DRAFT: 'draft',
  ARCHIVED: 'archived',
};

// Order statuses
export const ORDER_STATUSES = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded',
};

// Toast types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

// Local storage keys
export const STORAGE_KEYS = {
  USER: 'creatorstack_user',
  CART: 'creatorstack_cart',
};

// API endpoints (for future use)
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    SIGNUP: '/auth/signup',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  PRODUCTS: {
    BASE: '/products',
    BY_ID: (id) => `/products/${id}`,
  },
  ORDERS: {
    BASE: '/orders',
    BY_ID: (id) => `/orders/${id}`,
    STATUS: (id) => `/orders/${id}/status`,
  },
  CUSTOMERS: {
    BASE: '/customers',
    BY_ID: (id) => `/customers/${id}`,
  },
  ANALYTICS: {
    OVERVIEW: '/analytics/overview',
    REVENUE: '/analytics/revenue',
  },
  BILLING: {
    SUMMARY: '/billing/summary',
    PLANS: '/billing/plans',
    INVOICES: '/billing/invoices',
  },
  STOREFRONT: {
    CONFIG: '/storefront/config',
  },
};

// Validation rules
export const VALIDATION = {
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MESSAGE: 'Please enter a valid email address',
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MESSAGE: 'Password must be at least 8 characters',
  },
  STUDIO_NAME: {
    MIN_LENGTH: 2,
    MESSAGE: 'Studio name must be at least 2 characters',
  },
  PRICE: {
    MIN: 0,
    MESSAGE: 'Price must be a valid positive number',
  },
};

// Date formats
export const DATE_FORMATS = {
  SHORT: { month: 'short', day: 'numeric' },
  LONG: { month: 'long', day: 'numeric', year: 'numeric' },
  FULL: { month: 'short', day: 'numeric', year: 'numeric' },
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PER_PAGE: 10,
  PER_PAGE_OPTIONS: [10, 25, 50, 100],
};

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
};
