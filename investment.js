export function calculateInvestmentResults({
  begInvestment,
  annInvestment,
  returnInvestment,
  yearInvestment,
}) {
  const annualData = [];
  let investmentValue = begInvestment;

  for (let i = 0; i < yearInvestment; i++) {
    const interestEarnedInYear = investmentValue * (returnInvestment / 100);
    investmentValue += interestEarnedInYear + annInvestment;

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annInvestment: annInvestment,
    });
  }

  return annualData;
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
