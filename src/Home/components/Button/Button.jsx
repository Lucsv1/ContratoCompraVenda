import React from "react";
import { BotaoBase, BotaoDiv } from "../../Styled/StyledComponets";
import { useNavigate } from "react-router-dom";

export const Botao = (props) => {
  

  const navigate = useNavigate();

  return (
    <BotaoBase>
      <BotaoDiv
        onClick={() => {
          navigate("Contrato");
        }}
      >
        Salvar
      </BotaoDiv>
    </BotaoBase>
  );
};
