import "./App.css";
import { Header } from "./sections/Header";

import { AboutUs } from "./sections/AboutUs";
import { Program } from "./sections/Program";
import { Dresscode } from "./sections/DressCode";
import { Gifts } from "./sections/Gifts";
import { Cause } from "./sections/Cause";
import { InfoForm } from "./sections/InfoForm";

function App() {
  return (
    <div>
      <div>
        <Header />
        <AboutUs />
        <Program />
        <Dresscode />
        <div className="section-divider"></div>
        <Gifts />
        <div className="section-divider"></div>
        <Cause />
        <InfoForm />
      </div>
    </div>
  );
}

export default App;
