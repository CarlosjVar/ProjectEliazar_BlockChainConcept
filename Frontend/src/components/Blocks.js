import React, { useEffect, useState } from "react";
import Block from "./Block";
import axios from "axios";
const Blocks = ({ blocks }) => {
  if (blocks.length == 0) {
    return <Block concepto={"No existen bloques"} />;
  }

  return (
    <>
      {blocks.map((block, index) => {
        if (block.transactions.length == 0) {
          return (
            <Block
              key={index}
              concepto={"Original Block"}
              hash={block.hash}
              previousHash={block.previous_hash}
            />
          );
        }

        return (
          <Block
            key={index}
            concepto={block.transactions[0].concepto}
            monto={block.transactions[0].cantidadCrypto}
            hash={block.hash}
            previousHash={block.previous_hash}
            sAddress={block.transactions[0].sourceAddress}
            tAddress={block.transactions[0].targetAddress}
          />
        );
      })}
    </>
  );
};

export default Blocks;
