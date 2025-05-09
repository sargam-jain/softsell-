import LLMChat from "./LLMChat";
import { useEffect, useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" }
  ]);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    setChatHistory((prev) => [
      ...prev,
      { sender: "user", text: chatInput },
      { sender: "bot", text: "Thanks! We'll get back to you shortly." },
    ]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Toggle Button */}
      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded shadow z-50"
      >
        {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white p-6 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-2">Resell Your Software Licenses</h1>
        <p className="text-lg">Turn unused licenses into cash with SoftSell</p>
        <button className="mt-4 px-6 py-2 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
          Get a Quote
        </button>
      </header>

      {/* How It Works Section */}
      <section className="mt-12 text-center px-4">
        <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-5xl mb-2">📤</div>
            <h3 className="font-bold">1. Upload License</h3>
            <p className="text-sm">Provide license details through our form.</p>
          </div>
          <div>
            <div className="text-5xl mb-2">💡</div>
            <h3 className="font-bold">2. Get Valuation</h3>
            <p className="text-sm">We analyze and offer a fair price.</p>
          </div>
          <div>
            <div className="text-5xl mb-2">💸</div>
            <h3 className="font-bold">3. Get Paid</h3>
            <p className="text-sm">Receive secure payment quickly.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-12 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>⚡ Fast and Secure Process</li>
          <li>📞 Expert Support</li>
          <li>💰 Fair Valuation</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12 text-center px-4">
        <h2 className="text-2xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <p className="italic">"SoftSell made the resale process simple and fast!"</p>
            <p className="mt-2 font-bold">– Alice Johnson, IT Lead, TechCorp</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <p className="italic">"Got more than expected for unused software. Highly recommended!"</p>
            <p className="mt-2 font-bold">– Bob Smith, Manager, CodeBase Ltd.</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-12 text-center px-4 mb-16">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            className="border p-2 rounded dark:bg-gray-800 dark:border-gray-600"
            placeholder="Name"
            required
          />
          <input
            type="email"
            className="border p-2 rounded dark:bg-gray-800 dark:border-gray-600"
            placeholder="Email"
            required
          />
          <input
            type="text"
            className="border p-2 rounded dark:bg-gray-800 dark:border-gray-600"
            placeholder="Company"
          />
          <select
            className="border p-2 rounded dark:bg-gray-800 dark:border-gray-600"
            required
          >
            <option value="">Select License Type</option>
            <option value="os">OS</option>
            <option value="productivity">Productivity</option>
            <option value="design">Design</option>
          </select>
          <textarea
            className="border p-2 rounded dark:bg-gray-800 dark:border-gray-600"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </section>

      
        
    <LLMChat />
    </div>
  );
}
