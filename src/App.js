import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import RankingPage from './pages/RankingPage';
import Layout from './components/common/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="rank" element={<RankingPage />} />
            <Route path="/nick/:name" element={<UserPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
