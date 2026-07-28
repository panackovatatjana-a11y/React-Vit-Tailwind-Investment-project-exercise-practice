import { calculateInvestmentResults } from "../util/investment";
import { generateReport } from "./util/generateReport";

export function handleGenerateReport(inputValues) {
    const results = calculateInvestmentResults(inputValues);

    const data = {
        begInvestment: inputValues.begInvestment,
        annInvestment: inputValues.annInvestment,
        returnInvestment: inputValues.returnInvestment,
        yearInvestment: inputValues.yearInvestment,
        results: results
    };

    generateReport(data);

}
