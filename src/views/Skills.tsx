import '../index.css'

export default function Skills() {
	const borderStyles = "border-t-[#AAA] border-l-[#AAA] border-b-[#565656] border-r-[#565656] border-4 bg-[url('../assets/button_bg_image.png')] pixel_corners text-white"
	return (
		<div className="flex flex-col lg:mt-20 justify-center items-center text-center">
			<h2 className="font-mc lg:text-5xl text-3xl">
				Mis habilidades y certificaciones.
			</h2>
			<div className="lg:grid flex flex-col grid-cols-2 grid-rows-3 w-3/4 h-96 lg:mt-20 mt-10 gap-10 font-mc text-2xl">
				<div className={`col-span-1 row-span-3 ${borderStyles}`}
				>
					Lenguajes de programación.
				</div>
				<div className={`row-span-2 ${borderStyles}`}>
					Herramientas.
				</div>
				<div className={`${borderStyles}`}>
					Certificaciones
				</div>
			</div>
		</div>
	)
}
