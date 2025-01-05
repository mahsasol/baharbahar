import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import pic from "../../assets/images/christmas.jpg";
import axios from "axios";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        //Api call

        axios.get("http://localhost:8000/articles")
            .then((result) => {
                setArticles(result.data.data);
            })
            .catch((error)=>{
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
                        <Article key={article.id} article={article} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
