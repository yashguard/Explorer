import "./App.css";
import AboutSection from "./Components/AboutSection";
import ChooseSection from "./Components/ChooseSection";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";

function App() {
  let colorArray = ["black", "blue", "#dc3545", "yellow", "green", "cyan"];
  let [state, setState] = useState();
  let [check,setCheck] = useState(false);
  return (
    <div>
      <div className="color-changer">
        <Row>
          {colorArray.map((v, i) => {
            const setColor = () => {
              setCheck(true);
              setState(v);
            }
            return (
              <Col key={i}>
                <button
                  onClick={() => setColor()}
                  className="box"
                  style={{ backgroundColor: `${v}` }}
                ></button>
              </Col>
            );
          })}
        </Row>
      </div>
      <Header />
      <main>
        <HeroSection colors={state} check={check} />
        <AboutSection colors={state} check={check} />
        <ChooseSection colors={state} check={check} />
      </main>
    </div>
  );
}

export default App;
