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

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newValue,
    }));
  };

  return (
    <>
      <Header />
      <UserInput
        inputCust={userInput}
        onChangeCustInput={handleInputChange}
      />
      <OutputData inputVal={userInput} />
    </>
  );
}

export default App;
