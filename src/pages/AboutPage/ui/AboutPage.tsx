import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { memo } from 'react'
import { IAboutleng, ua, en, fr } from '../../../shared/leng-lib/aboutleng'
import { useChangeLeng } from '../../../shared/leng-lib/useChangeLeng'
import { className } from '../../../shared/lib/helpers/classNames/classNames'

export const AboutPage = memo(() => {
	const { leng } = useLeng()
	const data = useChangeLeng<IAboutleng>(leng, ua, en, fr)

	return (
		<article className={className('about', {}, [])}>
			<div className="about__photo">
				<img className="about__photo__img" src="/pictures/photo_about.jpg" alt="foto" />
			</div>
			<div className="about__text">
				<h1 className="roboto-bold marginbottom3">{data[0].about_name}</h1>
				<p className="roboto-light fontsize1-5rem tajustify marginbottom2">{data[0].about_art}</p>
				<p>
					<a href="https://www.facebook.com/subhubgalleryukraine/">
						Switzerland Lausanne / Ukraine Jitomir
						<br />
						WhatsApp Viber
						<br />
						+41 79 341 24 74 (Switzerland)
						<br />
						+38 063 53 79 227 (Ukraine )
						<br />
						Google: #SubHubGallery
						<br />
						Facebook: Svitlana Novikova
						<br />
						Instagram: svitlana_novikova_clarity
						<br />
						E-mail: happy73stars@gmail.com
					</a>
				</p>
			</div>
		</article>
	)
})

export default AboutPage
