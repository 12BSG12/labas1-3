import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import styles from '../App.module.css';
import { OrbitControls, TransformControls } from '@react-three/drei';
import create from 'zustand';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Checkbox, FormControlLabel, FormGroup, InputLabel } from '@mui/material';

const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }));

const Pentagon = ({ position, rotate }) => {
  const ref = React.useRef();
  useFrame(() => (ref.current.rotation[rotate] += 0.01));

  const setTarget = useStore((state) => state.setTarget);

  return (
    <mesh ref={ref} position={position} onClick={(e) => setTarget(e.object)}>
      <dodecahedronGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

const SelectSmall = ({ transform, setTransform, rotate, setRotate }) => {
  return (
    <FormGroup row>
      <FormControl sx={{ mt: 2, minWidth: 120, color: 'white' }} size="small">
        <Select
          sx={{ color: 'white', mr: 2 }}
          value={transform}
          onChange={(e) => setTransform(e.target.value)}>
          <MenuItem value="translate">Перетащить</MenuItem>
          <MenuItem value="rotate">Повернуть</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ mt: 2, minWidth: 135, color: 'white' }} size="small">
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
    </FormGroup>
  );
};

const Lab6 = () => {
  const [transform, setTransform] = React.useState('translate');
  const [rotate, setRotate] = React.useState('');
  const { target, setTarget } = useStore();

  return (
    <div className={styles.root}>
      <p>Лабораторная работа №6 </p>
      <SelectSmall
        transform={transform}
        setTransform={setTransform}
        rotate={rotate}
        setRotate={setRotate}
      />
      <Canvas
        dpr={[1, 2]}
        onPointerMissed={() => setTarget(null)}
        camera={{ position: [5, 5, 5], fov: 25 }}>
        <Pentagon position={[0, 0.5, 0]} rotate={rotate} />
        {target && <TransformControls object={target} mode={transform} />}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default Lab6;
