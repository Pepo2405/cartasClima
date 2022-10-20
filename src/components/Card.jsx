import React from "react";
import styles from "../styles/Card.module.css";
import { fondos } from "../assets/fondos";

export default function Card({ id, max, min, name, img, onClose, temp }) {
  // acá va tu código
  return (
    <div
      className={`${styles.rows} ${styles.card}`}
      style={{ background: `center/cover url("${fondos[img]}")` }}
    >
      <div className={styles.blurred}>
        <div className={`${styles.row} ${styles.nombre}`}>
          <h4 className={styles.nombre}>{name}</h4>
          <button className={styles.button} onClick={(e) => onClose(e, id)}>
            ✖
          </button>
        </div>
        <h4>C° {(temp).toFixed(2)}</h4>

        <div className={`${styles.columns}`}>
          <div className={styles.text}>
            <p>Min</p>
            <p>{min.toFixed(2)}</p>
          </div>
          <div className={styles.text}>
            <p>Max</p>
            <p>{max.toFixed(2)}</p>
          </div>
          <div className={styles.imgCont}>
            <img
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt="sas"
              className={styles.weatherIcon}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
