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
				project_title="MichiCan"
				project_tools={"Java, JSP, SQLite"}
				project_duration={6}
				project_description="System designed for the vet business management and home page"
			/>
			<ProjectCard 
				project_title="Sherlock Solitaire"
				project_duration={4}
				project_tools={"Java, POO"}
				project_description="Game created in Java based on the game Sherlock Solitaire"
			/>
			<ProjectCard
				project_title="Task Manager (Backend)"
				project_duration={3}
				project_tools="JavaScript, ExpressJS, MySQL, JWT"
				project_description="Backend designed for the Task Manager APP"
			/>
		</div>
	)
}
