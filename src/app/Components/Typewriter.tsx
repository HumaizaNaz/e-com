import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterProps {
  strings: string[];
}

const TypewriterComponent: React.FC<TypewriterProps> = ({ strings }) => {
  return (
    <div style={{ fontSize: '24px', color: '#333', fontFamily: 'Arial, sans-serif' }}>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
