// import { useState, useEffect } from "react";

export const button = () => {
  const target = document.getElementById("target");

  const btnMan = document.getElementById("btnMan");
  btnMan.addEventListener("click", () => (target.disabled = false));

  const btnWomon = document.getElementById("btnWomon");
  btnWomon.addEventListener("click", () => (target.disabled = true));
};

// useEffect(() => {
//   if (btnMan == ture) {
//     return (btnWomon = false);
//   } else {
//     return (btnMan = false);
//   }
// }, []);

export default button;
