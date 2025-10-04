"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(""); // reset on every submit
    const { error } = await supabase.auth.signInWithPassword({
      email: username,
      password,
    });

    if (error) {
      setErrorMsg("Invalid username or password.");
    } else {
      router.push("/admin");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 via-pink-600 to-red-500 p-6 font-sans">
      <div
        className={`w-full max-w-md bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl p-8 transition-all duration-700 transform ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-8">
          Welcome, God&apos;s Own
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full mb-5 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-black placeholder-gray-500 bg-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-5 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-black placeholder-gray-500 bg-white"
          />

          {errorMsg && (
            <p className="text-sm text-red-600 text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 active:bg-pink-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
