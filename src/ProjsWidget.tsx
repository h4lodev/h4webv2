import GlassSurface from "./components/GlassSurface"
import unlabeled from "./assets/img/blank.svg"
import knewher from "./assets/img/knewher.jpg"
import eyes from "./assets/img/eyes.jpg"
import hv from "./assets/img/hv.png"
import ruination from "./assets/img/ruination.jpg"

function ProjsWidget(){
    return (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GlassSurface 
                width={1000} 
                height={840}
                borderRadius={50}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className="projswidget1"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={unlabeled}
                            alt="logo"
                            className="h-10 w-10" 
                        />
                        <p style={{ color: 'white', fontSize: '2rem' }}>NONAME</p>
                    </GlassSurface>

                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={unlabeled}
                            alt="logo"
                            className="h-10 w-10" 
                        />
                        <p style={{ color: 'white', fontSize: '2rem' }}>NONAME</p>
                    </GlassSurface>
                    
                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={knewher}
                            alt="logo"
                            className="h-10 w-10" 
                        />
                        <p style={{ color: 'white', fontSize: '2rem' }}>SPOTIFY</p>
                    </GlassSurface>

                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={hv}
                            alt="logo"
                            className="h-10 w-10" 
                        />
                        <p style={{ color: 'white', fontSize: '2rem' }}>HV</p>
                    </GlassSurface>

                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={ruination}
                            alt="logo"
                            className="h-10 w-10" 
                        />
                        <p style={{ color: 'white', fontSize: '2rem' }}>ROBLOX (DEPRECATED)</p>
                    </GlassSurface>
                    
                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img
                            src={eyes}
                            alt="logo"
                            className="h-10 w-10" 
                        />
                        <p style={{ color: 'white', fontSize: '2rem' }}>EYES</p>
                    </GlassSurface>
                </div>
            </GlassSurface>
        </div>
    )
}

export default ProjsWidget