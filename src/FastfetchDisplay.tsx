import React, { useEffect, useState } from 'react';
import fastfetchData from './assets/fastfetch.txt';
import GlassSurface from './components/GlassSurface'

const FastfetchDisplay: React.FC = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetch(fastfetchData)
      .then(response => response.text())
      .then(text => setContent(text));
  }, []);

    return (
    <div style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <div>
            <GlassSurface 
              width="clamp(300px, 90vw, 800px)" 
              height="auto"
              borderRadius={50}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="fastfetch max-h-[85vh] overflow-y-auto"
            >

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <pre className="text-left text-orange-400 p-6 rounded-lg font-mono shadow-2xl overflow-x-auto" style={{ fontSize: 'clamp(0.5rem, 1.6vw, 0.875rem)', lineHeight: 1.3, margin: 0 }}>
                  {content}
                </pre>
            </div>
            </GlassSurface>
        </div>
    </div>
    );

};

export default FastfetchDisplay;
