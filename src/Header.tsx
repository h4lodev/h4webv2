import './App.css'
import GlassSurface from './components/GlassSurface'

function Header() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '1rem' }}>
      <GlassSurface 
        width={300} 
        height={50}
        borderRadius={50}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        className="header"
      >
        <a href="#home" style={{ color: 'white', margin: 10, fontSize: '1rem', textDecoration: 'none' }}>home</a>
        <a href="#about" style={{ color: 'white', margin: 10, fontSize: '1rem', textDecoration: 'none' }}>about</a>
        <a href="#projs" style={{ color: 'white', margin: 10, fontSize: '1rem', textDecoration: 'none' }}>projs</a>
        <a href="#code" style={{ color: 'white', margin: 10, fontSize: '1rem', textDecoration: 'none' }}>code</a>
      </GlassSurface>
    </div>
  )
}

export default Header