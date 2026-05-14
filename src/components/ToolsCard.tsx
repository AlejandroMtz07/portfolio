type ToolsCardProps = {
    tools: string[]
}

export default function ToolsCard({tools}:ToolsCardProps) {
  return (
    <div className="grid grid-cols-2 grid-rows-3 lg:m-5 m-2 gap-4 lg:mt-10">
        {tools.map((tool,index) => (
            <div key={index} className="bg-gray-700 p-4 flex flex-row items-center justify-center gap-3 pixel_corners">
                <img src={`../assets/tools_icons/${tool.toLowerCase()}_icon.png`} alt="Tool image" className="h-10"/>
                {tool}
            </div>
        ))}
    </div>
  )
}
