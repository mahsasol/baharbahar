import styled from "./createArticle.module.css"
import Navbar from "../../components/navbar/Navbar"
import Input from "../../components/input/Input";
import { useState } from "react";
import TextArea from "../../components/textarea/TextArea";
import Footer from "../../components/footer/Footer";
import axios from "axios";

function CreateArticle() {
    const [article, setArticle] = useState({
        title: "",
        date: "",
        readingTime: "",
        athor: "",
        message: "",
        imageUrl:"",
    });

    const handleChangeArticle = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

        // switch (e.target.name) {
        //     case "title":
        //         setArticle((prevState) => ({
        //             ...prevState,
        //             title: e.target.value
        //         }))
        //         break;

        //     case "date":
        //      setArticle((prevState)=> ({
        //         ...prevState,
        //         date : e.target.value
        //      }))
        //         break;
        // }
    };
    const handleChangeArticleMessage = (e) => {
        setArticle((prevState) => ({
            ...prevState,
            message: e.target.value,
        }));
    };


    // console.log(article);

    // const [counter, setCounter] = useState(0)

    // const increaseToCounter = () => {
    //     setCounter(counter + 1)
    // }
    // const decreaseToCounter = () => {
    //     setCounter(counter - 1)
    // }
    const handleCreateNewArticle = () => {
        // api call 
        // console.log(article);
        axios.post("http://localhost:8000/articles",{
            id: 9,
            title: article.title,
            date: article.date,
            readingTime: article.readingTime,
            athor: article.athor,
            imageUrl: article.imageUrl,
            content: article.message,

        });
        
    }
    return (
        <>
            <Navbar title="Bahar Blog" />
            <div className={styled.createArticlePage}>
                <div className="container">


                    <h1>ساخت مقاله</h1>
                    <Input
                        label="عنوان"
                        name="title"
                        change={handleChangeArticle}
                        type="text"
                    />
                    <Input
                        label="تاریخ"
                        name="date"
                        change={handleChangeArticle}
                        type="text"
                    />
                    <Input
                        label="مدت زمان خواندن"
                        name="readingTime"
                        change={handleChangeArticle}
                        type="text"
                    />
                    <Input
                        label="نویسنده"
                        name="athor"
                        change={handleChangeArticle}
                        type="text"
                    />
                    <Input
                        label="آدرس عکس"
                        name="imageUrl"
                        change={handleChangeArticle}
                        type="text"
                    />

                    <TextArea label="متن" name="message" handleChange={handleChangeArticleMessage} />

                    <div className={styled.buttonWrapper}> 
                        <button onClick={handleCreateNewArticle}> ساخت مقاله </button>
                    </div>

                    {/* <div className={styled.inputWrapper}>
                        <label> تاریخ</label>
                        <input name="date" onChange={handleChangeArticle} type="text" />
                    </div>


                    <div className={styled.inputWrapper}>
                        <label> مدت زمان خواندن </label>
                        <input name="readingTime" onChange={handleChangeArticle} type="text" />
                    </div>

                    
                    <div className={styled.inputWrapper}>
                        <label> نویسنده</label>
                        <input name="athor" onChange={handleChangeArticle} type="text" />
                    </div> */}

                    {/* <button onClick={increaseToCounter}>افزایش</button>
                    <span>{counter}</span>
                    <button onClick={decreaseToCounter}>کاهش</button> */}

                </div>

            </div>
            <Footer />
        </>
    )
}
export default CreateArticle;