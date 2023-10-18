import { GlobalStyled } from "./GlobalStyled";
import { MenuBar } from "./Home/MenuBar";
import {
  Route,
  Routes,
  BrowserRouter,
  Form,
  useAsyncError,
} from "react-router-dom";
import { useState } from "react";
import { ContratoScreen } from "./Home/ContratoScreen";
import { Forms } from "./Home/components/Form/Forms";
import { FormAuto } from "./Home/components/Form/FormAuto";
import { FormPay } from "./Home/components/Form/FormPay";

function App() {
  //REGISTRO CLIENTE
  const [nomeCliente, setNomeCliente] = useState("");
  const [ruaCliente, setRuaCliente] = useState("");
  const [numeroCasaCliente, setNumeroCasaCliente] = useState(0);
  const [bairroCliente, setBairroCliente] = useState("");
  const [cidadeCliente, setCidadeCliente] = useState("");
  const [estadoCliente, setEstadoCliente] = useState("");
  const [cepCliente, setCepCliente] = useState("");
  const [numeroCliente, setNumeroCliente] = useState("");
  const [telefone, setTelefone] = useState("");

  //REGISTRO CARRO
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [anoFab, setAnoFab] = useState("");
  const [anoMod, setAnoMod] = useState("");
  const [chassi, setCahssi] = useState("");
  const [cor, setCor] = useState("");
  const [placa, setPlaca] = useState("");
  const [categoria, setCategoria] = useState("");
  const [renavam, setRenavam] = useState("");

  //REGISTRO PAGAMENTO
  const [quantTotal, setQuantTotal] = useState("");
  const [quantSinal, setQuantSinal] = useState("");
  const [quantFinanciado, setQuantFinanciado] = useState("");
  const [quantVista, setQuantVista] = useState("");
  const [observacao, setObeservacao] = useState("");
  const [banco, setBanco] = useState("")
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
              telefone={telefone}
              setTelefone={setTelefone}
            />
          }
        />
        <Route
          path="/Contrato"
          element={
            <ContratoScreen
              //cliente
              telefone={telefone}
              nomeCliente={nomeCliente}
              ruaCliente={ruaCliente}
              numeroCasaCliente={numeroCasaCliente}
              bairroCliente={bairroCliente}
              cidadeCliente={cidadeCliente}
              estadoCliente={estadoCliente}
              cepCliente={cepCliente}
              numeroCliente={numeroCliente}
              //veiculo
              marca={marca}
              modelo={modelo}
              anoFab={anoFab}
              anoMod={anoMod}
              chassi={chassi}
              cor={cor}
              placa={placa}
              categoria={categoria}
              renavam={renavam}
              //Pagamento
              quantTotal={quantTotal}
              quantSinal={quantSinal}
              quantFinanciado={quantFinanciado}
              quantVista={quantVista}
              banco={banco}
              observacao={observacao}
            />
          }
        />
        <Route
          path="/Auto"
          element={
            <FormAuto
              marca={marca}
              setMarca={setMarca}
              modelo={modelo}
              setModelo={setModelo}
              anoFab={anoFab}
              setAnoFab={setAnoFab}
              anoMod={anoMod}
              setAnoMod={setAnoMod}
              chassi={chassi}
              setCahssi={setCahssi}
              cor={cor}
              setCor={setCor}
              placa={placa}
              setPlaca={setPlaca}
              categoria={categoria}
              setCategoria={setCategoria}
              renavam={renavam}
              setRenavam={setRenavam}
            />
          }
        />
        <Route
          path="/Pay"
          element={
            <FormPay
              quantTotal={quantTotal}
              setQuantTotal={setQuantTotal}
              quantSinal={quantSinal}
              setQuantSinal={setQuantSinal}
              quantFinanciado={quantFinanciado}
              setQuantFinanciado={setQuantFinanciado}
              quantVista={quantVista}
              setQuantVista={setQuantVista}
              observacao={observacao}
              setObeservacao={setObeservacao}
              banco={banco}
              setBanco={setBanco}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
