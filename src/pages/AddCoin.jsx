import { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddCoin = () => {
  const [input, setInput] = useState("");
  const { addCoins } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(input);
    if (!isNaN(amount) && amount > 0) {
      addCoins(amount);
      toast.success(`${amount} coins added successfully!`);
      setInput("");
      navigate("/");
    } else {
      toast.error("Please enter a valid number of coins.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Add Coins</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter number of coins"
          className="w-full border border-gray-300 p-2 rounded mb-4 text-black dark:bg-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Coins
        </button>
      </form>
    </div>
  );
};

export default AddCoin;