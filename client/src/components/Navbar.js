import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Homepage</NavLink>
                </li>
                <li>
                    <NavLink to='/authentication'>Register / Login</NavLink>
                </li>
                <li>
                    <NavLink to='/user-profile'>Profile</NavLink>
                </li>
            </ul>
        </nav>
    )
}