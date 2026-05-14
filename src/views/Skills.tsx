import CertificationCard from '../components/CertificationCard'
import PLanguageCard from '../components/PLanguageCard'
import ToolsCard from '../components/ToolsCard'
import '../index.css'

export default function Skills() {
	const borderStyles = "border-t-[#AAA] border-l-[#AAA] border-b-[#565656] border-r-[#565656] border-4 bg-[url('../assets/button_bg_image.png')] pixel_corners text-white"
	return (
		<div className="flex flex-col lg:mt-20 justify-center items-center text-center">
			<h2 className="font-mc lg:text-5xl text-3xl">
				Mis habilidades y certificaciones.
			</h2>
			<p className='font-mc text-2xl'>Habilidades que he adquirido.</p>
			<div className="lg:grid flex flex-col grid-cols-2 grid-rows-3 w-3/4 h-full lg:mt-20 mt-10 gap-10 font-mc">
				<div className={`col-span-1 row-span-3 ${borderStyles}`}>
					<h3 className='text-2xl'>
						Lenguajes de programación.
					</h3>
					<PLanguageCard programming_language='HTML' level={9} master='Avanzado'/>
					<PLanguageCard programming_language='Java' level={8} master='Medio-Avanzado'/>
					<PLanguageCard programming_language='JavaScript' level={8} master='Medio-Avanzado'/>
					<PLanguageCard programming_language='SQL' level={8} master='Medio-Avanzado'/>
					<PLanguageCard programming_language='TypeScript' level={7} master='Medio-Avanzado'/>
					<PLanguageCard programming_language='Python' level={4} master='Inicial-Intermedio'/>
					<PLanguageCard programming_language='Dart' level={5} master='Inicial-Intermedio'/>
					<PLanguageCard programming_language='CSharp' level={3} master='Inicial'/>
				</div>
				<div className={`row-span-2 ${borderStyles}`}>
					<h2 className='text-2xl mt-10'>Herramientas y Frameworks.</h2>
					<ToolsCard tools={['Git','Github','ExpressJS','SpringBoot','Flask','MySQL','SQLite','PostgreSQL','Arduino','Tailwind']}/>
				</div>
				<div className={`${borderStyles}`}>
					<h2 className='text-2xl lg:mt-10'>Certificaciones (Click para descargar)</h2>
					<div className='flex flex-row align-middle justify-center'>
						<CertificationCard certification_name='Network Defense' badge_name='NetworkDefenseBadge' file_name='NetworkDefense'/>
						<CertificationCard certification_name='CyberSecurity' badge_name='CiberSecurityBadge' file_name='CyberSecurity'/>
						<CertificationCard certification_name='SpringBoot' badge_name='UdemyBadge' file_name='Spring Boot'/>
					</div>
				</div>
			</div>
		</div>
	)
}

