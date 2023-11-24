import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Head from "./components/head/Head";
import Card from "./components/card/Card";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className={styles.body}>
        <Header />
        <Head />
        <Card />
        <Card />
        <Card />
        <p style={{ marginLeft: 100, fontSize: 20 }}>Total list:3</p>
      </div>
    </main>
  );
}
