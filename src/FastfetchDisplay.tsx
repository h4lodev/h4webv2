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
        <p className="">
            <GlassSurface 
              width="auto" 
              height="auto"
              borderRadius={50}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="fastfetch max-h-[480px]"
            >
            <div>

            </div>

            <div style={{ height: '100vh', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
                <pre className="text-left text-orange-400 p-6 rounded-lg font-mono text-sm shadow-2xl overflow-x-auto">
                  {content}
                </pre>
            </div>
            </GlassSurface>
        </p>
    </div>
    );

};

export default FastfetchDisplay;
