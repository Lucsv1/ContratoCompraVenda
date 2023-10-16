import React from "react";
import {
  FormBase,
  FormBaseAll,
  TituloForm,
} from "../../Styled/StyledComponets";
import { BotaoBase, BotaoDiv } from "../../Styled/StyledComponets";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

export const Forms = (props) => {

  const navigate = useNavigate();

  return (
    <FormBase>
      <TituloForm>
        <h3>Dados do cliente</h3>
      </TituloForm>
      <div>
        <form action="">
          <label>Nome Completo:</label>
          <input
            value={props.nomeCliente}
            onChange={(txt) => {
              props.setNomeCliente([txt.target.value]);
            }}
            placeholder="Nome Completo"
            type="text"
          />
          <label>Rua:</label>
          <input
            value={props.ruaCliente}
            onChange={(txt) => {
              props.setRuaCliente([txt.target.value]);
            }}
            placeholder="Rua:"
            type="text"
          />
          <label>Numero:</label>
          <input
            value={props.numeroCasaCliente}
            onChange={(txt) => {
              props.setNumeroCasaCliente([txt.target.value]);
            }}
            placeholder="Numero:"
            type="text"
          />
          <label>Bairro:</label>
          <input
            value={props.bairroCliente}
            onChange={(txt) => {
              props.setBairroCliente([txt.target.value]);
            }}
            placeholder="Bairro:"
            type="text"
          />
          <label>Cidade:</label>
          <input
            value={props.cidadeCliente}
            onChange={(txt) => {
              props.setCidadeCliente([txt.target.value]);
            }}
            placeholder="Cidade:"
            type="text"
          />
          <label>Estado:</label>
          <input
            value={props.estadoCliente}
            onChange={(txt) => {
              props.setEstadoCliente([txt.target.value]);
            }}
            placeholder="Estado:"
            type="text"
          />
          <label>Cep</label>
          <input
            value={props.cepCliente}
            onChange={(txt) => {
              props.setCepCliente([txt.target.value]);
            }}
            placeholder="Cep:"
            type="text"
          />
          <label>CPF ou CNPJ do cliente:</label>
          <input
            value={props.numeroCliente}
            onChange={(txt) => {
              props.setNumeroCliente([txt.target.value]);
            }}
            placeholder="CPF/CNPJ"
            type="text"
          />
          <label>Telefone</label>
          <input
            value={props.telefone}
            onChange={(txt) => {
              props.setTelefone([txt.target.value]);
            }}
            placeholder="CPF/CNPJ"
            type="text"
          />
        </form>
        <BotaoBase>
          <BotaoDiv
            onClick={() => {
              navigate("Auto");
            }}
          >
            Salvar
          </BotaoDiv>
        </BotaoBase>
      </div>
    </FormBase>
  );
};
