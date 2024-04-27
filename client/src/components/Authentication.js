import { NavLink, Outlet } from 'react-router-dom';

export default function Authentication() {
    return (
        <main>
            <h2>Hello Authentication</h2>
            <ul>
                <li>
                    <NavLink to='/authentication/register'>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/authentication/login'>Login</NavLink>
                </li>
            </ul>
            <Outlet />
        </main>

    );
}