import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import CertificationPage from "./pages/certificationPage";


import { usePageLoading } from "./hooks/usePageLoading";


import Header from "./components/header.jsx"

import LoadingPage from "./components/LoadingPage.jsx";
// Componente del encabezado

// Página de la biblioteca
import LibraryPage from "./pages/library";

// Página de inicio
import HomePage from "./pages/home";



function App() {

  const isLoading = usePageLoading();
  return (
    <Router>
      {isLoading && <LoadingPage />}
      <div className={isLoading ? 'content-hidden' : 'content-visible'}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/certificacion/:id" element={<CertificationPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;