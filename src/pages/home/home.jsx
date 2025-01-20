import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
// import pic from "../../assets/images/christmas.jpg";
// import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";




function Home() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)
        //Api call

        axios.get("http://localhost:8000/articles")
            .then((result) => {
                setArticles(result.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className={styled.homeWrapper}>
            <Navbar title="Bahar Blog" />
           
            
           
            <div className="container">
                <h2>مقالات جدید</h2>

                {
                    isLoading ? (<Spinner />) : (
                        <div className={styled.articles}>
                            {articles.map((article) => (
                                <Link to={`/article/${article.id}`}>
                                    <Article key={article.id} article={article} />
                                </Link>
                            ))}
                        </div>
                    )
                }


            </div>

            <Footer />

        </div>
    );
}

export default Home;
