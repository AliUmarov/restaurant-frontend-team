import "./App.css";
import ContactsPage from "./components/Pages/ContactsPage";
import { Route, Routes } from 'react-router';
import HomePage from './components/Pages/HomePage';
import React from 'react';
import AboutUsPages from './components/Pages/AboutUsPages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
          <Route path="/about" element={ <AboutUsPages />} />
          <Route path="/contacts" element={ <ContactsPage />} />

      </Routes>
    </div>
  );
}

export default App;
