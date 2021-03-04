import { useState } from "react";
import "./Script";
const Flags = () => {
  //hooks para troca de cores
  const [primeiraCor, setPrimeiraCor] = useState("white");
  const [segundaCor, setSegundaCor] = useState("blue");
  const [terceiraCor, setTerceiraCor] = useState("black");
  //hooks paras checar as cores da primeira coluna
  const [isFirstBlueOn, setIsFirstBlueOn] = useState(false);
  console.log(isFirstBlueOn);
  //hooks para checar as cores da segunda coluna
  const [isSecondWhiteOn, setIsSecondWhiteOn] = useState(false);
  console.log(isSecondWhiteOn);

  //hooks paras checar as cores da terceira coluna
  const [isThirdRedOn, setIsThirdRedOn] = useState(false);
  console.log(isThirdRedOn);

  //hooks para checar bandeiras
  const [isFrance, setIsFrance] = useState(false);
  console.log(isFrance);
  const franceFlagFound = () => {
    if (
      isFirstBlueOn === true &&
      isSecondWhiteOn === true &&
      isThirdRedOn === true
    ) {
      setIsFrance(true);
    }
  };

  const primeiraCorFundo = () => {
    if (primeiraCor === "white") {
      setPrimeiraCor("red");
    }
    if (primeiraCor === "red") {
      setPrimeiraCor("blue");
      setIsFirstBlueOn(true);
    }
    if (primeiraCor === "blue") {
      setPrimeiraCor("orange");
    }
    if (primeiraCor === "orange") {
      setPrimeiraCor("black");
    }
    if (primeiraCor === "black") {
      setPrimeiraCor("green");
    }
    if (primeiraCor === "green") {
      setPrimeiraCor("yellow");
    }
    if (primeiraCor === "yellow") {
      setPrimeiraCor("white");
    }
    franceFlagFound();
  };
  const segundaCorFundo = () => {
    if (segundaCor === "blue") {
      setSegundaCor("red");
    }
    if (segundaCor === "red") {
      setSegundaCor("white");
      setIsSecondWhiteOn(true);
    }
    if (segundaCor === "white") {
      setSegundaCor("orange");
    }
    if (segundaCor === "orange") {
      setSegundaCor("green");
    }
    if (segundaCor === "green") {
      setSegundaCor("black");
    }
    if (segundaCor === "black") {
      setSegundaCor("yellow");
    }
    if (segundaCor === "yellow") {
      setSegundaCor("blue");
    }
    franceFlagFound();
  };
  const terceiraCorFundo = () => {
    if (terceiraCor === "black") {
      setTerceiraCor("red");
      setIsThirdRedOn(true);
    }
    if (terceiraCor === "red") {
      setTerceiraCor("white");
      setIsThirdRedOn(false);
    }
    if (terceiraCor === "white") {
      setTerceiraCor("green");
    }
    if (terceiraCor === "green") {
      setTerceiraCor("blue");
    }
    if (terceiraCor === "blue") {
      setTerceiraCor("yellow");
    }
    if (terceiraCor === "yellow") {
      setTerceiraCor("orange");
    }
    if (terceiraCor === "orange") {
      setTerceiraCor("black");
    }
    franceFlagFound();
  };

  return (
    <div className="container">
      <img src="./shelly.jpg" alt="Sheldon Cooper" className="shelly" />
      <div className="flag-container">
        <div
          style={{ background: primeiraCor }}
          className="primeiraCor"
          id="primeiraCor"
          onMouseEnter={primeiraCorFundo}
        ></div>
        <div
          style={{ background: segundaCor }}
          className="segundaCor"
          id="segundaCor"
          onMouseEnter={segundaCorFundo}
        ></div>
        <div
          style={{ background: terceiraCor }}
          className="terceiraCor"
          id="terceiraCor"
          onMouseEnter={terceiraCorFundo}
        ></div>
      </div>
    </div>
  );
};

export default Flags;
