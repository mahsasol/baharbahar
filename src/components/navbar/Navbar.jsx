import styled from "./navbar.module.css"

function Navbar() {
    const title = "بهار سایت"
    return (
        <div className={styled.header}>
            <h3>{title}</h3>
           <ul>
            <li>لیست مقالات</li>
            <li>مقاله جدید</li>
            <li>درباره</li>
           </ul>
        </div>
    )
}

export default Navbar;