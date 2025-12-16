export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 
  (process.env.NODE_ENV === 'production' 
    ? 'https://api.finonest.org'
    : 'http://localhost:5000');

export const API_ENDPOINTS = {
  AUTH: `${API_BASE_URL}/api/auth`,
  PRODUCTS: `${API_BASE_URL}/api/products`,
  ADMIN: `${API_BASE_URL}/api/admin`,
  USERS: `${API_BASE_URL}/api/users`,
  CAR_VALUATION: `${API_BASE_URL}/api/car-valuation`,
  RC_LOOKUP: `${API_BASE_URL}/api/rc-lookup`,
  HEALTH: `${API_BASE_URL}/health`,
} as const;

// API client configuration
export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // For JWT cookies
};

// Helper function for API calls
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include', // Include cookies for JWT
  });
  
  if (!response.ok) {
    throw new Error(`API call failed: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
};