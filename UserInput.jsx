export const UserInput = ({inputCust,onChangeCustInput}) => {

  console.log(inputCust)

  return (
    <section id="user-input">
      <div className="input-group">
         <p>
            <label>Beginning Investment</label>
            <input
              type="number" value={inputCust.begInvestment}
              required onChange={(e)=> onChangeCustInput("begInvestment", e.target.value)}
            />
         </p>
         <p>
            <label>Annual Investment</label>
            <input
              type="number" value={inputCust.annInvestment}
              required onChange={(e)=> onChangeCustInput("annInvestment", e.target.value)}
            />
         </p>
         <p>
            <label>Return Investment</label>
            <input
              type="number"  value={inputCust.returnInvestment}
              required onChange={(e)=> onChangeCustInput("returnInvestment", e.target.value)}
            />
         </p>
         <p>
            <label>Yearly Investment</label>
            <input
              type="number" value={inputCust.yearInvestment}
              required onChange={(e)=> onChangeCustInput("yearInvestment", e.target.value)}
            />
         </p>
      </div>
    </section>
  );
};
