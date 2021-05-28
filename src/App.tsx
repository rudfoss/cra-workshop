import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Routes from 'tasks/Routes';
import Nav from 'tasks/Nav';
import Layout from 'tasks/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout nav={<Nav />} footer={<p>Footer</p>}>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
