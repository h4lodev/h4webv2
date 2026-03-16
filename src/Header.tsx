import './App.css'
import GlassSurface from './components/GlassSurface'
import logo from './assets/logo.svg';

function Header() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '1rem' }}>
      <GlassSurface 
        width={440} 
        height={50}
        borderRadius={50}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        className="header"
      >
        <img
          src={logo}
          alt="logo"
          className="h-5 w-13 margin-10 pl-2 pr-2" 
        />
        <a href="#home" style={{ color: 'white', margin: 10, fontSize: '1rem', textDecoration: 'none' }}>[ home ]</a>
        <a href="#about" style={{ color: 'white', margin: 10, fontSize: '1rem', textDecoration: 'none' }}>[ about ]</a>
        <a href="#projs" style={{ color: 'white', margin: 10, fontSize: '1rem', textDecoration: 'none' }}>[ projs ]</a>
        <a href="https://github.com/h4lodev/h4webv2" style={{ color: 'white', margin: 10, fontSize: '1rem', textDecoration: 'none' }}>[ code ]</a>
      </GlassSurface>
    </div>
  )
}

export default Header