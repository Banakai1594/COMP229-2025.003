import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import Projects from './components/Projects'
import Home from './components/Home';

function MainRoutes() {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
export default MainRoutes;