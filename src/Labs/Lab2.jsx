import { useState } from 'react';
import { Stage, Layer, Star } from 'react-konva';
import styles from "../App.module.css";

const Lab2 = () => {
  const [isShow, setIsShow] = useState(false);
  const [color, setColor] = useState('');
  return (
    <div className={styles.root}>
      <p>Лабораторная работа №2 </p>
      {isShow && (
        <Stage width={400} height={400}>
          <Layer>
            <Star
              numPoints={5}
              innerRadius={160}
              outerRadius={200}
              fill={color}
              stroke="black"
              strokeWidth={4}
              x={200}
              y={210}
            />
          </Layer>
        </Stage>
      )}
      <div className={styles.blockBtn}>
        <button className={styles.btn} onClick={() => setIsShow(true)}>Фигура</button>
        <button className={styles.btn} onClick={() => setColor('#ff0000')}>Цвет</button>
        <a href='/'>
          <button className={styles.btn}>Обновить</button>
        </a>
      </div>
    </div>
  );
};

export default Lab2;