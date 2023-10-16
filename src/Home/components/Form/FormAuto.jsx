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
          <label>Nome Completo:</label>
          <input placeholder="Nome Completo" type="text" />
          <label>Rua:</label>
          <input placeholder="Rua:" type="text" />
          <label>Numero:</label>
          <input placeholder="Numero:" type="text" />
          <label>Bairro:</label>
          <input placeholder="Bairro:" type="text" />
          <label>Cidade:</label>
          <input placeholder="Cidade:" type="text" />
          <label>Estado:</label>
          <input placeholder="Estado:" type="text" />
          <label>Cep</label>
          <input placeholder="Cep:" type="text" />
          <label>CPF ou CNPJ do cliente:</label>
          <input placeholder="CPF/CNPJ" type="text" />
          <label>Telefone</label>
          <input placeholder="CPF/CNPJ" type="text" />
        </form>
        <BotaoBase>
          <BotaoDiv
            onClick={() => {
              navigate("Contrato");
            }}
          >
            Salvar
          </BotaoDiv>
        </BotaoBase>
      </div>
    </FormBase>
  );
};
