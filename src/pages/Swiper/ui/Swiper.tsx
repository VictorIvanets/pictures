import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { useChangeLeng } from '../../../shared/leng-lib/useChangeLeng'
import { en, fr, IPicleng, ua } from '../../../shared/leng-lib/picleng'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const SwiperPage = () => {
	const { leng } = useLeng()
	const data = useChangeLeng<IPicleng>(leng, ua, en, fr)

	const [actualPage, setActualPage] = useState(0)
	const { section } = useParams()
	console.log(section)

	useEffect(() => {
		if (section === 'micro') {
			setActualPage(0)
		}
		if (section === 'macro') {
			setActualPage(1)
		}
	}, [section])

	return (
		<div className="swiperpage">
			<div className="articles__text">
				<NavLink className="sidebar__linkbox__link" to={`/swiper/${'micro'}`}>
					{data[0].title}
				</NavLink>
				<NavLink className="sidebar__linkbox__link" to={`/swiper/${'macro'}`}>
					{data[1].title}
				</NavLink>
			</div>

			<div className="swiperpage__content">
				<Swiper
					className="swiperpage__swiperbox"
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
				>
					{data[actualPage].img.map((i) => (
						<SwiperSlide className="swiperpage__item">
							<div className="swiperpage__picbox">
								{<img className="swiperpage__pic" src={`/pictures/bigl_${i.id}.jpg`} alt="" />}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default SwiperPage
