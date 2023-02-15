import React from 'react';
import ReactDom from 'react-dom/client';
import './vars.scss';
import './style.scss';

import Search from 'core/pages/Search';

const root = document.getElementById('root');

const App = () => <Search />;

ReactDom
  .createRoot(root!)
  .render(<App />);

