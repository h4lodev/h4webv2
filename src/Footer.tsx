import React from 'react';
import GlassSurface from './components/GlassSurface'
import catppuccin from './assets/img/catppucin.png'

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-10">
      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingBottom: '1rem' }}>
          <p className="">
            <GlassSurface 
              width={500} 
              height={50}
              borderRadius={50}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="header"
            >

              <div style={{position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'left', alignItems: 'flex-start', paddingBottom: '0.6rem', paddingLeft: '0.4rem' }}>
                &copy; {new Date().getFullYear()} H4LO Technologies. All rights reserved.
              </div>

              <div style={{position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'right', alignItems: 'flex-start', paddingBottom: '0.6rem', paddingRight: '0.4rem'}}>
                <a href="https://ctp-webr.ing/h4lo/previous">&larr;</a>

                <a
                  href="https://ctp-webr.ing/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-6 w-10 margin-10 pl-2 pr-2" 
                >
                  <img id="catppuccin" alt="Catppuccin Webring" src={catppuccin}/>
                </a>

                <a href="https://ctp-webr.ing/h4lo/next">&rarr;</a>
              </div>

            </GlassSurface>

          </p>
      </div>
    </footer>
  );
};

export default Footer;
