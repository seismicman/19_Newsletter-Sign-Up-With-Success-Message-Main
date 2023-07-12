import React, { useState } from "react";
import Card from "./component/Card";
import Thank_you from "./component/Thank_you";

function App() {
  const [suscribed, setSuscribed] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      {suscribed ? (
        <Thank_you
          email={email}
          setEmail={setEmail}
          setSuscribed={setSuscribed}
        />
      ) : (
        <Card email={email} setEmail={setEmail} setSuscribed={setSuscribed} />
      )}
    </>
  );
}

export default App;
