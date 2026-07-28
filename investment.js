//ThiS function expects a JS object as an argument
//The project should contain the following properties
//-begInvestment: THe initial investment amount
//-annInvestment: The amount invested every year
//-returnInvestment: The expected (annual rate of return)
//-yearInvestment: The investment year1Inve(time frame)
 export function calculateInvestmentResults({
      begInvestment,
      annInvestment,
      returnInvestment,
      yearInvestment,


 }) {
    const annualData = [];
    let investmentValue = begInvestment;

    for (let i = 0; i < yearInvestment; i++) {
        const interestEarnedInYear = investmentValue  * (returnInvestment /100 );
        investmentValue += interestEarnedInYear + annInvestment;
        annualData.push ({
            year: i+1, //year identifier
            interest: interestEarnedInYear, //the amount of interest earned in this year
            valueEndOfYear: investmentValue, // investment of value earned at end of year
            annInvestment: annInvestment, //investment added in this year



        });
    }
  return annualData;
 }
 //the browser provides Intl API is used to prepare a formatter object
 //This object offers a "format()" method that can be used to format numbers as currency
 //Example usage:formatter.format(1000) => yields "$1000"

 export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits:0,
    maximumFractionDigits:0,


 });