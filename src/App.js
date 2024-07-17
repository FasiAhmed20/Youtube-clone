import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import Searchpage from "./Searchpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import ContactCard from './Components/ContactCard';
// import Header from './Components/Header';
// import Counter from './Components/Counter';
// import Todo from './Components/Todo';
// import pets from './Components/Pets';
// import Pets from './Components/Pets';
// import Form from './Components/Form';
// import FormV2 from "./Components/FormV2";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <div className="app-page">
            <Sidebar />
            <main>
              <Routes>
                <Route path="/" element={<Recommended />} />
                <Route path="/search" element={<Searchpage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
