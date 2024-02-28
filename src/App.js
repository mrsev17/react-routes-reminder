import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

import "./App.css";
import PageNotFound from "./pages/PageNotFound";
import NestingRoute from "./pages/NestingRoute";

function App() {
    return (
        <div className="App">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/*" element={<PageNotFound />} />
                <Route path=":about/nestedPage" element={<NestingRoute />} />
            </Routes>
        </div>
    );
}

export default App;
