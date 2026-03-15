import { useState } from 'react'
import './App.css'
import GradientText from './components/GradientText.tsx'
import Header from './Header.tsx'
import Background from './Background.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Background />
      </div>

      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Header />
        
        <main style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '56px', margin: '0.5rem 0' }}>Hi, I'm</p>
            <GradientText
              colors={["#F4C000","#F49400"]}
              animationSpeed={6}
              showBorder={false}
              className="text-[30px] overflow-visible justify-center"
            >
              H4LO
            </GradientText>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '56px', margin: '0.5rem 0' }}>And I make</p>
            <GradientText
              colors={["#F4C000","#F49400"]}
              animationSpeed={6}
              showBorder={false}
              className="text-[30px] overflow-visible justify-center"
            >
              THINGS.
            </GradientText>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;


