"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState(""); // replaces email
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email: username, // Supabase still expects an email
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/admin");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 p-6">
      <h1
        className={`text-4xl md:text-5xl font-extrabold text-white mb-12 opacity-0 transform scale-90 transition-all duration-700 ease-out ${
          animate ? "opacity-100 scale-100" : ""
        }`}
      >
        Welcome, God&apos;s Own
      </h1>

      <form
        onSubmit={handleLogin}
        className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full mb-5 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full mb-5 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        {errorMsg && (
          <p className="text-red-600 mb-4 text-center font-medium">
            {errorMsg}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-md transition-colors duration-300"
        >
          Log In
        </button>
      </form>
    </main>
  );
}
