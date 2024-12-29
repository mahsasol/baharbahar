import styled from "./article.module.css"
import holiday from "../../assets/images/holidaysbluepik.jpg"

function Article(props) {
    console.log(props.article.title)

    return (

        <div className={styled.articleWrapper}>
            <img src={props.article.imageUrl} />

            <h3>{props.article.title}</h3>
            <p> خواندن {props.article.readingTime} دقیقه ای </p>

        </div>
    )
}
export default Article