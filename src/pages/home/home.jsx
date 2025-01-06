import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
// import pic from "../../assets/images/christmas.jpg";
// import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";




function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        //Api call

        axios.get("http://localhost:8000/articles")
            .then((result) => {
                setArticles(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (
        <div className={styled.homeWrapper}>
            <Navbar title="bahar blog" />

            <div className="container">
                <h2>مقالات جدید</h2>

                <div className={styled.articles}>
                    {articles.map((article) => (
                        <Link to={`/article/${article.id}`}>
                            <Article key={article.id} article={article} />
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />

        </div>
    );
}

export default Home;
