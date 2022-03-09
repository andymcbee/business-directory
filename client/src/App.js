import './App.css';
import Home from "./routes/Home"
import SearchResultsPage from "./routes/SearchResultsPage"
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { BusinessesContextProvider } from "./context/BusinessesContext"




function App() {
  return (
    <BusinessesContextProvider>
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search-results" element={<SearchResultsPage />} />
            </Routes>
        </Router>
    </div>
</BusinessesContextProvider>
  );
}

export default App;
