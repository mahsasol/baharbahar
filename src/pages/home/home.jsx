import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css"
import pic from "../../assets/images/christmas.jpg"


function Home() {

    let articles = [

        {
            id: 1,
            imageUrl:pic ,
            title: "Merry christmas",
            readingTime: 5
        },
        {
            id: 2,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNbBDfufCWFtWbhFUhcCzIW-iUGB1YQLERA&s" ,
            title: "Cristmas cookies",
            readingTime: 2
        },
        {
            id: 3,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_7V8MrvBvH0gosNs-LKMjtXncM6-mBD6jw&s",
            title: "Gift for cristmas",
            readingTime: 7
        },
        {
            id: 4,
            imageUrl: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMjYzNzMwLWltYWdlLWt3dnkwejc4LmpwZw.jpg",
            title: "Make cristmas tree and gift",
            readingTime: 4
        }

    ]

    return (
        <div className={styled.homeWrapper}>
            <Navbar title="bahar blog" />

            <div className="container">

                <h2>مقالات جدید</h2>

                <div className={styled.articles}>

                    {
                        articles.map(article => (
                            <Article key={article.id} article={article}/>
                        ))
                    }


                </div>

            </div>
        </div>
    )
}

export default Home;