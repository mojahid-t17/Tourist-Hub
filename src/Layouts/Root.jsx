import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const Root = () => {
    return (
        <div className="relative">
            <Navbar></Navbar>
            <div className="pt-16"> {/* Adjust this value based on the navbar height */}
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;