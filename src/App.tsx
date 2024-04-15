import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  const [name, setName] = useState(() => {
    return "loan";
  });
  console.log("oki");

  return (
    <>
      <div>{name}</div>
    </>
  );
}

export default App;
