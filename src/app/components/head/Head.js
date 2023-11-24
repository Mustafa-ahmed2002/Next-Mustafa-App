"use client";
import styles from "./Head.module.css";
import React from "react";

const Head = () => {
  return (
    <div className={styles.headname}>
      <h1>Simple TODo App</h1>
      <p>This todo app for test design.</p>
      <div className={styles.search}>
        <input
          style={{ fontSize: 20 }}
          type="text"
          placeholder="Write Text here . . ."
        />
        <button> + Add Task</button>
      </div>
    </div>
  );
};
export default Head;
