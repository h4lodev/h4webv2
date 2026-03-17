import './App.css'
import PixelSnow from './components/PixelSnow';

function background2() {
  return(
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
      <PixelSnow 
        color="#ffffff"
        flakeSize={0.01}
        minFlakeSize={1.25}
        pixelResolution={200}
        speed={1.25}
        density={0.3}
        direction={125}
        brightness={1}
        depthFade={8}
        farPlane={20}
        gamma={0.4545}
        variant="square"
      />
    </div>
  )
}

export default background2
