import Books from "../../components/books/Books.jsx";
import Navigation from "../../components/navbar/Navbar.jsx";

//The single page of our application that is rendered in index.js
const Home = () => {
    return(
        <div>
            <Navigation/>
            <div>
            <Books/>
            </div>
        </div>
    )
}

export default Home;