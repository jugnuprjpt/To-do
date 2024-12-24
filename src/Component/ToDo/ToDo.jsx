import React, { useState } from "react";

function ToDo() {
  const [data, setData] = useState("");
  const [storeData, setStoreData] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (data.length > 0) {
      if (editId === null) {
        setStoreData((prev) => [
          ...prev,
          { id: Date.now(), text: data, isDone: false },
        ]);
        setData("");
      } else {
        setStoreData((prev) =>
          prev.map((item) =>
            item.id === editId ? { ...item, text: data } : item
          )
        );
        setData("");
      }
    } else {
      setData("");
    }
  };

  const handleDelete = (getData) => {
    setStoreData(storeData.filter((getDelete) => getDelete !== getData));
  };

  const handleDone = (getDone) => {
    const dataValue = storeData.map((item) =>
      item.text === getDone.text ? { ...item, isDone: !item.isDone } : item
    );
    setStoreData(dataValue);
  };

  const handleEdit = (editData) => {
    setData(editData.text);
    setEditId(editData.id);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">To-Do List</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter a task"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            onClick={handleSubmit}
            type="submit"
          >
            {editId === null ? "Add" : "Update"}
          </button>
        </div>

        <div>
          {storeData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 border border-gray-200 rounded-lg mb-2 bg-gray-50 hover:bg-gray-100"
            >
              <span
                className={`text-sm ${
                  item.isDone ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {item.text}
              </span>
              <div className="flex space-x-2">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-red-600 focus:ring-2 focus:ring-red-400"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
                <button
                  className={`${
                    item.isDone
                      ? "bg-gray-400 text-white"
                      : "bg-green-500 text-white"
                  } px-3 py-1 rounded-lg text-xs hover:bg-green-600 focus:ring-2 focus:ring-green-400`}
                  onClick={() => handleDone(item)}
                >
                  {item.isDone ? "Undo" : "Done"}
                </button>
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded-lg text-xs hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDo;
