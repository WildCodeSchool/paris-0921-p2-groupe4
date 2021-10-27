import React from 'react';
import './content.css';
import FluxA from './fluxActualite';

function Content() {
  return (
    <div>
      <div>
        <h2 className="content">Content</h2>
      </div>
      <div>
        <FluxA />
      </div>
    </div>
  );
}

export default Content;
