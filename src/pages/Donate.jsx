import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

const Donate = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { coins, deductCoins } = useUser();
  const [event, setEvent] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/campaigns.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((e) => e.id === parseInt(eventId));
        setEvent(selected);
      });
  }, [eventId]);

  const handleDonate = () => {
    const num = parseInt(amount);
    if (isNaN(num) || num <= 0) {
      setError("Please enter a valid coin amount.");
      return;
    }

    if (num > coins) {
      setError("Not enough coins to donate!");
      return;
    }

    // Success
    deductCoins(num);
    alert(`Successfully donated ${num} coins to "${event.title}"`);
    navigate("/");
  };

  if (!event) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
      <p className="mb-2">{event.description}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        Raised: {event.raised} / {event.goal} Coins
      </p>

      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
          setError("");
        }}
        placeholder="Enter coins to donate"
        className="w-full border border-gray-300 p-2 rounded mb-3 text-black"
      />

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <button
        onClick={handleDonate}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Donate Now
      </button>
    </div>
  );
};

export default Donate;
