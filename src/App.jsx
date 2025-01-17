
import AboutUs from "./pages/aboutUs/AboutUs";
import ArticlePage from "./pages/articlepage/ArticlePage";
import Home from "./pages/home/home";
import { Route,Routes } from "react-router-dom";
import CreateArticle from "./pages/createarticle/CreateArticle";
import NotFound from "./pages/404/notfound";


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/article/:id" element={<ArticlePage/>}></Route>
        <Route path="/create-article" element={<CreateArticle/>}></Route>
      </Routes>
    </>
  );
}

export default App;
