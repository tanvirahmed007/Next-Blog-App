"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../global/css/login.css";

export default function Authentication() {
  const [userCode, setUserCode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userCode, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Login successful - redirect to dashboard
        router.push("/dashboard");
      } else {
        // Login failed
        setError(data.error || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");
    const toggleButton = document.getElementById("togglePassword");
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "🔒";
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "👁️";
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Welcome to BlogApp</h1>
        <p>Sign in to access your dashboard</p>
      </div>
      
      <form className="login-form" onSubmit={handleSubmit}>
        {error && (
          <div className="error-message" id="errorMessage">
            {error}
          </div>
        )}
        
        <div className="form-group">
          <label htmlFor="userCode">User Code</label>
          <input
            type="text"
            id="userCode"
            placeholder="Enter your user code"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              id="togglePassword"
              onClick={togglePasswordVisibility}
            >
              👁️
            </button>
          </div>
        </div>
        
        <div className="remember-forgot">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>
        
        <button
          type="submit"
          className="login-button"
          id="loginButton"
          disabled={isLoading}
        >
          {isLoading ? "Authenticating..." : "Sign In"}
        </button>
        
        <div className="signup-link">
          Don't have an account? <a href="#">Contact administrator</a>
        </div>
      </form>
    </div>
  );
}