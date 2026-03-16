import GlassSurface from "./components/GlassSurface"

function ProjsWidget(){
    return (
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GlassSurface 
                width={1100} 
                height={480}
                borderRadius={50}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                className="fastfetch"
            >
                <GlassSurface 
                    width={1000} 
                    height={380}
                    borderRadius={50}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    className="fastfetch"
                >
                    <p style={{ color: 'white', fontSize: '2rem' }}>PROJECT CARDS GO HERE WHEN READY</p>
                </GlassSurface>
            </GlassSurface>

        </div>
    )

}

export default ProjsWidget