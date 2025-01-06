
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlepage/ArticlePage";
import Home from "./pages/home/home";
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/Article" element={<ArticlePage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
