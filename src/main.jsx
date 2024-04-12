import React from 'react';
import ReactDOM from 'react-dom/client';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import HomeAdmin from './pages/HomeAdmin';
import Details from './pages/Details';
import DetailsAdmin from './pages/DetailsAdmin';
import Header from './components/Header';
import HeaderAdmin from './components/HeaderAdmin';
import Menu from './components/Menu';
import MenuAdmin from './components/MenuAdmin';
import CardUser from './components/CardUser';
import CardUserAdmin from './components/CardUserAdmin';
import New from './pages/New';
import Edit from './pages/Edit';

import GlobalStyles from './styles/global';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ThemeProvider>
);
