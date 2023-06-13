import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Root from "./screens/Root";
import Home from "./screens/Home";
import Products from "./screens/Products";
import About from "./screens/About";
import Learn from "./screens/Learn";
import Contact from "./screens/Contact";
import Companies from "./screens/Companies";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/companies" element={<Companies />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
