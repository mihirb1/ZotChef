import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ClerkProvider } from '@clerk/clerk-react'

// import reportWebVitals from './reportWebVitals';

const VITE_CLERK_PUBLISHABLE_KEY='pk_test_cG9ldGljLWdhdG9yLTM3LmNsZXJrLmFjY291bnRzLmRldiQ'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
  </ClerkProvider>
);

