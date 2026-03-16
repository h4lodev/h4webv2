import './App.css'
import GradientText from './components/GradientText.tsx'
import Header from './Header.tsx'
import Background from './Background.tsx'
import Footer from './Footer.tsx'
import FastfetchDisplay from './FastfetchDisplay'
import GlassSurface from './components/GlassSurface'

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Background />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header />

        <section id="home" style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '150px', margin: '0.5rem 0' }}>Hi, I'm</p>
            <GradientText
              colors={["#F4C000","#ff9900"]}
              animationSpeed={6}
              showBorder={false}
              className="text-[150px] overflow-visible justify-center"
            >
              H4LO
            </GradientText>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '150px', margin: '0.5rem 0' }}>And I make</p>
            <GradientText
              colors={["#F4C000","#F49400"]}
              animationSpeed={6}
              showBorder={false}
              className="text-[150px] overflow-visible justify-center"
            >
              Things.
            </GradientText>
          </div>
        </section>

        <section id="about" style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="min-h-screen p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <FastfetchDisplay />
            </div>
          </div>
        </section>

        <section id="projs" style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', paddingTop: '2rem' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GlassSurface 
              width={1100} 
              height={480}
              borderRadius={50}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="fastfetch"
            >
              <p style={{ color: 'white', fontSize: '2rem' }}>PROJECT CARDS GO HERE WHEN READY</p>
            </GlassSurface>

          </div>
          <Footer />
        </section>
        
      </div>

    </div>
  );
}

export default App;


