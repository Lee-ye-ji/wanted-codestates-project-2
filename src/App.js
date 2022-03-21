import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import KartPage from './pages/KartPage';
import SearchPage from './pages/SearchPage';
import RankingPage from './pages/RankingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<KartPage />}>
            <Route path="rank" element={<RankingPage />} />
            <Route path="user:id" element={<SearchPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
