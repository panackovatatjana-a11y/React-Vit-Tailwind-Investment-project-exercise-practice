export const UserInput = ({ inputCust, onChangeCustInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">

        <p>
          <label>Beginning Investment</label>
          <input
            type="number"
            value={inputCust.begInvestment}
            onChange={(e) =>
              onChangeCustInput("begInvestment", e.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={inputCust.annInvestment}
            onChange={(e) =>
              onChangeCustInput("annInvestment", e.target.value)
            }
          />
        </p>

        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            value={inputCust.returnInvestment}
            onChange={(e) =>
              onChangeCustInput("returnInvestment", e.target.value)
            }
          />
        </p>

        <p>
          <label>Duration (Years)</label>
          <input
            type="number"
            value={inputCust.yearInvestment}
            onChange={(e) =>
              onChangeCustInput("yearInvestment", e.target.value)
            }
          />
        </p>

      </div>
    </section>
  );
};
