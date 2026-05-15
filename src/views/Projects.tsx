import ProjectCard from "../components/ProjectCard"

export default function Projects() {
	return (
		<div className="text-center lg:mt-20 
		font-mc text-2xl justify-items-center">
			<div className="col-span-2 mb-10">
				<h2 className="text-6xl font-bold">
					Proyectos
				</h2>
				<h4>
					Proyectos que he creado.
				</h4>
			</div>
			<ProjectCard
				project_title="Kitchen App (Web)"
				project_tools={"TypeScript, React, Formidable"}
				project_duration={3}
				project_description="Un sistema diseñado para visualización, agregado y subida de recetas a un recetario privado o público. Permitiendo una personalización del perfil de usuario y consulta a perfiles de usuarios y sus recetas dentro de su recetario público."
				project_image="KitchenApp.mp4"
				project_url="https://github.com/AlejandroMtz07/KitchenFront"
			/>
			<ProjectCard
				project_title="Kitchen API (Backend)"
				project_duration={3}
				project_tools="TypeScript, ExpressJS, MySQL, JWT, Nodemailer, Cloudinary"
				project_description="Backend desarrollado para ser consumido por la aplicación web Kitchen App, adaptado para ser capaz de recibir texto y guardarlo dentro de la base de datos enlazado al usuario que subió la receta así como imágenes y guardarlas dentro de un servicio en la nube para almacenamiento de  imágenes "
				project_image="KitchenBackend.png"
				project_url="https://github.com/AlejandroMtz07/KitchenAPI"
			/>
			<ProjectCard
				project_title="Inteligent House (Web)"
				project_duration={3}
				project_tools="TypeScript, React, Zod, Tailwindcss"
				project_description="Aplicación Web desarrollada para monitoreo, registro y personalización de dispositivos IoT. Se encarga de consumir una API para la consulta y muestra de datos relacionados a los dispositivos enlazados mediante código QR único por dispositivo."
				project_image="InteligentHouse.png"
				project_url="https://inteligenthouse.netlify.app/"
			/>
			<ProjectCard
				project_title="Inteligent House (Móvil)"
				project_duration={4}
				project_tools={"Flutter, Firebase, Dart, Arduino"}
				project_description="Aplicación móvil creada para control y enlazado de dispositivos Bluetooth IoT desarrollados en la placa Arduino Uno, y un módulo Bluetooth para envío y recepción de acciones por parte del usuario."
				project_image="InteligentHouseMobile.jpeg"
				project_url="https://github.com/AlejandroMtz07/InteligentHouse"
			/>
			<ProjectCard
				project_title="PeriodicTable (Backend)"
				project_duration={3}
				project_tools={"Java, POO, SpringBoot, Hibernate, MySQL"}
				project_description="REST API básica creada para consultas de elementos basados en mútiples parámetros: numero atómico, peso atómico, símbolo, grupo, creada para emplear conocimientos de curso de SpringBoot."
				project_image="PeriodicTableIDE.png"
				project_url="https://github.com/AlejandroMtz07/periodic-table"
			/>
			<ProjectCard
				project_title="Sherlock Solitaire (Consola)"
				project_duration={4}
				project_tools={"Java, POO"}
				project_description="Proyecto escolar creado en base al juego de mesa del mismo nombre, haciendo uso de la Programación Orientada a Objetos y lógica de programación."
				project_image="SherlockSolitaire.jpg"
				project_url="https://github.com/AlejandroMtz07/SherlockSolitaire"
			/>
			<ProjectCard
				project_title="MichiCan"
				project_duration={5}
				project_tools={"Java, JSP, SQLite"}
				project_description="Proyecto escolar pensado para la administración de una veterinaria, equipada con herramientas de seguimiento así como de creación e citas por parte del cliente y descarga de historial médico completo."
				project_image="none"
				project_url="https://github.com/AlejandroMtz07/MichiCan"
			/>
		</div>
	)
}
