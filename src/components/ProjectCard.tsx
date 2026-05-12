import '../index.css'

type ProjectCardProps = {
    project_title: string,
    project_description: string,
    project_duration: number,
    project_tools: string,
    project_image: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="bg-[url('../assets/button_bg_image.png')] 
          border-t-[#AAA] border-l-[#AAA] border-b-[#565656] border-r-[#565656] border-4
          w-10/12 mb-2 lg:h-80 text-white lg:p-3 lg:grid grid-cols-2 pixel-corners pixel_corners p-4"
        >
            <div className='flex flex-col items-center justify-center'>
                <h3 className="text-3xl mb-7">{props.project_title}</h3>
                <div className="grid grid-cols-2 text-lg">
                    <p>{props.project_tools}</p>
                    <p>Duration: {props.project_duration} months</p>
                </div>
                <h3 className='text-black text-xl'>Description:</h3>
                <p className="text-lg">
                    {props.project_description}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                {
                    props.project_image.split('.')[1] == 'mp4' ?
                    <video
                        src={`../assets/projects_screenshots/${props.project_image}`}
                        className="lg:h-72 h-32 bg-white rounded-lg shadow-md shadow-black hidden sm:block" autoPlay muted loop 
                    /> :
                    <img
                        src={`../assets/projects_screenshots/${props.project_image}`}
                        alt='Project image'
                        className="lg:h-72 h-32 bg-white rounded-lg shadow-md shadow-black hidden sm:block"
                    />
                }
            </div>
        </div>
    )
}
