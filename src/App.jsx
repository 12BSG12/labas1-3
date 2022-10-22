import styles from './App.module.css';
import Lab4 from './Labs/Lab4';

const App = () => { 
  return (
    <div >
      <div className={styles.App}>
        <p>Вариант №4</p>
        <p>Выполнил студент группы АСУ-20 Глушенков В.В.</p>
      </div>
      <Lab4 />
    </div>
  );
};

export default App;
