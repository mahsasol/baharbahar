
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlepage/ArticlePage";
import Home from "./pages/home/home";
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/article/:id" element={<ArticlePage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
