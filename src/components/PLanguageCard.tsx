type PLanguageCardProps = {
	programming_language: string
	level: number
	master: string
}

export default function PLanguageCard({ programming_language, level, master }: PLanguageCardProps) {

	const spanClasses : Record<number,string> = {
		1: "col-span-1 bg-red-500",
		2: "col-span-2 bg-red-500",
		3: "col-span-3 bg-red-500",
		4: "col-span-4 bg-yellow-500",
		5: "col-span-5 bg-yellow-500",
		6: "col-span-6 bg-yellow-500",
		7: "col-span-7 bg-green-500",
		8: "col-span-8 bg-green-500",
		9: "col-span-9 bg-green-500",
		10: "col-span-10 bg-green-500",
	}
	return (
		<div className="bg-gray-700 m-4 p-3 rounded flex lg:flex-row flex-col justify-evenly items-center pixel_corners">
			<div>	
				<img src={`../assets/programming_icons/${programming_language.toLowerCase()}_icon.png`} alt="" /><p>{programming_language}</p>
			</div>
			<div className="grid grid-cols-10 bg-gray-500 h-3 ml-10 mr-10 border border-black w-40">
				<div className={`${spanClasses[level]} bg-green-500`}>
				</div>
			</div>
			<p>{master}</p>
		</div>
	)
}
