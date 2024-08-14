import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { useChangeLeng } from '../../../shared/leng-lib/useChangeLeng'
import { en, fr, IPicleng, ua } from '../../../shared/leng-lib/picleng'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { IRating, useRatingStore } from '../../../store/zustand.store'
import { setRatingApi } from './rating'

const SwiperPage = () => {
	const { leng } = useLeng()
	const data = useChangeLeng<IPicleng>(leng, ua, en, fr)

	const [actualPage, setActualPage] = useState(0)
	const { section } = useParams()
	const { setRating, getRating, countRating, rating, id, clearRating } = useRatingStore(
		(state) => state,
	)
	const [dataL, setDataL] = useState<IRating[]>()

	useEffect(() => {
		const dataLocal: string | null = localStorage.getItem('rating')
		if (dataLocal) {
			const dataLoc: IRating[] = JSON.parse(dataLocal)
			setDataL(dataLoc)
		}
	}, [countRating])

	useEffect(() => {
		if (section === 'micro') {
			setActualPage(0)
		}
		if (section === 'macro') {
			setActualPage(1)
		}
	}, [section])

	useEffect(() => {
		getRating()
		if (countRating && id) {
			setRatingApi(countRating, id, rating)
		}
	}, [countRating, id, rating, setRating, getRating])

	useEffect(() => {
		clearRating()
	}, [clearRating, dataL?.length])

	function acc(array: number[]): string {
		const sum = array.reduce((acc, val) => acc + val, 0)
		return (sum / array.length).toFixed(2)
	}
	function accStar(array: number[]): number {
		const sum = array.reduce((acc, val) => acc + val, 0)
		const n = +(sum / array.length).toFixed(1)
		return +n
	}

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
					// onSlideChange={() => clearRating()}
				>
					{data[actualPage].img.map((i) => (
						<SwiperSlide key={i.id} className="swiperpage__item">
							<div className="swiperpage__picbox">
								{<img className="swiperpage__pic" src={`/pictures/bigl_${i.id}.jpg`} alt="" />}
								<div className="swiperpage__rating">
									<div className="flex">
										<h3 className="white marginright1">
											{dataL &&
												dataL.map((a) =>
													a.id === i.id && a.rating.length ? `rating: ${acc(a.rating)}` : null,
												)}
										</h3>
										<h3 className="white">
											{dataL &&
												dataL.map((a) =>
													a.id === i.id && a.rating.length ? `liks: ${a.rating.length}` : null,
												)}
										</h3>
									</div>
									<div className="swiperpage__rating__boxstar">
										<h3
											onClick={() => setRating(1, i.id)}
											className={`swiperpage__rating__star ${
												dataL &&
												dataL.map((a) =>
													a.id === i.id && a.rating.length
														? `${+accStar(a.rating) >= 1 ? ' yellow ' : null}`
														: null,
												)
											}`}
										></h3>
										<h3
											onClick={() => setRating(2, i.id)}
											className={`swiperpage__rating__star ${
												dataL &&
												dataL.map((a) =>
													a.id === i.id && a.rating.length
														? `${+accStar(a.rating) >= 2 ? ' yellow ' : null}`
														: null,
												)
											}`}
										></h3>
										<h3
											onClick={() => setRating(3, i.id)}
											className={`swiperpage__rating__star ${
												dataL &&
												dataL.map((a) =>
													a.id === i.id && a.rating.length
														? `${+accStar(a.rating) >= 3 ? ' yellow ' : null}`
														: null,
												)
											}`}
										></h3>
										<h3
											onClick={() => setRating(4, i.id)}
											className={`swiperpage__rating__star ${
												dataL &&
												dataL.map((a) =>
													a.id === i.id && a.rating.length
														? `${+accStar(a.rating) >= 4 ? ' yellow ' : null}`
														: null,
												)
											}`}
										></h3>
										<h3
											onClick={() => setRating(5, i.id)}
											className={`swiperpage__rating__star ${
												dataL &&
												dataL.map((a) =>
													a.id === i.id && a.rating.length
														? `${+accStar(a.rating) >= 4.6 ? ' yellow ' : null}`
														: null,
												)
											}`}
										></h3>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default SwiperPage
