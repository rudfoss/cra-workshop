import React  from 'react';
import { BrowserRouter } from "react-router-dom"
import Routes from 'tasks/Routes';
import Nav from 'tasks/Nav';
import Layout from 'tasks/Layout';
import { Footer } from 'Footer';
import { ContextExampleProvider } from 'tasks/ContextExample';

function App() {
  return (
    <BrowserRouter>
      <ContextExampleProvider initialName="Test">
        <Layout nav={<Nav />} footer={<Footer />}>
          <Routes />
        </Layout>
      </ContextExampleProvider>
    </BrowserRouter>
  );
}

export default App;
