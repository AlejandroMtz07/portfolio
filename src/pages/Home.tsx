import Button from "../components/Button"

function App() {

    return (
        <div className="flex flex-col min-h-screen bg-[#6EB1FF]">
            <div>
                <img src="../assets/clouds_background.png" alt="Clouds" className="contrast-125"/>
            </div>
            <div className="lg:grid grid-cols-2 grid-rows-2 flex-grow">
                <div 
                    className="font-mc text-white 
                    lg:text-6xl lg:text-left lg:m-10
                    text-lg text-center m-5"
                >
                    Juan Alejandro Santos Martínez
                </div>
                <div className="row-span-2 flex flex-col justify-center items-center gap-3">
                    <Button text="Projects" path="hola/hola"/>
                    <Button text="Skills" path="hola/hola"/>
                </div>
                <div 
                    className="font-mc text-white 
                    lg:text-3xl lg:text-left lg:ml-10
                    text-lg text-center flex flex-col"
                >
                    <span className="text-black lg:text-4xl text-xl">
                        Sobre mí:
                    </span>
                    <p className="font-normal lg:text-2xl text-sm">
                        Egresado de la carrera de Ingeniería Informática <br />
                        con conocimientos en desarrollo de software, <br />
                        redes de telecomunicaciones e Internet de las Cosas (IoT).
                    </p>
                </div>
            </div>
            <footer className="w-full h-44 text-center mt-20 p-10 font-mc 
                text-lg bg-[url('../assets/grass-border.jpg')] text-white flex justify-center items-center"
            >
                <div>
                    Footer content
                </div>
            </footer>
        </div>
    )
}

export default App
