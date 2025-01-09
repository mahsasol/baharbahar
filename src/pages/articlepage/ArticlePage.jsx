import Navbar from "../../components/navbar/Navbar";
import styled from "../articlepage/articalpage.module.css"
import picture from "../../assets/images/cristmastreeBall.png"
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";

function ArticlePage() {
    const [ article, setArticle]=useState({});

    const params = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/articles/${params.id}`)
            .then((result) => {
                setArticle(result.data);
            })
            .catch((error)=>{
                console.log(error)
            })
    })

    return (

        <div>
            <Navbar title="Bahar Blog" />

            <div className={styled.articlePageWrapper}>

                <div className="container">

                    <h1>{article.title} </h1>

                    <div className={styled.articleinfo}>

                        <span> تاریخ:{article.date} </span>
                        <span> نویسنده:{article.athor}  </span>
                        <span> مدت زمان خواندن: {article.readingTime} دقیقه </span>

                    </div>

                    <img src={article.imageUrl}  />

                    <p>{article.content}</p>

                </div>

                <Footer />

            </div>
        </div>
    );
}


export default ArticlePage;