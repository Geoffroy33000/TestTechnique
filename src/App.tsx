import React from 'react';
import { AppProvider } from './Context';
import Example from './Theme/Example';

const App = () => (
  <AppProvider>
    <Example />
  </AppProvider>
);

export default App;
