import { calculateInvestmentResults, formatter } from "../util/investment";

export function OutputData({ inputVal }) {
  const resData = calculateInvestmentResults(inputVal);


  const initialInvestment =
    resData[0].valueEndOfYear -
    resData[0].interest -
    resData[0].annInvestment;

  console.log(resData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th> 
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th> 
        </tr>
      </thead>

      <tbody>
        {resData.map((yearData) => {
        
          const totalInterest =
            yearData.valueEndOfYear -
            initialInvestment -
            yearData.annInvestment * yearData.year;

          const investedCapital =
            initialInvestment + yearData.annInvestment * yearData.year;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>

              <td>{formatter.format(yearData.valueEndOfYear)}</td>

              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>

              
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
