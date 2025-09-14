import React, { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
// hello
    // TODO: Call dsdyour backend login API here
    console.log("Login with:", { username, password });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        {/* Logo / App Title */}
        <h1 className="text-2xl font-bold text-center text-green-600 mb-6">
          WhatsApp Automation
        </h1>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-green-600 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
