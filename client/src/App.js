import './App.css';
import Home from "./routes/Home"
import SearchResultsPage from "./routes/SearchResultsPage"
import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { BusinessesContextProvider } from "./context/BusinessesContext"
import ViewSingleBusinessPage from "./routes/ViewSingleBusinessPage"
import EditSingleBusinessPage from "./routes/EditSingleBusinessPage"





function App() {
  return (
    <BusinessesContextProvider>
    <div>
        <Router>
            <Routes>
            <Route path="/" element={<Home className="test"/>} />
            <Route path="search" element={<SearchResultsPage />} />
            <Route path="business/:id" element={<ViewSingleBusinessPage />} />
            <Route path="business/edit/:id" element={<EditSingleBusinessPage />} />
            </Routes>
        </Router>
    </div>
</BusinessesContextProvider>
  );
}

export default App;
