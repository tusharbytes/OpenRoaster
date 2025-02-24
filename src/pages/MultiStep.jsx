import { useState } from "react";
import Container from "../common/Container";

const options = [
  "Woman-Led",
  "Artificial Intelligence",
  "Startups",
  "Disruptors",
  "Sustainable",
  "B Corp Certified",
  "Tech Unicorns",
  "Social Impact",
  "Direct-to-Consumer",
  "FinTech",
  "Lifestyle",
  "Subscription-Based",
  "High Growth",
  "Transformation",
  "Large Enterprise",
];

export default function MultiStep() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  const handleSelectAll = () => {
    setSelectedOptions((prev) =>
      prev.length === options.length ? [] : options
    );
  };

  return (
    <div className="p-4 flex items-center h-screen">
        <div>
      <h2 className="text-center text-lg font-semibold mb-4">
        What type of organizations are you interested in?
      </h2>

      <div className="flex flex-wrap justify-center gap-2 m-auto">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className={`px-4 py-2 rounded border border-black transition 
              ${selectedOptions.includes(option) ? "bg-black text-white" : "bg-white text-black"}`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-4 flex justify-center items-center">
        <input
          type="checkbox"
          id="selectAll"
          onChange={handleSelectAll}
          checked={selectedOptions.length === options.length}
          className="mr-2"
        />
        <label htmlFor="selectAll" className="text-sm cursor-pointer">
          Select All
        </label>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => console.log(selectedOptions)}
          className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Continue
        </button>
      </div>
      </div>
    </div>
  );
}
