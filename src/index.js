import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import {createRoot} from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path='/*' element={<App />}/>
    </Routes>
    </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
