import { useState } from 'react';
import { Stage, Layer, Shape } from 'react-konva';
import styles from '../App.module.css';

const Lab1 = () => {
  const [isShow, setIsShow] = useState(false);
  const [inputL, setInputL] = useState(6);

  const fn = -Math.PI / 2;
  const fk = (3 * Math.PI) / 2;
  let xr, yr, x1, y1;
  const r = 20;
  const x0 = 350 / 2;
  const y0 = 500 / 2;
  return (
    <div className={styles.root}>
      <p>Лабораторная работа №1 </p>
      {isShow && (
        <Stage width={500} height={500}>
          <Layer>
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                for (var t = fn; t <= fk; t += 0.001) {
                  if (Math.abs(Math.cos(t)) > 0.001) {
                    xr = 3 + inputL * Math.cos(t);
                    yr = (3 * Math.sin(t)) / Math.cos(t) + inputL * Math.sin(t);
                    x1 = x0 + Math.round(r * xr);
                    y1 = y0 - Math.round(r * yr);
                  }
                  context.lineTo(x1, y1);
                }
                context.fillStrokeShape(shape);
              }}
              stroke="black"
              strokeWidth={4}
            />
          </Layer>
        </Stage>
      )}
      <div style={{marginTop: '10px'}}>
        <label>t=</label>
        <input
          type="text"
          value={inputL}
          onChange={(e) => setInputL(e.target.value)}
          placeholder="введите t"
        />
      </div>
      <div className={styles.blockBtn}>
        <button className={styles.btn} onClick={() => setIsShow(true)}>
          Отобразить
        </button>
        <a href="/">
          <button className={styles.btn}>Обновить</button>
        </a>
      </div>
    </div>
  );
};

export default Lab1;
