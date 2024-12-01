import React from "react";

function Greeting({ name, pos }) {
  return (
    <p className="aadil">
      Hi, {name}! {pos ? pos : "NA"}
    </p>
  );
}

export default Greeting;


