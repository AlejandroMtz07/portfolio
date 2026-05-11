import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


export default function AppLayout() {
    
    return (
        <div className="flex flex-col min-h-screen bg-[#6EB1FF]">
            <div>
                <img src="../assets/clouds_background.png" alt="Clouds" className="contrast-125 w-full lg:h-80"/>
            </div>
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}
