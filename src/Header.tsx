import './App.css'
import GlassSurface from './components/GlassSurface'
import logo from './assets/logo.svg';

function Header() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '1rem' }}>
      <GlassSurface 
        width="clamp(300px, 90vw, 550px)"
        height="clamp(40px, 8vw, 50px)"
        borderRadius={50}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}
        className="header"
      >
        <img
          src={logo}
          alt="logo"
          className="h-5 w-13 margin-10 pl-2 pr-2" 
          style={{ flexShrink: 0 }}
        />
        <a href="#home" style={{ color: 'white', margin: 'clamp(4px, 1.5vw, 10px)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', textDecoration: 'none', whiteSpace: 'nowrap' }}>[ home ]</a>
        <a href="#about" style={{ color: 'white', margin: 'clamp(4px, 1.5vw, 10px)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', textDecoration: 'none', whiteSpace: 'nowrap'}}>[ about ]</a>
        <a href="#projs" style={{ color: 'white', margin: 'clamp(4px, 1.5vw, 10px)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', textDecoration: 'none', whiteSpace: 'nowrap'}}>[ projs ]</a>
        <a href="https://store.h4lo.ca" style={{ color: 'white', margin: 'clamp(4px, 1.5vw, 10px)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', textDecoration: 'none', whiteSpace: 'nowrap' }}>[ store ]</a>
        <a href="https://github.com/h4lodev/h4webv2" style={{ color: 'white', margin: 'clamp(4px, 1.5vw, 10px)', fontSize: 'clamp(0.7rem, 2vw, 1rem)', textDecoration: 'none', whiteSpace: 'nowrap' }}>[ code ]</a>
      </GlassSurface>
    </div>
  )
}

export default Header