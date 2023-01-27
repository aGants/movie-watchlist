import React from 'react';
import ReactDom from 'react-dom/client';

const root = document.getElementById('root');

const App = () => (<div>Hello!</div>);

ReactDom
  .createRoot(root!)
  .render(<App />);

