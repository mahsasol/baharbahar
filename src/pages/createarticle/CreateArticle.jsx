import styled from "./createArticle.module.css"
import Navbar from "../../components/navbar/Navbar"
import { useState } from "react";

function CreateArticle() {
    const [counter, setCounter] = useState(0)

    const increaseToCounter = () => {
        setCounter(counter + 1)
    }
    const decreaseToCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            <Navbar title="Bahar Blog" />
            <div className={styled.createArticlePage}>
                <div className="container">


                    <h1>ساخت مقاله</h1>

                    <button onClick={increaseToCounter}>افزایش</button>
                    <span>{counter}</span>
                    <button onClick={decreaseToCounter}>کاهش</button>

                </div>
            </div>



        </>

    )
}
export default CreateArticle;