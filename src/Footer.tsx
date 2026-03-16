import React from 'react';
import GlassSurface from './components/GlassSurface'
import catppuccin from './assets/img/catppucin.png'

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-10">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <p className="">
            <GlassSurface 
              width={540} 
              height={50}
              borderRadius={50}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="header"
            >
              &copy; {new Date().getFullYear()} H4LO Technologies. All rights reserved.
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
            </GlassSurface>

          </p>
      </div>
    </footer>
  );
};

export default Footer;
