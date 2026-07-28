import { useState } from "react";
import Header from "./components/Header";
import { UserInput } from "./components/UserInput";
import { OutputData } from "./components/OutputData";

function App() {
  const [userInput, setUserInput] = useState({
    begInvestment: 10000,
    annInvestment: 1200,
    returnInvestment: 6,
    yearInvestment: 10,
  });

  const [error, setError] = useState("");

  const handleInputChange = (inputIdentifier, newValue) => {
    const numericValue = +newValue;

    if (newValue.trim() === "") {
      setError("Fields cannot be empty.");
      return;
    }

    if (numericValue < 0) {
      setError("Values cannot be negative.");
      return;
    }

    setError("");

    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: numericValue,
    }));
  };

  return (
    <>
      <Header />

      {error && <p className="error">{error}</p>}

      <UserInput
        inputCust={userInput}
        onChangeCustInput={handleInputChange}
      />

      <OutputData inputVal={userInput} />
    </>
  );
}

export default App;
