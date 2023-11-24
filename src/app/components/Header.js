"use client";
import React from "react";
import Logo from "./logo.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <div className={styles.header}>
      <Image src={Logo} width={100} height={100} />
      <div className={styles.head}>
        <h3>
          <Link href={"/"}> Home </Link>
        </h3>
        <h3>
          <Link href={"/about"}>About</Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
