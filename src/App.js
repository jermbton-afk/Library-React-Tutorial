import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" render={() => <Books books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
