import {Link} from 'react-router-dom';

function Layout() {
    return (
        <div>
            <h1>Layout Page</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    );
}

export default Layout;