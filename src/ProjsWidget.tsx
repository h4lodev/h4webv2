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
                width="auto " 
                height={840}
                borderRadius={50}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1000px'  }}
                className="projswidget1"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={unlabeled}
                                alt="unlabeled1"
                                className="h-50 w-50 rounded-2xl" 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>NONAME</p>
                        </div>
                    </GlassSurface>

                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={unlabeled}
                                alt="unlabeled2"
                                className="h-50 w-50 rounded-2xl" 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>NONAME</p>
                        </div>
                    </GlassSurface>
                    
                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={knewher}
                                alt="knewher"
                                className="h-50 w-50 rounded-2xl" 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>Spotify</p>
                        </div>
                    </GlassSurface>

                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={hv}
                                alt="voidheart"
                                className="h-50 w-50 rounded-2xl" 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>Voidheart</p>
                        </div>
                    </GlassSurface>

                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={ruination}
                                alt="robloxgame"
                                className="h-50 w-50 rounded-2xl" 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>Roblox (old)</p>
                        </div>
                    </GlassSurface>
                    
                    <GlassSurface 
                        width={300} 
                        height={380}
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={eyes}
                                alt="vseyes"
                                className="h-50 w-50 rounded-2xl" 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>Eyes</p>
                        </div>
                    </GlassSurface>
                </div>
            </GlassSurface>
        </div>
    )
}

export default ProjsWidget