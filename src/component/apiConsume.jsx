import React from "react";
import { useSelector } from "react-redux";
import styles from "./apiConsume.module.css";

const ApiConsume = () => {
  const characters = useSelector((state) => state.apiReducer.characters);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Challenge Realhost</h1>
      </header>
      <div className={styles.content}>
        <div className={styles.characters}>
          {characters.map((character) => (
            <div key={character.id} className={styles.character}>
              <div>
                <img
                  src={character.image}
                  alt={character.name}
                  className={styles.image}
                />
                <div>
                  <h2 className={styles.name}>{character.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.author}>Created by Federico Arrascaeta</p>
      </footer>
    </div>
  );
};

export default ApiConsume;
