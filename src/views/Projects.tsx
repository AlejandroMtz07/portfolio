import ProjectCard from "../components/ProjectCard"

export default function Projects() {
	return (
		<div className="lg:grid grid-cols-2 text-center mt-32 font-mc text-2xl">
			<ProjectCard
				project_title="MichiCan"
				project_tools={["Java, JSP, SQLite"]}
				project_duration={6}
				project_description="System designed for the vet business management"
			/>
		</div>
	)
}
