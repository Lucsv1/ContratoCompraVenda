import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

export const ContratoScreen = (props) => {
  const tamanhoTexto = {
    fontSize: 12,
  };
  //dados cliente
  const nome = props.nomeCliente;
  const rua = props.ruaCliente;
  const numeroCasa = props.numeroCasaCliente;
  const nomeBairro = props.bairroCliente;
  const cidade = props.cidadeCliente;
  const estado = props.estadoCliente;
  const cep = props.cepCliente;
  const numeroCliente = props.numeroCliente;
  const telefone = props.telefone;

  //dados veiculo
  const marca = props.marca;
  const modelo = props.modelo;
  const anoFab = props.anoFab;
  const anoMod = props.anoMod;
  const chassi = props.chassi;
  const cor = props.cor;
  const placa = props.placa;
  const categoria = props.categoria;
  const renavam = props.renavam;

  const nomeDoCliente = {
    nome,
  };

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const reportTitle = [
    {
      text: "CONTRATO DE COMPRA E VENDA DE ATIVO MOBILIZADO",
      alignment: "center",
      style: tamanhoTexto,
      bold: "Verdana.ttf",
    },
    {
      text: "IDENTIFICAÇÃO DAS PARTES CONTRATANTES",
      alignment: "center",
      style: tamanhoTexto,
      bold: "Verdana.ttf",
    },
  ];

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [
      {
        text: "IDENTIFICAÇÃO DAS PARTES CONTRATANTES\n\n",
        alignment: "center",
        bold: true,
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: [
          { text: "VENDEDOR: ", bold: true },
          { text: "Luiz Claudio Galindo ", bold: true },
          "com sede na Avenida ",
          {
            text: "Nossa Senhora dos Remédios, nº 193, Vl. Dos Remédios – Osasco/SP - CEP 06296-190; ",
            bold: true,
          },
          "inscrito no CPF  sob o nº ",
          { text: "271.004.408-07 ", bold: true },
          "e no RG sob o nº ",
          { text: "27.314.962;\n\n", bold: true },
        ],
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: [
          { text: "COMPRADOR: ", bold: true },
          { text: nome, bold: true },
          " situado(a) na ",
          {
            text:
              rua +
              " , n° " +
              numeroCasa +
              " - " +
              nomeBairro +
              " - " +
              cidade +
              " / " +
              estado +
              " CEP " +
              cep +
              " inscrito no CPF  sob o nº " +
              numeroCliente +
              ", e celular n°: " +
              telefone,
          },
        ],
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: "As partes acima identificadas têm, entre si, justo e acertado o presente Contrato de Compra e Venda de Automóvel, que se regerá pelas cláusulas seguintes e pelas condições descritas no presente.\n\n",
        style: "italico",
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
        bold: true,
      },
      {
        text: "DO OBJETO DO CONTRATO\n",
        bold: true,
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: [
          { text: "Cláusula 1ª  ", bold: true },
          "O presente contrato tem como OBJETO, o veículo ",
          {
            text:
              marca +
              " MODELO " +
              modelo +
              " ano de fabricação " +
              anoFab +
              " ano modelo " +
              anoMod +
              " chassi " +
              chassi +
              " cor " +
              cor +
              " placa " +
              placa +
              " categoria " +
              categoria +
              " com registro RENAVAM sob o nº " +
              renavam,
          },
        ],

        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: "DO PREÇO\n",
        bold: true,
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: [
          { text: "Cláusula 2ª ", bold: true },
          { text: "O COMPRADOR ", bold: true },
          "pagará ao ",
          { text: "VENDEDOR ", bold: true },
          "pela compra do veículo objeto deste contrato, a quantia de ",
          {
            text: "R$158.000,00 (cento e cinquenta e oito mil reais) ",
            bold: true,
          },
          "dando ",
          { text: "R$1.000,00 (mil reais) ", bold: true },
          "de sinal, e o restante na retirada do veículo.\n\n",
        ],
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: "DAS OBRIGAÇÕES\n",
        bold: true,
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: [
          { text: "Cláusula 3ª ", bold: true },
          { text: "O VENDEDOR ", bold: true },
          "se responsabiliza a entregar ao ",
          { text: "COMPRADOR ", bold: true },
          "o Documento Único de Transferência (DUT), assinado e reconhecido firma, após a devida quitação do valor estabelecido neste instrumento.\n\n",
        ],
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: [
          { text: "Cláusula 4ª ", bold: true },
          { text: "O VENDEDOR ", bold: true },
          "deverá entregar o caminhão ao ",
          { text: "COMPRADOR ", bold: true },
          "livre de quaisquer ônus ou encargo.\n\n",
        ],
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: [
          { text: "Cláusula 5ª ", bold: true },
          " Será de responsabilidade do ",
          { text: "VENDEDOR ", bold: true },
          "cumprir com 3 meses de garantia para ",
          { text: "MOTOR, CÂMBIO e DIFERENCIAL do VEICULO ", bold: true },
          "sendo que o equipamento não possui garantia de 90 dias, exceto funcionamento de imediato.\n\n",
        ],
        alignment: "center",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        text: "OSASCO, 5 DE JUNHO DE 2023.\n\n",
        alignment: "left",
        style: tamanhoTexto,
        margin: [0, 0, 0, 15],
      },
      {
        columns: [
          {
            width: "50%",
            text: "_____________________________\nVENDEDOR",
            alignment: "center",
            style: tamanhoTexto,
            margin: [0, 0, 0, 15],
          },
          {
            width: "50%",
            text: "_____________________________\nCOMPRADOR",
            alignment: "center",
            style: tamanhoTexto,
            margin: [0, 0, 0, 15],
          },
        ],
      },
    ],
    styles: {
      italico: {
        italics: true,
      },
    },
    foorter: [],
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            pdfMake.createPdf(docDefinitions).open();
          }}
        >
          PDF
        </button>
      </div>
    </div>
  );
};
