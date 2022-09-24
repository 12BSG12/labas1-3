import { useState } from 'react';
import styles from '../App.module.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const Lab3 = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(200);

  const data = [];
  for (let i = inputA; i < inputB; i++) {
    let x = 40 * Math.sin(((10 * i) / 180) * Math.PI);
    data.push({ name: `index: ${i}`, 'f(x)': x });
  }
  return (
    <div className={styles.root}>
      <p>Лабораторная работа №3 </p>
      <span style={{margin: '10px'}}>f(x) = sin(x)</span>
      <LineChart
        width={1000}
        height={500}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="f(x)" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 10" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
      <label>концы отрезка</label>
      <div style={{margin: '10px'}}>
        <label>a=</label>
        <input
          style={{marginRight: '10px'}}
          type="text"
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          placeholder="введите a"
        />
        <label>b=</label>
        <input
          type="text"
          value={inputB}
          onChange={(e) => setInputB(e.target.value)}
          placeholder="введите b"
        />
      </div>
      <div className={styles.blockBtn}>
        <a href="/">
          <button className={styles.btn}>Обновить</button>
        </a>
      </div>
    </div>
  );
};

export default Lab3;
