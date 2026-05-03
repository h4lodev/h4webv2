import React from 'react';
import GlassSurface from './components/GlassSurface'
import catppuccin from './assets/img/catppucin.png'
import ufp from './assets/img/ultrafastparrot.gif'
import noai from './assets/img/noai.png'

const WebringsMenu: React.FC = () => {
  return (
    <footer className="text-white mt-10">
      <div style={{ position: 'fixed', bottom: 0, left: 200, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '4rem' }}>
        <GlassSurface
          width={120}
          height={180}
          borderRadius={20}
          className="webringsMenu"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', height: '100%', }}>
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
                <img alt="UFP Webring" src={noai} style={{ height: '24px', width: 'auto', display: 'block' }} />
              </a>
              <a href="https://baccyflap.com/noai/?nxt&s=ayh">&rarr;</a>
            </div>
          </div>
        </GlassSurface>
      </div>
    </footer>
  );
};

export default WebringsMenu;