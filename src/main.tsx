import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@styles/GlobalStyles';
import '@styles/reset.css';

import { dark } from '@styles/theme';
import App from './App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={dark}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </StrictMode>,
);
