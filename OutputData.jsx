import { useState, useMemo, useEffect } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";
import { generateReport } from "../util/generateReport";

export function OutputData({ inputVal }) {
  const [deferredInputVal, setDeferredInputVal] = useState(inputVal);

  // compute results memoized
  const resData = useMemo(() => {
    return calculateInvestmentResults(inputVal);
  }, [inputVal]);

  // manage loading state when inputVal changes
  useEffect(() => {
    const t = setTimeout(() => setDeferredInputVal(inputVal), 300);
    return () => clearTimeout(t);
  }, [inputVal]);

  const loading = deferredInputVal !== inputVal;

  // Loading state
  if (loading) {
    return <p>Calculating...</p>;
  }

  // Duration validation
  if (inputVal.yearInvestment < 1) {
    return <p className="error">Duration must be at least 1 year.</p>;
  }

  // No results
  if (!resData || resData.length === 0) {
    return <p className="error">Please enter valid inputs.</p>;
  }

  const initialInvestment = inputVal.begInvestment;

  return (
    <>
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

      <button
        className="pdf-btn"
        onClick={() =>
          generateReport({
            ...inputVal,
            results: resData,
          })
        }
      >
        Download PDF Report
      </button>
    </>
  );
}
