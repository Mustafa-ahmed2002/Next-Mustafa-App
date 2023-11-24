import React from "react";
import Header from "../components/Header";
import styles from "./About.module.css";
import Head from "./components/head/head";
const About = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Head />
    </div>
  );
};

export default About;
