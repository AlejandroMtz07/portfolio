import Button from "../components/Button"

function Home() {

    return (
        <div >
            <div className="lg:grid grid-cols-2 grid-rows-2 flex-grow">
                <div 
                    className="font-mc text-white 
                    lg:text-6xl lg:text-left lg:m-10
                    text-lg text-center m-5"
                >
                    Juan Alejandro Santos Martínez
                </div>
                <div className="row-span-2 flex flex-col justify-center items-center gap-5">
                    <div>
                        <h3 className="font-mc text-lg">Conoce mis proyectos:</h3>
                        <Button text="Proyectos" path="/projects"/>
                    </div>
                    <div>
                        <h3 className="font-mc text-lg">Conoce mis habilidades: </h3>
                        <Button text="Habilidades" path="/skills"/>
                    </div>
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
            
        </div>
    )
}

export default Home
