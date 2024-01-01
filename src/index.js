import React from 'react';
import ReactDOM from 'react-dom/client';
import Fullslow from './component/Fullslow';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Fullslow />
  </BrowserRouter>
);
