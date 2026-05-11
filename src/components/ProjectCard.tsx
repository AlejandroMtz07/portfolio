
type ProjectCardProps = {
    project_title: string,
    project_description: string,
    project_duration: number,
    project_tools: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="bg-[url('../assets/button_bg_image.png')] 
          border-t-[#AAA] border-l-[#AAA] border-b-[#565656] border-r-[#565656] border-4
          lg:max-w-xl max-w-72 mb-2 lg:h-80 text-white lg:p-3"
        >
            <h2>{props.project_title}</h2>
            <div className="grid grid-cols-2">
                <h3>Development tools used: <br />{props.project_tools}</h3>
                <h3>Duration: {props.project_duration} months</h3>
            </div>
            <h3 className="mt-5">
                {props.project_description}
            </h3>
        </div>
    )
}
