import { createContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

// Helper to get initial user from localStorage
const getInitialUser = () => {
  try {
    const storedUser = localStorage.getItem('creatorstack_user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
  } catch {
    localStorage.removeItem('creatorstack_user');
  }
  return null;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getInitialUser);

  const login = useCallback(async (email) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would call your auth API here
    // const response = await authService.login(email, password);

    // Simulate successful login
    const userData = {
      id: 'user-001',
      email,
      name: 'Astra Vale',
      studioName: 'Astra Vale Studio',
      avatar: null,
      createdAt: new Date().toISOString(),
    };

    setUser(userData);
    localStorage.setItem('creatorstack_user', JSON.stringify(userData));

    return userData;
  }, []);

  const signup = useCallback(async (studioName, email) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would call your auth API here
    // const response = await authService.signup(studioName, email, password);

    // Simulate successful signup
    const userData = {
      id: 'user-' + Date.now(),
      email,
      name: studioName,
      studioName,
      avatar: null,
      createdAt: new Date().toISOString(),
    };

    setUser(userData);
    localStorage.setItem('creatorstack_user', JSON.stringify(userData));

    return userData;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('creatorstack_user');
  }, []);

  const updateUser = useCallback((updates) => {
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, ...updates };
      localStorage.setItem('creatorstack_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
