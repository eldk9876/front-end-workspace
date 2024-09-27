import { FaHouse } from "react-icons/fa6";
import { CiFolderOn } from "react-icons/ci";
import { useState, useEffect } from "react";

const Main = () => {
  return (
    <main>
      <aside>
        <a href="">
          {" "}
          <FaHouse /> <span>홈</span>
        </a>{" "}
        <a href="">
          {" "}
          <CiFolderOn /> <span>저장</span>
        </a>
      </aside>
    </main>
  );
};

export default Main;
