"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    if (password === "clinic@123") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-[#F8F4EC] to-orange-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white">
        
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-4xl">
            🌿
          </div>

          <h1 className="text-4xl font-bold text-green-900">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-3">
            Charak Ayurveda Care Center Management
          </p>
        </div>

        <div className="space-y-5">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 bg-white rounded-2xl px-5 py-4 pr-20 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-medium text-green-700 hover:text-green-900"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition"
          >
            Login
          </button>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          © 2026 Charak Ayurveda Care Center
        </div>
      </div>
    </div>
  );
}