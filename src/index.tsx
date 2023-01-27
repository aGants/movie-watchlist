import React from 'react';
import ReactDom from 'react-dom/client';

import PageSearch from './pages/Search';

const root = document.getElementById('root');

const App = () => (<PageSearch />);

ReactDom
  .createRoot(root!)
  .render(<App />);

