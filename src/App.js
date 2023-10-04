import { GlobalStyled } from "./GlobalStyled";
import { MenuBar } from "./Home/MenuBar";
import { Route, Routes, BrowserRouter, Form } from "react-router-dom";
import { useState } from "react";
import { ContratoScreen } from "./Home/ContratoScreen";
import { Forms } from "./Home/components/Form/Forms";

function App() {
  const [nomeCliente, setNomeCliente] = useState("");
  const [ruaCliente, setRuaCliente] = useState("");
  const [numeroCasaCliente, setNumeroCasaCliente] = useState(0);
  const [bairroCliente, setBairroCliente] = useState("");
  const [cidadeCliente, setCidadeCliente] = useState("");
  const [estadoCliente, setEstadoCliente] = useState("");
  const [cepCliente, setCepCliente] = useState("");
  const [numeroCliente, setNumeroCliente] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyled />
      <MenuBar />
      <Routes>
        <Route
          path="/"
          element={
            <Forms
              setNomeCliente={setNomeCliente}
              setRuaCliente={setRuaCliente}
              setNumeroCasaCliente={setNumeroCasaCliente}
              setBairroCliente={setBairroCliente}
              setCidadeCliente={setCidadeCliente}
              setEstadoCliente={setEstadoCliente}
              setCepCliente={setCepCliente}
              setNumeroCliente={setNumeroCliente}
              nomeCliente={nomeCliente}
              ruaCliente={ruaCliente}
              numeroCasaCliente={numeroCasaCliente}
              bairroCliente={bairroCliente}
              cidadeCliente={cidadeCliente}
              estadoCliente={estadoCliente}
              cepCliente={cepCliente}
              numeroCliente={numeroCliente}
            />
          }
        />
        <Route
          path="/Contrato"
          element={
            <ContratoScreen
              nomeCliente={nomeCliente}
              ruaCliente={ruaCliente}
              numeroCasaCliente={numeroCasaCliente}
              bairroCliente={bairroCliente}
              cidadeCliente={cidadeCliente}
              estadoCliente={estadoCliente}
              cepCliente={cepCliente}
              numeroCliente={numeroCliente}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
