import "./spinner.css";

function Spinner() {
    return (
        <div className="loading-Page">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )

}
export default Spinner;