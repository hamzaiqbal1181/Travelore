import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

// --- The list is now updated to include another domain ---
const allowedDomains = [
  "gmail.com",
  "hotmail.com",
  "yahoo.com",
  "outlook.com",
  "icloud.com",
  "mul.edu.pk",
  "protonmail.com", // Example: Allowing ProtonMail users
];

function isValidDomain(email) {
  const domain = email.split("@")[1]?.toLowerCase();
  return allowedDomains.includes(domain);
}

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (!isValidDomain(email)) {
      setError("Only approved email providers are allowed.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);
      alert(
        "Signup successful! A verification email has been sent to your inbox."
      );
      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };

  // ... the rest of your JSX remains the same ...
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h2>
        {error && (
          <div className="text-red-500 mb-4 bg-red-100 p-3 rounded text-center">
            {error}
          </div>
        )}
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
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password (at least 6 characters)"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-4 transition-colors"
        >
          Sign Up
        </button>
        <div className="text-center text-sm">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
