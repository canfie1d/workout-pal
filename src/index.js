import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import publicRoutes from './routes';
import App from './App';
import Layout from './Layout/Layout';
import ScrollToTop from './Layout/ScrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App>
        <Layout>
          {publicRoutes}
        </Layout>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
