import React from 'react';
import { render } from 'react-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/index.scss';

import { App } from './App';
import { ErrorProvider } from './ErrorContext';
import { TodosProvider } from './TodosContext';

const root = document.getElementById('root');

render(
  <ErrorProvider>
    <TodosProvider>
      <App />
    </TodosProvider>
  </ErrorProvider>, root,
);
