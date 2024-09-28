import { NavLink } from "react-router-dom";
import Navimg from "../../img/Top Banner.png";
import Iconbtn from "../../img/shape-14.png";

function Navbar() {
    return (
        <header className="m-10">
            <h1>
                <img src={Navimg} alt="Top Banner" />
            </h1>
            <nav className="flex border-solid border-black mt-3 items-center gap-20">
                <div className="flex items-center">
                    <button className="bg-orange-400 p-2 rounded-lg mr-80 w-40 flex items-center">
                        <img className="mr-2" src={Iconbtn} alt="Little Learners Icon" />
                        Little Learners
                    </button>
                </div>
                <div className="flex gap-10 text-center">
                    {/* <ul className="flex gap-10">
                        <li><a href="">Home  |</a></li>
                        <li><a href="">About  |</a></li>
                        <li><a href="">Academics  |</a></li>
                        <li><a href="">Student Life  |</a></li>
                    </ul> */}
                    <NavLink to='/Home'>Home  |</NavLink>
                    <NavLink to='/Home'>About  |</NavLink>
                    <NavLink to='/Home'>Academics  |</NavLink>
                    <NavLink to='/Student Life'>Student Life  |</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </div>
                <button className="bg-orange-400 p-2 rounded-lg w-40 hover:bg-orange-200" aria-label="Contact Us">
                    Contact
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
