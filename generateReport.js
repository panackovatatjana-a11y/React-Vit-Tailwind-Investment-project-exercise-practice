import jsPDF from "jspdf";

export function generateReport(data) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Investment Report", 10, 10);

  doc.setFontSize(12);

  doc.text(`Beginning Investment: ${data.begInvestment.toFixed(2)}`, 10, 30);
  doc.text(`Annual Investment: ${data.annInvestment.toFixed(2)}`, 10, 40);
  doc.text(`Return on Investment: ${data.returnInvestment}%`, 10, 50);
  doc.text(`Years of Investment: ${data.yearInvestment}`, 10, 60);

  let yOffset = 80;
  const pageHeight = doc.internal.pageSize.height;

  data.results.forEach((year) => {
    doc.text(
      `Year ${year.year}: ${year.valueEndOfYear.toFixed(2)}`,
      10,
      yOffset
    );
    yOffset += 10;

    if (yOffset > pageHeight - 20) {
      doc.addPage();
      yOffset = 20;
    }
  });

  doc.save("investment-report.pdf");
}
