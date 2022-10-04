import React from 'react';
import ReactDOM from 'react-dom/client';
import Project from './project'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Project/>
  </React.StrictMode>
);
