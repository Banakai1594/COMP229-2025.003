import {Link} from 'react-router-dom';

function Layout() {
    return (
        <div>
            <h1>Layout Page</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/services">Services</Link>
            </nav>
        </div>
    );
}

export default Layout;