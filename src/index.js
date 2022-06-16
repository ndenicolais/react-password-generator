import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Footer from './components/footer';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <App />
      <Footer />
    </React.StrictMode>
  );