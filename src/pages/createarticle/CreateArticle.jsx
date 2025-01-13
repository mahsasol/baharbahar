import styled from "./createArticle.module.css"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react";

function CreateArticle() {

    const [article, setArticle] = useState({
        title: "",
        date: ""
    })

    const handleChangeArticle = (e) => {

        switch (e.target.name) {
            case "title":
                setArticle({
                    title: e.target.value
                })
                break;

            case "date":
                setArticle({
                    date: e.target.value
                })
                break;
        }
    }


    console.log(article);


    // const [counter, setCounter] = useState(0)

    // const increaseToCounter = () => {
    //     setCounter(counter + 1)
    // }
    // const decreaseToCounter = () => {
    //     setCounter(counter - 1)
    // }
    console.log(article);

    return (
        <>
            <Navbar title="Bahar Blog" />
            <div className={styled.createArticlePage}>
                <div className="container">


                    <h1>ساخت مقاله</h1>

                    <div className={styled.inputWrapper}>
                        <label>عنوان</label>
                        <input name="title" onChange={handleChangeArticle} type="text" />
                    </div>

                    <div className={styled.inputWrapper}>
                        <label> تاریخ</label>
                        <input name="date" onChange={handleChangeArticle} type="text" />
                    </div>


                    {/* <button onClick={increaseToCounter}>افزایش</button>
                    <span>{counter}</span>
                    <button onClick={decreaseToCounter}>کاهش</button> */}

                </div>
            </div>



        </>

    )
}
export default CreateArticle;