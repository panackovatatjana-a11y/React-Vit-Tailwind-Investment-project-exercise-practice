import { useState } from "react";

export default function InvestmentCalculator() {
  const [input, setInput] = useState({
    initialInvestment: "10000",
    annualInvestment: "1200",
    expectedReturn: "6",
    duration: "10",
  });

  const handleInputChange = (field, value) => {
    setInput((prev) => ({
      ...prev,
      [field]: value, // ❌ BUG: value is stored as STRING
    }));
  };

  const calculateInvestment = () => {
    const results = [];

    let currentValue = input.initialInvestment; // ❌ still a string

    for (let i = 0; i < input.duration; i++) {
      const interest = currentValue * (input.expectedReturn / 100); // ❌ string * number → NaN
      currentValue += interest + input.annualInvestment; // ❌ string + number → concatenation
      results.push({ year: i + 1, value: currentValue });
    }

    return results;
  };

  const results = calculateInvestment();

  return (
    <div>
      <h2>Investment Calculator</h2>

      <input
        type="number"
        value={input.initialInvestment}
        onChange={(e) => handleInputChange("initialInvestment", e.target.value)}
      />

      <button>Calculate</button>

      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}
