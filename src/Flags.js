import { useEffect, useState } from "react";
import Country from "./Country";

const Flags = () => {
  //hooks para troca de cores
  const [primeiraCor, setPrimeiraCor] = useState("white");
  const [segundaCor, setSegundaCor] = useState("blue");
  const [terceiraCor, setTerceiraCor] = useState("black");
  //hooks paras checar as cores da primeira coluna
  const [isFirstBlueOn, setIsFirstBlueOn] = useState(false);
  console.log(isFirstBlueOn);
  const [isFirstBlackOn, setIsFirstBlackOn] = useState(false);
  const [isFirstGreenOn, setIsFirstGreenOn] = useState(false);
  const [isFirstRedOn, setIsFirstRedOn] = useState(false);
  const [isFirstOrangeOn, setIsFirstOrangeOn] = useState(false);
  const [isFirstWhiteOn, setIsFirstWhiteOn] = useState(false);
  const [isFirstYellow, setIsFirstYellowOn] = useState(false);
  //hooks para checar as cores da segunda coluna
  const [isSecondWhiteOn, setIsSecondWhiteOn] = useState(false);
  const [isSecondBlackOn, setIsSecondBlackOn] = useState(false);
  const [isSecondRedOn, setIsSecondRedOn] = useState(false);
  const [isSecondGreenOn, setIsSecondGreenOn] = useState(false);
  const [isSecondBlueOn, setIsSecondBlueOn] = useState(false);
  const [isSecondYellowOn, setIsSecondYellowOn] = useState(false);
  const [isSecondOrangeOn, setIsSecondOrangeOn] = useState(false);
  console.log(isSecondWhiteOn);

  //hooks paras checar as cores da terceira coluna
  const [isThirdRedOn, setIsThirdRedOn] = useState(false);
  const [isThirdWhiteOn, setIsThirdWhiteOn] = useState(false);
  const [isThirdGreenOn, setIsThirdGreenOn] = useState(false);
  const [isThirdBlueOn, setIsThirdBlueOn] = useState(false);
  const [isThirdYellowOn, setIsThirdYellowOn] = useState(false);
  const [isThirdOrangeOn, setIsThirdOrangeOn] = useState(false);
  const [isThirdBlackOn, setIsThirdBlackOn] = useState(false);
  console.log(isThirdRedOn);

  //hooks para checar bandeiras
  const [isFrance, setIsFrance] = useState(false);
  const [isBelgica, setIsBelgica] = useState(false);
  const [isPeru, setIsPeru] = useState(false);
  const [isNigeria, setIsNigeria] = useState(false);
  const [isItaly, setIsItaly] = useState(false);
  const [isRomenia, setIsRomenia] = useState(false);
  const [isGuine, setIsGuine] = useState(false);
  const [isMali, setIsMali] = useState(false);
  const [isIrlanda, setIsIrlanda] = useState(false);
  const [isCosta, setIsCosta] = useState(false);

  console.log(isFrance);

  const cores = ["black", "green", "red", "orange", "white", "blue", "yellow"];

  const primeiraCorFundo = () => {
    const index = Math.floor(Math.random() * 7);
    setPrimeiraCor(cores[index]);
    if (cores[index] === "blue") {
      setIsFirstBlueOn(true);
    } else {
      setIsFirstBlueOn(false);
    }
    if (cores[index] === "black") {
      setIsFirstBlackOn(true);
    } else {
      setIsFirstBlackOn(false);
    }
    if (cores[index] === "red") {
      setIsFirstRedOn(true);
    } else {
      setIsFirstRedOn(false);
    }
    if (cores[index] === "green") {
      setIsFirstGreenOn(true);
    } else {
      setIsFirstGreenOn(false);
    }
    if (cores[index] === "orange") {
      setIsFirstOrangeOn(true);
    } else {
      setIsFirstOrangeOn(false);
    }
    if (cores[index] === "yellow") {
      setIsFirstYellowOn(true);
    } else {
      setIsFirstYellowOn(false);
    }
    if (cores[index] === "white") {
      setIsFirstWhiteOn(true);
    } else {
      setIsFirstWhiteOn(false);
    }
  };

  const segundaCorFundo = () => {
    const index = Math.floor(Math.random() * 7);
    setSegundaCor(cores[index]);
    if (cores[index] === "blue") {
      setIsSecondBlueOn(true);
    } else {
      setIsSecondBlueOn(false);
    }
    if (cores[index] === "black") {
      setIsSecondBlackOn(true);
    } else {
      setIsSecondBlackOn(false);
    }
    if (cores[index] === "red") {
      setIsSecondRedOn(true);
    } else {
      setIsSecondRedOn(false);
    }
    if (cores[index] === "green") {
      setIsSecondGreenOn(true);
    } else {
      setIsSecondGreenOn(false);
    }
    if (cores[index] === "orange") {
      setIsSecondOrangeOn(true);
    } else {
      setIsSecondOrangeOn(false);
    }
    if (cores[index] === "yellow") {
      setIsSecondYellowOn(true);
    } else {
      setIsSecondYellowOn(false);
    }
    if (cores[index] === "white") {
      setIsSecondWhiteOn(true);
    } else {
      setIsSecondWhiteOn(false);
    }
  };

  const terceiraCorFundo = () => {
    const index = Math.floor(Math.random() * 7);
    setTerceiraCor(cores[index]);
    if (cores[index] === "blue") {
      setIsThirdBlueOn(true);
    } else {
      setIsThirdBlueOn(false);
    }
    if (cores[index] === "black") {
      setIsThirdBlackOn(true);
    } else {
      setIsThirdBlackOn(false);
    }
    if (cores[index] === "red") {
      setIsThirdRedOn(true);
    } else {
      setIsThirdRedOn(false);
    }
    if (cores[index] === "green") {
      setIsThirdGreenOn(true);
    } else {
      setIsThirdGreenOn(false);
    }
    if (cores[index] === "orange") {
      setIsThirdOrangeOn(true);
    } else {
      setIsThirdOrangeOn(false);
    }
    if (cores[index] === "yellow") {
      setIsThirdYellowOn(true);
    } else {
      setIsThirdYellowOn(false);
    }
    if (cores[index] === "white") {
      setIsThirdWhiteOn(true);
    } else {
      setIsThirdWhiteOn(false);
    }
  };

  useEffect(() => {
    if (
      isFirstBlueOn === true &&
      isSecondWhiteOn === true &&
      isThirdRedOn === true
    ) {
      console.log("foi foi foi");
      setIsFrance(true);
    } else {
      console.log("ihhh");
      setIsFrance(false);
    }
    if (
      isFirstBlackOn === true &&
      isSecondYellowOn === true &&
      isThirdRedOn === true
    ) {
      setIsBelgica(true);
    } else {
      setIsBelgica(false);
    }
    if (
      isFirstGreenOn === true &&
      isSecondWhiteOn === true &&
      isThirdOrangeOn === true
    ) {
      setIsIrlanda(true);
    } else {
      setIsIrlanda(false);
    }
    if (
      isFirstBlueOn === true &&
      isSecondYellowOn === true &&
      isThirdRedOn === true
    ) {
      setIsRomenia(true);
    } else {
      setIsRomenia(false);
    }
    if (
      isFirstOrangeOn === true &&
      isSecondWhiteOn === true &&
      isThirdGreenOn === true
    ) {
      setIsCosta(true);
    } else {
      setIsCosta(false);
    }
    if (
      isFirstRedOn === true &&
      isSecondYellowOn === true &&
      isThirdGreenOn === true
    ) {
      setIsGuine(true);
    } else {
      setIsGuine(false);
    }
    if (
      isFirstRedOn === true &&
      isSecondWhiteOn === true &&
      isThirdRedOn === true
    ) {
      setIsPeru(true);
    } else {
      setIsPeru(false);
    }
    if (
      isFirstGreenOn === true &&
      isSecondWhiteOn === true &&
      isThirdGreenOn === true
    ) {
      setIsNigeria(true);
    } else {
      setIsNigeria(false);
    }
    if (
      isFirstGreenOn === true &&
      isSecondYellowOn === true &&
      isThirdRedOn === true
    ) {
      setIsMali(true);
    } else {
      setIsMali(false);
    }
    if (
      isFirstGreenOn === true &&
      isSecondWhiteOn === true &&
      isThirdRedOn === true
    ) {
      setIsItaly(true);
    } else {
      setIsItaly(false);
    }
  }, [
    isFrance,
    isCosta,
    isGuine,
    isRomenia,
    isIrlanda,
    isNigeria,
    isPeru,
    isBelgica,
    isFirstBlueOn,
    isFirstOrangeOn,
    isFirstGreenOn,
    isFirstRedOn,
    isFirstBlackOn,
    isSecondWhiteOn,
    isSecondYellowOn,
    isThirdRedOn,
    isThirdOrangeOn,
    isThirdGreenOn,
  ]);
  return (
    <div className="container">
      {isFrance === false ? (
        <img src="./shelly.jpg" alt="Sheldon Cooper" className="shelly" />
      ) : (
        <img
          src="./bazinga-shelly1.jpg"
          alt="Sheldon Cooper Bazinga"
          className="shellyB"
        />
      )}
      {isFrance === false ? (
        <h3 className="palavras2">fun&nbsp;with&nbsp;flags</h3>
      ) : (
        <h3 className="palavras1">Bazinga!!!</h3>
      )}

      <div className="flag-container">
        <div
          style={{ background: primeiraCor }}
          className="primeiraCor"
          id="primeiraCor"
          onMouseEnter={() => primeiraCorFundo()}
        ></div>
        <div
          style={{ background: segundaCor }}
          className="segundaCor"
          id="segundaCor"
          onMouseEnter={() => segundaCorFundo()}
        ></div>
        <div
          style={{ background: terceiraCor }}
          className="terceiraCor"
          id="terceiraCor"
          onMouseEnter={() => terceiraCorFundo()}
        ></div>
      </div>
      <Country
        isFrance={isFrance}
        isGuine={isGuine}
        isIrlanda={isIrlanda}
        isItalia={isItaly}
        isMali={isMali}
        isRomenia={isRomenia}
        isNigeria={isNigeria}
        isPeru={isPeru}
        isBelgica={isBelgica}
        isCosta={isCosta}
      />
    </div>
  );
};

export default Flags;
