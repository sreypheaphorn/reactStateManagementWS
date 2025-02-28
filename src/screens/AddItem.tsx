import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AddItem = () => {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState("");

  const handleAdd = () => {
    if (itemName.trim()) {
      setItemName(""); // Clear input
      navigate("/"); // Go back to list
    }
  };

  return (
    <div className="p-6 min-h-screen min-w-screen bg-gray-100 flex flex-col items-center justify-center text-black">
      <h1 className="text-2xl font-bold mb-4">Add Shopping Item</h1>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Enter item name"
        className="p-2 border rounded w-full max-w-md mb-4"
      />
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleAdd}
        >
          Save Item
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};