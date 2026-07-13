import React from 'react';
import GlassSurface from './components/GlassSurface'
import h4ring from './assets/logo.svg'
import catppuccin from './assets/img/catppucin.png'
import ufp from './assets/img/ultrafastparrot.gif'
import noai from './assets/img/noai.png'
import rwg from './assets/img/webOsu.png'
import pl from './assets/img/placeholderwebring.png'

const WebringsMenu: React.FC = () => {
  return (
    <footer className="text-white mt-10">
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 'clamp(1rem, 6vw, 4rem)' }}>
        <GlassSurface
          width="clamp(90px, 25vw, 220px)"
          height="clamp(140px, 35vw, 220px)"
          borderRadius={20}
          className="webringsMenu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', height: '100%', }}>
            {/* H4RING set */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <a href="https://webring.h4lo.ca/h4lo/previous">&larr;</a>
              <a href="https://webring.h4lo.ca" target="_blank" rel="noreferrer">
                <img alt="H4RING" src={h4ring} style={{ height: '18px', width: '24px', display: 'block' }} />
              </a>
              <a href="https://webring.h4lo.ca/h4lo/next">&rarr;</a>
            </div>

            {/* placeholderwebring webring set */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <a href="https://gideon.sh">&larr;</a>
              <a href="https://webring.phthallo.com" target="_blank" rel="noreferrer">
                <img alt="Placeholder Webring" src={pl} style={{ height: '24px', width: 'auto', display: 'block' }} />
              </a>
              <a href="https://pgdvault.vercel.app/">&rarr;</a>
            </div>

            {/* ctp webring set */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <a href="https://ctp-webr.ing/h4lo/previous">&larr;</a>
              <a href="https://ctp-webr.ing/" target="_blank" rel="noreferrer">
                <img alt="Catppuccin Webring" src={catppuccin} style={{ height: '24px', width: 'auto', display: 'block' }} />
              </a>
              <a href="https://ctp-webr.ing/h4lo/next">&rarr;</a>
            </div>

             {/* ufp webring set */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <a href="https://ultrafastparrot.net/prev/h4lo">&larr;</a>
              <a href="https://ultrafastparrot.net/" target="_blank" rel="noreferrer">
                <img alt="UFP Webring" src={ufp} style={{ height: '24px', width: 'auto', display: 'block' }} />
              </a>
              <a href="https://ultrafastparrot.net/next/h4lo">&rarr;</a>
            </div>

            {/* noai webring set */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <a href="https://baccyflap.com/noai/?prv&s=ayh">&larr;</a>
              <a href="https://baccyflap.com/noai" target="_blank" rel="noreferrer">
                <img alt="NOAI" src={noai} style={{ height: '24px', width: 'auto', display: 'block' }} />
              </a>
              <a href="https://baccyflap.com/noai/?nxt&s=ayh">&rarr;</a>
            </div>

            {/* RGW webring set */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <a href="https://julieyess.neocities.org/rhythmwebring/rhythmgamewebring?H4LO-previous">&larr;</a>
              <a href="https://julieyess.neocities.org/rhythmwebring/rhythmgamewebring" target="_blank" rel="noreferrer">
                <img alt="Rhythm Games Webring" src={rwg} style={{ height: '24px', width: 'auto', display: 'block' }} />
              </a>
              <a href="https://julieyess.neocities.org/rhythmwebring/rhythmgamewebring?H4LO-next">&rarr;</a>
            </div>
          </div>
        </GlassSurface>
      </div>
    </footer>
  );
};

export default WebringsMenu;