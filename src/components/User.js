import image from "../assets/image-victor.jpg"

const User = () => {
    return (
        <div className="user">
            <img className="user-img" src={image} alt="victor-crest"/>
            <h1 className="user-title">Victor Crest <span className="user-age">26</span></h1>
            <h3 className="user-location">London</h3>
        </div>
    );
}
export default User;