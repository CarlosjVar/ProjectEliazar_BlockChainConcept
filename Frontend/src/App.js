import Header from "./components/Header";
import BlockForm from "./components/BlockForm";
import Button from "./components/Button";
import Line from "./components/divisions/Line";
import Blocks from "./components/Blocks";
import axios from "axios";

import React, { useEffect, useState } from "react";

function App() {
  const getBlocksOnRender = async () => {
    const bloquesitos = await axios.get("http://localhost:5000/blockchain/get");
    addBlock(bloquesitos.data.chain);
  };
  useEffect(() => {
    getBlocksOnRender();
  }, []);

  const [BlocksInfo, setBlocks] = useState([]);

  const addBlock = (block) => {
    setBlocks(block);
  };
  return (
    <div className="container">
      <Header title="Prueba de concepto de Blockchain" />
      <BlockForm addBlock={addBlock} />
      <h3 style={{ padding: 5 }}>Contenido del blockchain</h3>
      <Blocks blocks={BlocksInfo} />
    </div>
  );
}

export default App;
