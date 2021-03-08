import { useEffect, useState } from "react";
import Country from "./Country";

const Flags = () => {
  //hooks para troca de cores
  const [primeiraCor, setPrimeiraCor] = useState("white");
  const [segundaCor, setSegundaCor] = useState("blue");
  const [terceiraCor, setTerceiraCor] = useState("black");
  //hooks paras checar as cores da primeira coluna
  const [isFirstBlueOn, setIsFirstBlueOn] = useState(false);
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

  //hooks paras checar as cores da terceira coluna
  const [isThirdRedOn, setIsThirdRedOn] = useState(false);
  const [isThirdWhiteOn, setIsThirdWhiteOn] = useState(false);
  const [isThirdGreenOn, setIsThirdGreenOn] = useState(false);
  const [isThirdBlueOn, setIsThirdBlueOn] = useState(false);
  const [isThirdYellowOn, setIsThirdYellowOn] = useState(false);
  const [isThirdOrangeOn, setIsThirdOrangeOn] = useState(false);
  const [isThirdBlackOn, setIsThirdBlackOn] = useState(false);

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

  //hook para mudança de imagem e texto
  const [isFlagOn, setIsFlagOn] = useState(false);

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
      isFrance ||
      isItaly ||
      isMali ||
      isPeru ||
      isRomenia ||
      isGuine ||
      isNigeria ||
      isBelgica ||
      isIrlanda ||
      isCosta
    ) {
      setIsFlagOn(true);
    } else {
      setIsFlagOn(false);
    }
  }, [
    isFrance,
    isFlagOn,
    isItaly,
    isMali,
    isPeru,
    isRomenia,
    isGuine,
    isNigeria,
    isBelgica,
    isIrlanda,
    isCosta,
  ]);

  useEffect(() => {
    if (isFirstBlueOn && isSecondWhiteOn && isThirdRedOn) {
      setIsFrance(true);
    } else {
      setIsFrance(false);
    }
    if (isFirstBlackOn && isSecondYellowOn && isThirdRedOn) {
      setIsBelgica(true);
    } else {
      setIsBelgica(false);
    }
    if (isFirstGreenOn && isSecondWhiteOn && isThirdOrangeOn) {
      setIsIrlanda(true);
    } else {
      setIsIrlanda(false);
    }
    if (isFirstBlueOn && isSecondYellowOn && isThirdRedOn) {
      setIsRomenia(true);
    } else {
      setIsRomenia(false);
    }
    if (isFirstOrangeOn && isSecondWhiteOn && isThirdGreenOn) {
      setIsCosta(true);
    } else {
      setIsCosta(false);
    }
    if (isFirstRedOn && isSecondYellowOn && isThirdGreenOn) {
      setIsGuine(true);
    } else {
      setIsGuine(false);
    }
    if (isFirstRedOn && isSecondWhiteOn && isThirdRedOn) {
      setIsPeru(true);
    } else {
      setIsPeru(false);
    }
    if (isFirstGreenOn && isSecondWhiteOn && isThirdGreenOn) {
      setIsNigeria(true);
    } else {
      setIsNigeria(false);
    }
    if (isFirstGreenOn && isSecondYellowOn && isThirdRedOn) {
      setIsMali(true);
    } else {
      setIsMali(false);
    }
    if (isFirstGreenOn && isSecondWhiteOn && isThirdRedOn) {
      setIsItaly(true);
    } else {
      setIsItaly(false);
    }
  }, [
    isFlagOn,
    isFrance,
    isCosta,
    isGuine,
    isRomenia,
    isIrlanda,
    isNigeria,
    isPeru,
    isBelgica,
    isItaly,
    isMali,
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
      {!isFlagOn ? (
        <img src="./shelly.jpg" alt="Sheldon Cooper" className="shelly" />
      ) : (
        <img
          src="./bazinga-shelly1.jpg"
          alt="Sheldon Cooper Bazinga"
          className="shellyB"
        />
      )}
      {!isFlagOn ? (
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
