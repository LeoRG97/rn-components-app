import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigation/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

export default App;
