import React, { useState } from "react";
import axios from "axios";
const BlockForm = ({ addBlock }) => {
  const [sourceAddress, setSourceAddress] = useState("");
  const [targetAddress, setTargetAddress] = useState("");
  const [cantidadCrypto, setCryptoCantidad] = useState("");
  const [cantidadTokenExp, setTokenCantidad] = useState("");
  const [concepto, setConcepto] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !sourceAddress ||
      !cantidadCrypto ||
      !concepto ||
      !targetAddress ||
      !cantidadTokenExp
    ) {
      alert("Ingrese los datos");
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sourceAddress: sourceAddress,
        targetAddress: targetAddress,
        cantidadCrypto: cantidadCrypto,
        cantidadTokenExp: cantidadTokenExp,
        concepto: concepto,
      }),
    };
    setSourceAddress("");
    setTargetAddress("");
    setTokenCantidad("");
    setCryptoCantidad("");
    setConcepto("");
    const bloquesitos = await axios.post(
      "http://localhost:5000/blockchain/addTransaction",
      {
        sourceAddress: sourceAddress,
        targetAddress: targetAddress,
        cantidadCrypto: cantidadCrypto,
        cantidadTokenExp: cantidadTokenExp,
        concepto: concepto,
      },
      { "Content-Type": "application/json" }
    );

    console.log(bloquesitos.data.chain);
    addBlock(bloquesitos.data.chain);
  };
  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="wallet" className="lb">
            Dirección de cartera de propia
          </label>
          <input
            type="text"
            id="wallet"
            name="wallet"
            value={sourceAddress}
            onChange={(e) => {
              setSourceAddress(e.target.value);
            }}
            placeholder="Ingrese la dirección de la cartera fuente"
            className="add-form"
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="wallet" className="lb">
            Dirección de cartera objetivo
          </label>
          <input
            type="text"
            id="wallet"
            name="wallet"
            value={targetAddress}
            onChange={(e) => {
              setTargetAddress(e.target.value);
            }}
            placeholder="Ingrese la dirección de la cartera receptora"
            className="add-form"
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="cantidad" className="lb">
            Cantidad de criptomonedas
          </label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={cantidadCrypto}
            onChange={(e) => {
              setCryptoCantidad(e.target.value);
            }}
            placeholder="Ingrese una cantidad"
            className="add-form"
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="cantidad" className="lb">
            Cantidad de tokens de experiencia
          </label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={cantidadTokenExp}
            onChange={(e) => {
              setTokenCantidad(e.target.value);
            }}
            placeholder="Ingrese una cantidad"
            className="add-form"
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="concepto" className="lb">
            Concepto de la transacción
          </label>
          <input
            name="concepto"
            type="text"
            id="concepto"
            value={concepto}
            onChange={(e) => {
              setConcepto(e.target.value);
            }}
            placeholder="Ingrese el concepto de la transacción"
            className="add-form"
          ></input>
        </div>

        <input
          type="submit"
          className="btnF btn-block"
          value="Agregar al blockchain"
        ></input>
      </form>
    </div>
  );
};

export default BlockForm;
