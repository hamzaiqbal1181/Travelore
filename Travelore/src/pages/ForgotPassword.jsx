import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase"; // Make sure this path is correct
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // --- 1. ADDED: New state for loading ---

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setIsLoading(true); // --- 2. ADDED: Set loading to true when the process starts ---

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(
        "If an account with that email exists, a password reset link has been sent to your inbox."
      );
      setEmail("");
    } catch (err) {
      setError(
        "Failed to send reset email. Please check the address and try again."
      );
      console.error("Password Reset Error:", err);
    } finally {
      setIsLoading(false); // --- 3. ADDED: Set loading to false after success OR failure ---
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleResetPassword}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Reset Your Password
        </h2>

        {message && (
          <div className="text-green-600 mb-4 bg-green-100 p-3 rounded text-center">
            {message}
          </div>
        )}

        {error && (
          <div className="text-red-500 mb-4 bg-red-100 p-3 rounded text-center">
            {error}
          </div>
        )}

        <p className="text-gray-600 text-center mb-4">
          Enter your email address and we'll send you a link to get back into
          your account.
        </p>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="your-email@provider.com"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading} // --- 4. ADDED: Disable input while loading ---
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4 transition-colors disabled:bg-blue-300"
          disabled={isLoading} // --- 5. ADDED: Disable button while loading ---
        >
          {/* --- 6. ADDED: Change button text based on loading state --- */}
          {isLoading ? "Sending..." : "Send Password Reset Link"}
        </button>

        <div className="text-center text-sm">
          <Link to="/signin" className="text-blue-600 hover:underline">
            Back to Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
