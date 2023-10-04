import styled from "styled-components";

//Menu

export const MenuBase = styled.div`
  border: solid;
`;
export const Menu = styled.div`
  border: solid;
`;

//Forms
export const FormBase = styled.div`
  border: solid;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form {
    border: solid 1px red;
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 10px;
  }

  input {
    width: 50%;
  }
`;

export const TituloForm = styled.div`
  border: solid;

  h3 {
    text-align: center;
  }
`;

//BOTAO

export const BotaoBase = styled.div`
  width: 10%;
  padding: 10px;
`;

export const BotaoDiv = styled.button`
  padding: 10px;
  border: solid;
  cursor: pointer;
  /* :hover {

  } */
`;
