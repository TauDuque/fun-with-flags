import React from "react";

const Country = ({
  isFrance,
  isGuine,
  isIrlanda,
  isItalia,
  isMali,
  isRomenia,
  isBelgica,
  isPeru,
  isNigeria,
  isCosta,
}) => {
  if (isFrance) {
    return <h4>França</h4>;
  }
  if (isGuine) {
    return <h4>Guiné</h4>;
  }
  if (isIrlanda) {
    return <h4>Irlanda</h4>;
  }
  if (isItalia) {
    return <h4>Itália</h4>;
  }
  if (isMali) {
    return <h4>Mali</h4>;
  }
  if (isRomenia) {
    return <h4>Romênia</h4>;
  }
  if (isBelgica) {
    return <h4>Bélgica</h4>;
  }
  if (isPeru) {
    return <h4>Perú</h4>;
  }
  if (isNigeria) {
    return <h4 className="nigeria-style">Nigéria</h4>;
  }
  if (isCosta) {
    return <h4>Costa do Marfim</h4>;
  } else {
    return <h4 className="country-style">Country</h4>;
  }
};

export default Country;
