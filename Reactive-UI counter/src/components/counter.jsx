import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevCount) => prevCount - 1);
    }
  };
  return (
    <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div class="text-2xl font-semibold">{counter}</div>
      <div class="flex space-x-3">
        <button
          class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          class="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};
