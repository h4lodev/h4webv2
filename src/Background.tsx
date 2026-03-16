import './App.css'
import Dither from "./components/Dither"

function Background() {
  return (
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Dither
          waveColor={[0.34, 0.34, 0.34]}
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.2}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
  )
}

export default Background