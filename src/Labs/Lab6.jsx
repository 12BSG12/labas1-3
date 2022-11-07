import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styles from '../App.module.css';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormGroup, InputLabel, Slider } from '@mui/material';
import { OrbitControls } from '@react-three/drei';

const Pentagon = ({ position, rotate, speed }) => {
  const ref = React.useRef('null');
  useFrame(() => (ref.current.rotation[rotate] += speed));

  return (
    <mesh ref={ref} position={position}>
      <dodecahedronGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

const SelectSmall = ({ rotate, setRotate, setSpeed, speed }) => {
  return (
    <FormGroup row sx={{ mb: 5 }}>
      <FormControl sx={{ mt: 2, mb: 1, minWidth: 135, color: 'white' }} size="small">
        <InputLabel sx={{ color: 'white' }} id="demo-select-small">
          Вращать по
        </InputLabel>
        <Select
          sx={{ color: 'white' }}
          value={rotate}
          label="Вращать по"
          onChange={(e) => setRotate(e.target.value)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="x">X</MenuItem>
          <MenuItem value="y">Y</MenuItem>
          <MenuItem value="z">Z</MenuItem>
        </Select>
      </FormControl>
      <Slider
        step={0.01}
        valueLabelDisplay="auto"
        min={0.01}
        max={100}
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />
    </FormGroup>
  );
};

const Lab6 = () => {
  const [rotate, setRotate] = React.useState('');
  const [speed, setSpeed] = React.useState(0.01);
  return (
    <div className={styles.root}>
      <p>Лабораторная работа №6 </p>
      <SelectSmall rotate={rotate} setRotate={setRotate} speed={speed} setSpeed={setSpeed} />
      <span className={styles.x}>X</span>
      <span className={styles.y}>Y</span>
      <span className={styles.z}>Z</span>
      <Canvas dpr={[1, 2]} camera={{ position: [5, 5, 5], fov: 25 }}>
        <Pentagon position={[0, 0.7, 0]} rotate={rotate} speed={speed} />
        <axesHelper position={[0, 0.7, 0]} args={[2]} />
      </Canvas>
    </div>
  );
};

export default Lab6;
