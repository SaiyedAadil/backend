import React from "react";

function TipCalculator() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-green-200 font-mono text-2xl">
      <h1 className="mb-5 text-3xl font-mono">Tip Calculator</h1>
      <main className="w-4/5 h-96 bg-white p-4 rounded-2xl shadow-green-600 shadow-2xl flex gap-4">
        {/* Left Section */}
        <div className="w-1/2 p-4 grid gap-4">
          {/* Bill Input */}
          <div>
            <h3>Bill</h3>
            <input
              type="number"
              placeholder="0.00"
              className="w-full bg-gray-200 outline-green-600 p-2 rounded-md"
              min="0"
              max="10000.00"
              step="0.01"
              required
              aria-required="true"
              aria-label="Bill Amount"
            />
          </div>

          {/* Tip Selection */}
          <div>
            <h3>Select Tip %</h3>
            <div className="grid grid-cols-3 items-center justify-center gap-2">
              <Buttons value="5%" />
              <Buttons value="10%" />
              <Buttons value="15%" />
              <Buttons value="25%" />
              <Buttons value="50%" />
              <Buttons>
                <input
                  type="number"
                  placeholder="Custom%"
                  className="w-full text-xl bg-gray-200 text-black outline-green-600 p-2 rounded-md"
                />
              </Buttons>
            </div>
          </div>

          {/* Number of People */}
          <div>
            <h3>Number of People</h3>
            <input
              type="number"
              placeholder="0.00"
              className="w-full bg-gray-200 outline-green-600 p-2 rounded-md"
              min="0"
              max="10000.00"
              step="1"
              required
              aria-required="true"
              aria-label="Number of People"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-1/2 p-5 bg-green-800 rounded-md text-lime-500">
          {/* Tip Amount */}
          <div className="flex justify-between mb-4">
            <div>
              <h3 className="text-white">Tip Amount</h3>
              <p className="text-green-200 text-xs">/ person</p>
            </div>
            <div>$0.00</div>
          </div>

          {/* Total */}
          <div className="flex justify-between mb-4">
            <div>
              <h3 className="text-white">Total</h3>
              <p className="text-green-200 text-xs">/ person</p>
            </div>
            <div>$0.00</div>
          </div>

          {/* Reset Button */}
          <div className="w-full flex justify-center items-center">
            <button className="absolute bottom-5 left-6 w-[90%] p-3 bg-white text-xl text-green-800 rounded-md hover:bg-lime-400">
              Reset
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
const Buttons = function ({ children, value }) {
  return (
    <>
      <button
        className={`text-white  grid text-center bg-green-700 rounded-md hover:bg-lime-400`}
      >
        {children || value}
      </button>
    </>
  );
};

export default TipCalculator;
