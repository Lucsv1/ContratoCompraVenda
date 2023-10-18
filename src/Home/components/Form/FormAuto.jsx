import React from "react";
import {
  FormBase,
  FormBaseAll,
  TituloForm,
} from "../../Styled/StyledComponets";
import { BotaoBase, BotaoDiv } from "../../Styled/StyledComponets";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const FormAuto = (props) => {
  const navigate = useNavigate();

  return (
    <FormBase>
      <TituloForm>
        <h3>Dados do cliente</h3>
      </TituloForm>
      <div>
        <form action="">
          <label>Marca:</label>
          <input
            value={props.marca}
            onChange={(txt) => {
              props.setMarca([txt.target.value]);
            }}
            placeholder="Marca do veiculo"
            type="text"
          />
          <label>Modelo</label>
          <input
            value={props.modelo}
            onChange={(txt) => {
              props.setModelo([txt.target.value]);
            }}
            placeholder="Modelo do veiculo"
            type="text"
          />
          <label>Ano Fabricação:</label>
          <input
            value={props.anoFab}
            onChange={(txt) => {
              props.setAnoFab([txt.target.value]);
            }}
            placeholder="Ano fabricação"
            type="text"
          />
          <label>Ano modelo</label>
          <input
            value={props.anoMod}
            onChange={(txt) => {
              props.setAnoMod([txt.target.value]);
            }}
            placeholder="Ano Modelo"
            type="text"
          />
          <label>Chassi</label>
          <input
            value={props.chassi}
            onChange={(txt) => {
              props.setCahssi([txt.target.value]);
            }}
            placeholder="Chassi"
            type="text"
          />
          <label>Cor</label>
          <input
            value={props.cor}
            onChange={(txt) => {
              props.setCor([txt.target.value]);
            }}
            placeholder="Cor do veiculo"
            type="text"
          />
          <label>Placa</label>
          <input
            value={props.placa}
            onChange={(txt) => {
              props.setPlaca([txt.target.value]);
            }}
            placeholder="Placa do veiculo"
            type="text"
          />
          <label>Categoria:</label>
          <input
            value={props.categoria}
            onChange={(txt) => {
              props.setCategoria([txt.target.value]);
            }}
            placeholder="Particular ou Aluguel"
            type="text"
          />
          <label>Renavam:</label>
          <input
            value={props.renavam}
            onChange={(txt) => {
              props.setRenavam([txt.target.value]);
            }}
            placeholder="Registro Renavam"
            type="text"
          />
        </form>
        <BotaoBase>
          <BotaoDiv
            onClick={() => {
              navigate("/Pay");
            }}
          >
            Salvar
          </BotaoDiv>
        </BotaoBase>
      </div>
    </FormBase>
  );
};
