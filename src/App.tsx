import React  from 'react';
import { BrowserRouter } from "react-router-dom"
import Routes from 'tasks/Routes';
import Nav from 'tasks/Nav';
import Layout from 'tasks/Layout';
import { Footer } from 'Footer';
import { ContextExampleProvider } from 'tasks/ContextExample';
import { UserContextProvider } from 'tasks/UserContext';
import { TodoContextProvider } from 'tasks/TodoList/TodoContextProvider';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <ContextExampleProvider initialName="Test">
          <TodoContextProvider>
            
            <Layout nav={<Nav />} footer={<Footer />}>
              <Routes />
            </Layout>

          </TodoContextProvider>
        </ContextExampleProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
