import { useState } from 'react'
import './App.css'
import GradientText from './components/GradientText.tsx'
import Header from './Header.tsx'
import Background from './Background.tsx'

function App() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', minHeight: '100%' }}>

      <Background />
      <Header />

      {/* test layer */}
      <main style={{ position: 'relative', zIndex: 10, padding: '2rem' }}>
        <h1 style={{ color: 'white', padding: '2rem' }}>Content</h1>
        <p style={{ color: 'rgba(255,255,255,0.8)',fontSize: '56px' }}>Hi, I'm.</p>
        <GradientText
          colors={["#F4C000","#F49400"]}
          animationSpeed={6}
          showBorder={false}
          className="text-[150px] overflow-visible"
        >
          TEST
        </GradientText>
        <p style={{ color: 'rgba(255,255,255,0.8)',fontSize: '56px' }}>And I make things.</p>
      </main>
    </div>
  );
}

export default App;


