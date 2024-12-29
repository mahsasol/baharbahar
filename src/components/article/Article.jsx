import styled from "./article.module.css"
import holiday from "../../assets/images/holidaysbluepik.jpg"

function Article() {
    return (
        <div className={styled.articleWrapper}>
           <img src={holiday}/>
           
            <h3>متغیر ها در اسکریپت</h3>
            <p> خواندن 5 دقیقه ای </p>

        </div>
    )
}
export default Article