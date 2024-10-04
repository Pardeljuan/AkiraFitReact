import { CartWidgets } from "../CartWidgets/CartWidgets";
import './Navbar.scss';
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to='/'>
            <div className="logo">
                <img src="/akirafit.png" alt="Akira Logo" />
            </div>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/hombre`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hombre</NavLink>
                <NavLink to={`/category/mujer`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mujer</NavLink>
                <NavLink to={`/`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Listado</NavLink>
            </div>
            <CartWidgets/>
        </nav>
    )
}

