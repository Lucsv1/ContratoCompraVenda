import React from "react";
import {
  FormBase,
  FormBaseAll,
  TituloForm,
} from "../../Styled/StyledComponets";
import { BotaoBase, BotaoDiv } from "../../Styled/StyledComponets";
import { useNavigate } from "react-router-dom";

export const FormPay = (props) => {
  const navigate = useNavigate();

  return (
    <FormBase>
      <TituloForm>
        <h3>Dados do cliente</h3>
      </TituloForm>
      <div>
        <form action="">
          <label>Valor total</label>
          <input
            type="text"
            placeholder="Ex: R$1.000,00 (mil reais)"
            value={props.quantTotal}
            onChange={(txt) => {
              props.setQuantTotal([txt.target.value]);
            }}
          />
          <label>Valor do sinal </label>
          <input
            type="text"
            placeholder="Ex: dando R$1.000,00 (mil reais) de sinal"
            value={props.quantSinal}
            onChange={(txt) => {
              props.setQuantSinal([txt.target.value]);
            }}
          />
          <label>Valor financiado</label>
          <input
            type="text"
            placeholder="Ex: no valor de R$1.000,00 (mil reais)"
            value={props.quantFinanciado}
            onChange={(txt) => {
              props.setQuantFinanciado([txt.target.value]);
            }}
          />
          <label>Valor a vista</label>
          <input
            type="text"
            placeholder="Ex: R$1.000,00 (mil reais) a vista"
            value={props.quantVista}
            onChange={(txt) => {
              props.setQuantVista([txt.target.value]);
            }}
          />
          <label>Banco</label>
          <input
            type="text"
            placeholder="Ex: Financiado pelo banco 'Nome do banco'"
            value={props.banco}
            onChange={(txt) => {
              props.setBanco([txt.target.value]);
            }}
          />
          <label>Observação</label>
          <input
            type="text"
            placeholder="Coloque aqui mais informações"
            value={props.observacao}
            onChange={(txt) => {
                props.setObservacao([txt.target.value])
            }}
          />
        </form>
        <BotaoBase>
          <BotaoDiv
            onClick={() => {
              navigate("/Contrato");
            }}
          >
            Salvar
          </BotaoDiv>
        </BotaoBase>
      </div>
    </FormBase>
  );
};
