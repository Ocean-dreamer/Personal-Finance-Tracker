import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  name: string;
  email: string;
  password: string;
  gender: "man" | "woman";
  avatar: string;
}

interface RegisterResponse {
  success: boolean;
  message: string;
  user?: User;
}

const defaultAvatars = {
  man: "/src/assets/avatars/man/avatar1.svg",
  woman: "/src/assets/avatars/woman/avatar1.svg",
};

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>({
    name: "",
    email: "",
    password: "",
    gender: "man",
    avatar: defaultAvatars.man,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      avatar: name === "gender" ? defaultAvatars[value as "man" | "woman"] : prev.avatar,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: RegisterResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Registration successful
      if (data.token) {
        // Store authentication token for subsequent requests
        localStorage.setItem("authToken", data.token);
      }
      
      // Optionally store basic user info (no sensitive data)
      if (data.user) {
        localStorage.setItem("user", JSON.stringify({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          avatar: data.user.avatar
        }));
      }
      
      navigate("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-white">Create Your Account</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-gray-300 hover:bg-white dark:bg-gray-900 dark:text-gray-400 p-4 rounded">
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              placeholder="Your name"
              disabled={isLoading}
            />
          </div>
          
          <div className="bg-gray-300 hover:bg-white dark:bg-gray-900 dark:text-gray-400 p-4 rounded">
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              placeholder="you@example.com"
              disabled={isLoading}
            />
          </div>
          
          <div className="bg-gray-300 hover:bg-white dark:bg-gray-900 dark:text-gray-400 p-4 rounded">
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              placeholder="••••••••"
              disabled={isLoading}
            />
          </div>
          
          <div className="bg-gray-300 hover:bg-white dark:bg-gray-900 dark:text-gray-400 p-4 rounded">
            <label className="block font-medium mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              disabled={isLoading}
            >
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
        
        <p className="text-center text-sm text-white">
          Already have an account? <a href="/login" className="underline hover:text-blue-600">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;