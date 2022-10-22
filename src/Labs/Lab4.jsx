import { useState } from 'react';
import { Stage, Layer, Star } from 'react-konva';
import styles from '../App.module.css';
import { Cord } from './Cord';

const Lab4 = () => {
  const [isDrag, setIsDrag] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [draggable, setDraggable] = useState({
    x: 500,
    y: 500,
  });
  return (
    <div className={styles.root}>
      <p>Лабораторная работа №4 </p>
      <Cord />
      <Stage width={600} height={800} className={styles.stage}>
        <Layer>
          <Star
            numPoints={5}
            innerRadius={72}
            outerRadius={90}
            stroke="black"
            strokeWidth={4}
            x={300}
            y={310}
          />
          <Star
            rotation={rotate}
            draggable={isDrag}
            numPoints={5}
            innerRadius={72}
            outerRadius={90}
            stroke="red"
            strokeWidth={4}
            onDragEnd={(e) => {
              setDraggable({
                x: e.target.x(),
                y: e.target.y(),
              });
            }}
            x={500}
            y={500}
          />
        </Layer>
      </Stage>
      <div className={styles.blockBtn}>
        <div className={styles.draggable}>
          <button className={styles.btn} onClick={() => setIsDrag(!isDrag)}>
            Перенос
          </button>
          <span>x: {draggable.x}</span>
          <span>y: {draggable.y}</span>
        </div>
        <div>
          <span>Повернуть на:</span>
          <input value={rotate !== 0 ? rotate : ''} onChange={(e) => setRotate(+e.target.value)} placeholder="deg" />
        </div>
      </div>
    </div>
  );
};

export default Lab4;
