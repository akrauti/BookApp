import Books from "../../components/books/Books.jsx";
import Navigation from "../../components/navbar/Navbar.jsx";

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