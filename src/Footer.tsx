import React, { useState, useRef, useEffect } from 'react';
import GlassSurface from './components/GlassSurface'
import WebringsMenu from './webringsMenu';
import { FaChevronUp } from "react-icons/fa6";

const Footer: React.FC = () => {
  const [showWebrings, setShowWebrings] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowWebrings(false);
      }
    };
    if (showWebrings) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showWebrings]);

  return (
    <footer className="text-white mt-10">

      {showWebrings && (
        <div ref={menuRef}>
          <WebringsMenu />
        </div>
      )}

      <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingBottom: '1rem' }}>
        <GlassSurface
          width={460}
          height={50}
          borderRadius={50}
          className="header"
        >
          <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'left', alignItems: 'flex-start', paddingBottom: '0.6rem', paddingLeft: '1rem' }}>
            &copy; {new Date().getFullYear()} H4LO Technologies. All Rights Reserved
          </div>

          <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 20, display: 'flex', justifyContent: 'right', alignItems: 'flex-start', paddingBottom: '0.7rem', paddingRight: '1rem' }}>
            <button
              onClick={() => setShowWebrings(prev => !prev)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white', padding: 0, display: 'flex', alignItems: 'center' }}
              aria-label="Toggle webrings"
            >
              <FaChevronUp style={{
                transition: 'transform 0.2s ease',
                transform: showWebrings ? 'rotate(180deg)' : 'rotate(0deg)'
              }} />
            </button>
          </div>
        </GlassSurface>
      </div>

    </footer>
  );
};

export default Footer;