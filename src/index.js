import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Addcompany from './components/addcompany';
import Header from './components/Header';
import SubmitButton from './components/SubmitButton';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header></Header>
    <Addcompany></Addcompany>
  </React.StrictMode>
);

