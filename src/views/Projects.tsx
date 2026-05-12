import ProjectCard from "../components/ProjectCard"

export default function Projects() {
	return (
		<div className="text-center lg:mt-20 
		font-mc text-2xl justify-items-center">
			<div className="col-span-2 mb-10">
				<h2 className="text-6xl font-bold">
					Projects
				</h2>
				<h4>
					Projects that i've created
				</h4>
			</div>
			<ProjectCard
				project_title="Kitchen App"
				project_tools={"TypeScript, React, Formidable"}
				project_duration={3}
				project_description="A system designed for viewing, adding, and uploading recipes to a private or public recipe book. It allows for user profile customization and viewing of users and their public recipes."
				project_image="KitchenApp.mp4"
			/>
			<ProjectCard
				project_title="Kitchen API (Backend)"
				project_duration={3}
				project_tools="TypeScript, ExpressJS, MySQL, JWT, Nodemailer, Cloudinary"
				project_description="Backend designed for the Task Manager APP"
				project_image="KitchenBackend.png"
			/>
			<ProjectCard
				project_title="Sherlock Solitaire"
				project_duration={4}
				project_tools={"Java, POO"}
				project_description="Game created in Java based on the game Sherlock Solitaire"
				project_image="SherlockSolitaire.jpg"
			/>
		</div>
	)
}
