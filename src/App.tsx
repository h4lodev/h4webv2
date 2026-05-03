import './App.css'
import GradientText from './components/GradientText.tsx'
import Header from './Header.tsx'
import Background2 from './Background2.tsx'
import Footer from './Footer.tsx'
import FastfetchDisplay from './FastfetchDisplay'
import ProjsWidget from './ProjsWidget.tsx'
import WebringsMenu from './webringsMenu.tsx'

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflowY: 'scroll', scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Background2 />
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header />

        <section id="home" style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <p style={{ color: 'rgb(240,240,240)', fontSize: '130px', margin: '0.5rem 0' }}>Hi, I'm</p>
            <GradientText
              colors={["#F4C000","#ff9900"]}
              animationSpeed={6}
              showBorder={false}
              className="text-[130px] overflow-visible justify-center"
            >
              H4LO
            </GradientText>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <p style={{ color: 'rgb(240,240,240)', fontSize: '130px', margin: '0.5rem 0' }}>And I make</p>
            <GradientText
              colors={["#F4C000","#F49400"]}
              animationSpeed={6}
              showBorder={false}
              className="text-[130px] overflow-visible justify-center"
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

        <section id="projs" style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '2rem' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ProjsWidget />
          </div>
          <Footer />
        </section>
        
      </div>

    </div>
  );
}

export default App;


