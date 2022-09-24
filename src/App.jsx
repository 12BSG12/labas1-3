import styles from './App.module.css';
import Lab1 from './Labs/Lab1';
import Lab2 from './Labs/Lab2';
import Lab3 from './Labs/Lab3';

const App = () => { 
  return (
    <div >
      <div className={styles.App}>
        <p>Вариант №4</p>
        <p>Выполнил студент группы АСУ-20 Глушенков В.В.</p>
      </div>
      <Lab1 />
      <Lab2 />
      <Lab3 />
    </div>
  );
};

export default App;
