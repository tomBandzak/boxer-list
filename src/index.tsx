import React from 'react';
import ReactDOM from 'react-dom/client';
import BoxerList from './components/BoxerList';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';

const App = () => {
    return (
      <ThemeProvider theme={theme} >
          <BoxerList />
      </ThemeProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
