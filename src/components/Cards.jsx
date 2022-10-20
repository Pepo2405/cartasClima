import React from "react";
import styles from "../styles/Cards.module.css";
import Card from "./Card";

export default function Cards({ cities,onClose }) {
  
  return (
    <div className={styles.cards}>
      {cities.map((city) => {
        const { name,min,max,id,img,temp } = city;
        return (
          <Card
            key={id}
            id={id}
            max={max}
            min={min}
            name={name}
            img={img}
            temp={temp}
            onClose={onClose}
          ></Card>
        );
      })}
    </div>
  );
}
