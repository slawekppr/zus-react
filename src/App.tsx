import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Button } from "primereact/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
    {/* .container.my-5>h1.text-5xl.bg-primary-500.text-white.p-5{Witaj w ZUS} */}
    <div className="container my-5">
      <h1 className="text-5xl bg-primary-500 text-white p-5">Witaj w ZUS</h1>
    

      <Button>Start</Button>
    
    </div>
    
 
    </>
  );
}

export default App;
