import Lottie from 'lottie-react';
import animation from './assets/animation.json';

function App() {
  return (
    <>
      This is telegram animation:
      <Lottie
        animationData={animation}
        loop={true}
        style={{ width: '100px', height: '100px' }}
      />
    </>
  );
}

export default App;
