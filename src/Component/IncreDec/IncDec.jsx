import React, { useState } from "react";

function IncDec() {
  const [inc, setInce] = useState(0);

  return (
    <div>
      <h1>Increment Decrement</h1>
      <button onClick={() => setInce(inc + 1)}>Increment</button> &nbsp; &nbsp;
      <span>{inc}</span> &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setInce(inc === 0 ? 0 : inc - 1)}>
        Decrement
      </button>
      <hr />
    </div>
  );
}

export default IncDec;
