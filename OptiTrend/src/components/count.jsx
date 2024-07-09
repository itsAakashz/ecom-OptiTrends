import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <form className="max-w-xs mx-auto my-auto ">
      <div className="relative flex items-end mt-32 lg:mt-0">
        <button
          type="button"
          onClick={decrement}
          className="flex-shrink-0 bg-[#BEC3C9] inline-flex text-white items-center justify-center border border-gray-300 rounded-md h-10 w-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="counter-input"
          className="flex-shrink-0 text-gray-900 border-0 bg-gray-100 h-10 text-sm text-lg focus:outline-none focus:ring-0 max-w-[5rem] text-center"
          placeholder=""
          value={count}
          readOnly
          required
        />
        <button
          type="button"
          onClick={increment}
          className="flex-shrink-0 bg-[#BEC3C9] inline-flex text-white items-center justify-center border border-gray-300 rounded-md h-10 w-10 focus:ring-gray-100 focus:ring-2 focus:outline-none"

        >
          <svg
            className="w-5 h-5 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Count;