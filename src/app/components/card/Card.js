"use client";
import Image from "next/image";
import styles from "./Card.module.css";
import React from "react";

import remove from "./remove.svg";
const Card = () => {
  return (
    <div className={styles.card}>
      <h2>Hello this is my first Todo.</h2>
      <div>
        <Image src={remove} />
      </div>
    </div>
  );
};

export default Card;
