import { Outlet } from "react-router-dom";


export default function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-[#6EB1FF]">
            <div>
                <img src="../assets/clouds_background.png" alt="Clouds" className="contrast-125" />
            </div>
            <div>
                <Outlet />
            </div>
            <footer className="w-full lg:h-32 h-32 text-center mt-60 p-10 font-mc 
                text-lg bg-[url('../assets/grass-border.jpg')] text-white flex justify-center items-center"
            >
                <div>
                    Footer content
                </div>
            </footer>
        </div>
    )
}
