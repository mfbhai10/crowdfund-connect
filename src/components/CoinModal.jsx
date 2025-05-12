const CoinModal = ({ show, onClose, amount }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
        <h2 className="text-xl font-semibold mb-2">Coins Added!</h2>
        <p className="mb-4">You have added {amount} coins to your balance.</p>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CoinModal;