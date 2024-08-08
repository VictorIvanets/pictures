import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { useChangeLeng } from '../../../shared/leng-lib/useChangeLeng'
import { en, fr, IPicleng, ua } from '../../../shared/leng-lib/picleng'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const SwiperPage = () => {
	const { leng } = useLeng()
	const data = useChangeLeng<IPicleng>(leng, ua, en, fr)

	// const {actualPage} = props
	const [actualPage, setActualPage] = useState(0)
	const { section } = useParams()

	return (
		<div className="swiperpage">
			<div className="swiperpage__content">
				<Swiper
					className="swiperpage__swiperbox"
					spaceBetween={50}
					slidesPerView={1}
					onSlideChange={() => console.log('slide change')}
					// onSwiper={(swiper) => console.log(swiper)}
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
