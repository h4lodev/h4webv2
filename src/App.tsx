import { useState } from 'react'
import './App.css'
import Dither from "./components/Dither";
import PillNav from "./components/PillNav";
import logo from './assets/react.svg'

function App() {
  return (
    
    <div className="absolute min-h-screen w-full bg-black">
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation={false}
      />
      {/* Background Layer */}
      <div className="fixed inset-0 z-1 h-screen w-screen">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Dither
            waveColor={[0.5,0.5,0.5]}
            disableAnimation={false}
            enableMouseInteraction
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
      </div>

    {/* Content Layer */}
      <main className="relative z-2 min-h-screen w-full p-8">
        <h1 className="text-4xl font-bold text-white">Content</h1>
        <p className="text-white/80">This should be above the dither.</p>
      </main>
    </div>
  );
}

export default App;


