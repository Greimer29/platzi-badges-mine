import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Badge 
      firtsName="Marcelino"
      lastName="Angostura"
      avatarImage="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?d=identicon"
      ocupation="Central"
      twitter="contumacho"

    />
  </React.StrictMode>,
  document.getElementById('root')
);

