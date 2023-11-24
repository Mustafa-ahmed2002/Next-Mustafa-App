import Image from "next/image";
import React from "react";
import Img from "./img.svg";
const Head = () => {
  return (
    <div>
      <h1>Welcome .</h1>
      <p>This is my first challenge with Html&CSS.</p>
      <Image
        src={Img}
        style={{ marginTop: 50, width: 1500, marginLeft: -500 }}
      />
      <br />
      <p style={{ marginTop: 200, marginLeft: 200 }}>
        This app cteated by <span style={{ color: "blue" }}> Aon2023</span>
      </p>
    </div>
  );
};

export default Head;
