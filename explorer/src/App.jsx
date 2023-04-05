import "./App.css";
import AboutSection from "./Components/AboutSection";
import ChooseSection from "./Components/ChooseSection";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";

function App() {
  let colorArray = ["black", "blue", "red", "yellow", "green", "cyan"];
  let [state, setState] = useState();
  return (
    <div>
      <div className="color-changer">
        <Row>
          {colorArray.map((v, i) => {
            return (
              <Col key={i}>
                <button
                  onClick={() => setState(v)}
                  className="box"
                  style={{ backgroundColor: `${v}` }}
                ></button>
              </Col>
            );
          })}
        </Row>
      </div>
      {console.log(state)}
      <Header />
      <main>
        <HeroSection colors={state} />
        <AboutSection colors={state} />
        <ChooseSection colors={state} />
      </main>
    </div>
  );
}

export default App;
