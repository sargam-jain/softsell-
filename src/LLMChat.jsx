import { useState } from "react";

const EXAMPLES = [
  "How do I sell my license?",
  "What license types do you accept?",
  "How fast will I get paid?",
];

const LLMChat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! Ask me anything about selling your license." },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://cleverbot.io/1.0/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: "demo-user", // Public test credentials
          key: "demo-key",   // These are from Cleverbot.io documentation
          input: input,
        }),
      });

      const data = await response.json();
      const reply = data.output || "Sorry, I couldn't understand that.";

      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "⚠️ Something went wrong. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 w-80 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg p-4 z-50">
      <h2 className="font-bold mb-2">💡Need Help? Ask SoftSell Bot</h2>
      <div className="text-xs text-gray-600 dark:text-gray-300 mb-2">Examples:</div>
      <ul className="mb-3">
        {EXAMPLES.map((q, idx) => (
          <li
            key={idx}
            className="cursor-pointer text-sm underline mb-1"
            onClick={() => setInput(q)}
          >
            • {q}
          </li>
        ))}
      </ul>

      <div className="h-40 overflow-y-auto bg-gray-50 dark:bg-gray-700 rounded p-2 mb-2 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`mb-1 ${m.role === "user" ? "text-right" : "text-left"}`}
          >
            <span className="inline-block bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
              {m.content}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 p-1 border rounded dark:bg-gray-700 dark:border-gray-600"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-600 text-white px-2 rounded hover:bg-blue-700"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default LLMChat;
