import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import ContextWrapper from './pages/calendar/context/ContextWrapper'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  <AuthContextProvider>

  <ContextWrapper>
  <App />
  </ ContextWrapper>
  
    </AuthContextProvider>
  </React.StrictMode>
  
);
