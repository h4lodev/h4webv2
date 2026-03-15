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
              width={1080} 
              height={440}
              borderRadius={50}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              className="header"
            >
            <div className="flex flex-col justify-center items-center min-h-screen w-full"> 
                <pre className="text-left text-green-400 p-6 rounded-lg font-mono text-sm shadow-2xl overflow-x-auto border border-gray-800">
                {content}
                </pre>
            </div>
            </GlassSurface>

        </p>
    </div>
    );

};

export default FastfetchDisplay;
