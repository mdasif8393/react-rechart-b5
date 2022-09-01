import logo from './logo.svg';
import './App.css';
import Rechart from './components/Reachart/Rechart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
function App() {
  const [flip, set] = useState(false)
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 },  reset: true,
    reverse: flip, delay: 200,
    onRest: () => set(!flip),
    delay: 200,})
  return (
    <div>
      <animated.div style={props}>I will fade in</animated.div>
      <Rechart></Rechart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
