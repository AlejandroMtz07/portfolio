type CertificationCardProps = {
	file_name: string,
	badge_name: string
	certification_name: string
}

export default function CertificationCard({file_name,badge_name,certification_name}:CertificationCardProps) {
	return (
		<div className="flex align-middle items-center m-4 mt-4">
			<a href={`../files/${file_name}.pdf`} download={`${file_name}.pdf`} className="flex flex-col items-center">
				<img 
					src={`../files/${badge_name}.png`} 
					alt="Cisco badge" 
					className="lg:h-24 lg:w-24 h-14 hover:shadow-2xl shadow-white"
				/>
				{certification_name}
			</a>
		</div>
	)
}
