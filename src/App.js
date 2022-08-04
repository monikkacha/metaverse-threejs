import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox } from '@react-three/cannon';
import { SpaceShip0 } from './component/Spaceship0';
import { SpaceShip1 } from './component/Spaceship1';
import { SpaceShip2 } from './component/Spaceship2';
import { SpaceShip3 } from './component/Spaceship3';
import { SpaceShip4 } from './component/Spaceship4';
import { SpaceShip5 } from './component/Spaceship5';
import { SpaceShip6 } from './component/Spaceship6';
import { SpaceShip7 } from './component/Spaceship7';
import { SpaceShip8 } from './component/Spaceship8';

function Box() {

  const [ref, api] = useBox(() => ({ position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

function App() {
  return (
    <div className="App">
      <div className='AnimationContainer'>
        <Canvas>
          <OrbitControls />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} intensity={0.3} />
          <Physics>
            {/* <SpaceShip0 /> */}
            {/* <SpaceShip1 /> // heavy loading */}
            {/* <SpaceShip2 /> // heavy loading */}
            {/* <SpaceShip3 /> */}
            {/* <SpaceShip4 /> */}
            {/* <SpaceShip5 /> // heavy loading */}
            <SpaceShip6 />
            {/* <SpaceShip7 /> // heavy loading*/}
            {/* <SpaceShip8 /> */}
          </Physics>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
