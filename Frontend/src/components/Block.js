import React from "react";

const Block = ({ concepto, monto, hash, previousHash, sAddress, tAddress }) => {
  return (
    <div className="task">
      <label>Concepto</label>
      <h5>{concepto}</h5>
      <label>Cartera de origen</label>
      <h5>{sAddress}</h5>
      <label>Cartera de destino</label>
      <h5>{tAddress}</h5>
      <label>monto</label>
      <h5>{monto}</h5>
      <label>Hash de la transacción</label>
      <h5>{hash}</h5>
      <label>Hash de la transacción anterior</label>
      <h5>{previousHash}</h5>
    </div>
  );
};

Block.defaultProps = {
  monto: 0,
  previousHash: "null",
  sAddress: "null",
  tAddress: "null",
};
export default Block;
