import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProfileMenu = ({ userName, onClose, onChangeName }) => {
  const { coins } = useUser();

  return (
    <div
      className="fixed top-14 right-4 w-56 bg-white text-black rounded shadow-lg p-4 z-50 border dark:bg-gray-800 dark:text-white dark:border-gray-700"
    >
      <p className="font-semibold">{userName}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Coins: {coins}</p>

      <Link
        to="/addcoin"
        className="block bg-blue-600 text-white text-center py-1 px-3 rounded hover:bg-blue-700 mb-2"
        onClick={onClose}
      >
        Add Coins
      </Link>

      <button
        onClick={() => {
          onChangeName();
          onClose();
        }}
        className="w-full text-center bg-gray-200 hover:bg-gray-300 text-sm py-1 px-3 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        Change Name
      </button>
    </div>
  );
};

export default ProfileMenu;