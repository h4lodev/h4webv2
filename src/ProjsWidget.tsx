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
                width="clamp(300px, 95vw, 1000px)" 
                height="clamp(400px, 85vh, 840px)"
                borderRadius={50}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '1000px', overflowY: 'auto'   }}
                className="projswidget1"
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <GlassSurface 
                        width="clamp(140px, 24vw, 300px)" 
                        height="clamp(180px, 32vw, 380px)"
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={unlabeled}
                                alt="unlabeled1"
                                className="rounded-2xl" style={{ width: "clamp(90px, 18vw, 200px)", height: "clamp(90px, 18vw, 200px)", objectFit: "cover" }} 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>NONAME</p>
                        </div>
                    </GlassSurface>

                    <GlassSurface 
                        width="clamp(140px, 24vw, 300px)" 
                        height="clamp(180px, 32vw, 380px)"
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={unlabeled}
                                alt="unlabeled2"
                                className="rounded-2xl" style={{ width: "clamp(90px, 18vw, 200px)", height: "clamp(90px, 18vw, 200px)", objectFit: "cover" }} 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>NONAME</p>
                        </div>
                    </GlassSurface>
                    
                    <GlassSurface 
                        width="clamp(140px, 24vw, 300px)" 
                        height="clamp(180px, 32vw, 380px)"
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={knewher}
                                alt="knewher"
                                className="rounded-2xl" style={{ width: "clamp(90px, 18vw, 200px)", height: "clamp(90px, 18vw, 200px)", objectFit: "cover" }} 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>Spotify</p>
                        </div>
                    </GlassSurface>

                    <GlassSurface 
                        width="clamp(140px, 24vw, 300px)" 
                        height="clamp(180px, 32vw, 380px)"
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={hv}
                                alt="voidheart"
                                className="rounded-2xl" style={{ width: "clamp(90px, 18vw, 200px)", height: "clamp(90px, 18vw, 200px)", objectFit: "cover" }} 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>Voidheart</p>
                        </div>
                    </GlassSurface>

                    <GlassSurface 
                        width="clamp(140px, 24vw, 300px)" 
                        height="clamp(180px, 32vw, 380px)"
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={ruination}
                                alt="robloxgame"
                                className="rounded-2xl" style={{ width: "clamp(90px, 18vw, 200px)", height: "clamp(90px, 18vw, 200px)", objectFit: "cover" }} 
                            />
                            <p style={{ color: 'white', fontSize: '2rem' }}>Roblox (old)</p>
                        </div>
                    </GlassSurface>
                    
                    <GlassSurface 
                        width="clamp(140px, 24vw, 300px)" 
                        height="clamp(180px, 32vw, 380px)"
                        borderRadius={50}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                            <img
                                src={eyes}
                                alt="vseyes"
                                className="rounded-2xl" style={{ width: "clamp(90px, 18vw, 200px)", height: "clamp(90px, 18vw, 200px)", objectFit: "cover" }} 
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