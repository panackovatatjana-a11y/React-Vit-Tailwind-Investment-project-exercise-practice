import { Header } from "./components/Header.jsx";
import { UserInput } from "./components/UserInput.jsx";
import {useState} from "react";
import {OutputData} from './components/OutputData.jsx';
import { calculateInvestmentResults } from "./util/investment.js";
import { generateReport} from "./util/generateReport.js";



function App() {

   const [inputCust, setInputCust] = useState({
       begInvestment:4000,
       annInvestment:1200,
       returnInvestment:6,
       yearInvestment:15,
     })
     const userEnterValid=inputCust.yearInvestment>=1

      function callUserInput(inputIde,val) {
    setInputCust((prev)=>({
           ...prev,
           [inputIde]:+val

    }))
   }
   function handleGenerateDoc() {
   const resData = calculateInvestmentResults(inputCust);
   generateReport({ ...inputCust, results: resData });
}


   return (
      <>
         <Header/>
         <UserInput inputCust={inputCust} onChangeCustInput={callUserInput} />
         {!userEnterValid && <p className="center">Please ensure that the Years invested are greater than zero</p>}
         {userEnterValid &&<OutputData inputVal={inputCust}/>}
         <div className="center">
            <button onClick={handleGenerateDoc()}>Download DOCX report</button>

         </div>
      </>
   )
}

export default App
