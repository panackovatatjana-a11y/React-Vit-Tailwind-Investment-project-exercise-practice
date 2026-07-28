import { calculateInvestmentResults, formatter } from "../util/investment";

export function OutputData({ inputVal }) {
  const resData = calculateInvestmentResults(inputVal);

  if (!resData || resData.length === 0) {
    return <p className="center">Please enter a duration greater than zero.</p>;
  }

  const initialInvestment = inputVal.begInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest Year</th>
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
