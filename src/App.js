import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";
import { lazy, Suspense } from "react";

//Using lazy loading to lazy load component in react
const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(()=>import("./pages/Blog"));
const Image = lazy(()=>import("./pages/Image"));


function App() {
  return (
    <div>
      <Suspense>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/image" element={<Image />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  )
}

export default App;