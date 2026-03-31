// API Service Module
// This module provides a centralized way to make API calls
// In a real application, this would connect to your backend API

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

// Helper function to make API requests
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  // Add auth token if available
  const user = localStorage.getItem('creatorstack_user');
  if (user) {
    try {
      const userData = JSON.parse(user);
      if (userData.token) {
        mergedOptions.headers.Authorization = `Bearer ${userData.token}`;
      }
    } catch {
      // Ignore parse errors
    }
  }

  try {
    const response = await fetch(url, mergedOptions);
    return handleResponse(response);
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Authentication API
export const authApi = {
  login: async (email, password) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, this would be:
    // return apiRequest('/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // });

    // Simulate successful login
    return {
      id: 'user-001',
      email,
      name: 'Astra Vale',
      studioName: 'Astra Vale Studio',
      token: 'mock-jwt-token',
      createdAt: new Date().toISOString(),
    };
  },

  signup: async (studioName, email, password) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, this would be:
    // return apiRequest('/auth/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({ studioName, email, password }),
    // });

    // Simulate successful signup
    return {
      id: 'user-' + Date.now(),
      email,
      name: studioName,
      studioName,
      token: 'mock-jwt-token',
      createdAt: new Date().toISOString(),
    };
  },

  logout: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // return apiRequest('/auth/logout', { method: 'POST' });
    
    return { success: true };
  },

  refreshToken: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // return apiRequest('/auth/refresh', { method: 'POST' });
    
    return { token: 'new-mock-jwt-token' };
  },
};

// Products API
export const productsApi = {
  getAll: async (params = {}) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // const queryString = new URLSearchParams(params).toString();
    // return apiRequest(`/products?${queryString}`);
    
    // Return mock data
    const { products } = await import('../data');
    return products;
  },

  getById: async (id) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // In a real app, this would be:
    // return apiRequest(`/products/${id}`);
    
    const { products } = await import('../data');
    return products.find((p) => p.id === id);
  },

  create: async (productData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, this would be:
    // return apiRequest('/products', {
    //   method: 'POST',
    //   body: JSON.stringify(productData),
    // });
    
    return {
      id: 'prod-' + Date.now(),
      ...productData,
      createdAt: new Date().toISOString(),
    };
  },

  update: async (id, productData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, this would be:
    // return apiRequest(`/products/${id}`, {
    //   method: 'PUT',
    //   body: JSON.stringify(productData),
    // });
    
    return {
      id,
      ...productData,
      updatedAt: new Date().toISOString(),
    };
  },

  delete: async (id) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // return apiRequest(`/products/${id}`, { method: 'DELETE' });
    
    return { success: true };
  },
};

// Orders API
export const ordersApi = {
  getAll: async (params = {}) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // const queryString = new URLSearchParams(params).toString();
    // return apiRequest(`/orders?${queryString}`);
    
    const { orders } = await import('../data');
    return orders;
  },

  getById: async (id) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // In a real app, this would be:
    // return apiRequest(`/orders/${id}`);
    
    const { orders } = await import('../data');
    return orders.find((o) => o.id === id);
  },

  updateStatus: async (id, status) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // return apiRequest(`/orders/${id}/status`, {
    //   method: 'PATCH',
    //   body: JSON.stringify({ status }),
    // });
    
    return { id, status, updatedAt: new Date().toISOString() };
  },
};

// Customers API
export const customersApi = {
  getAll: async (params = {}) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // const queryString = new URLSearchParams(params).toString();
    // return apiRequest(`/customers?${queryString}`);
    
    const { customers } = await import('../data');
    return customers;
  },

  getById: async (id) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // In a real app, this would be:
    // return apiRequest(`/customers/${id}`);
    
    const { customers } = await import('../data');
    return customers.find((c) => c.id === id);
  },
};

// Analytics API
export const analyticsApi = {
  getOverview: async (dateRange = {}) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // const queryString = new URLSearchParams(dateRange).toString();
    // return apiRequest(`/analytics/overview?${queryString}`);
    
    const { analyticsOverview } = await import('../data');
    return analyticsOverview;
  },

  getRevenue: async (dateRange = {}) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // const queryString = new URLSearchParams(dateRange).toString();
    // return apiRequest(`/analytics/revenue?${queryString}`);
    
    const { revenueByMonth } = await import('../data');
    return revenueByMonth;
  },
};

// Billing API
export const billingApi = {
  getSummary: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // return apiRequest('/billing/summary');
    
    const { billingSummary } = await import('../data');
    return billingSummary;
  },

  getPlans: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // return apiRequest('/billing/plans');
    
    const { plans } = await import('../data');
    return plans;
  },

  getInvoices: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // return apiRequest('/billing/invoices');
    
    const { invoices } = await import('../data');
    return invoices;
  },
};

// Storefront API
export const storefrontApi = {
  getConfig: async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // In a real app, this would be:
    // return apiRequest('/storefront/config');
    
    const { storefrontConfig } = await import('../data');
    return storefrontConfig;
  },

  updateConfig: async (config) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, this would be:
    // return apiRequest('/storefront/config', {
    //   method: 'PUT',
    //   body: JSON.stringify(config),
    // });
    
    return { ...config, updatedAt: new Date().toISOString() };
  },
};

export default {
  auth: authApi,
  products: productsApi,
  orders: ordersApi,
  customers: customersApi,
  analytics: analyticsApi,
  billing: billingApi,
  storefront: storefrontApi,
};
