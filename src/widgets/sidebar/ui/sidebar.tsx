import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { NavLink } from 'react-router-dom'
import { ImainLeng, ua as ua1, en as en1, fr as fr1 } from '../../../shared/leng-lib/mailleng'
import { en, fr, IPicleng, ua } from '../../../shared/leng-lib/picleng'
import { useChangeLeng } from '../../../shared/leng-lib/useChangeLeng'
import { className } from '../../../shared/lib/helpers/classNames/classNames'
import 'swiper/css'

export const Sidebar = (props: { hidden: boolean; setHidden: any }) => {
	const { hidden, setHidden } = props
	const { leng } = useLeng()
	const data1 = useChangeLeng<ImainLeng>(leng, ua1, en1, fr1)
	const data = useChangeLeng<IPicleng>(leng, ua, en, fr)

	return (
		<aside
			onTouchMove={() => setHidden(!hidden)}
			onClick={() => setHidden(!hidden)}
			className={className('sidebar', { sidebarhidden: hidden === true ? true : false }, [])}
		>
			<div
				onClick={(e) => {
					e.stopPropagation()
				}}
				className="sidebar__linkbox"
			>
				<NavLink className="sidebar__linkbox__link cyrillicbold colorGreen marginbottom2" to={'/'}>
					{data1[0].main}
				</NavLink>
				<h4 className="colorGreen cyrillicbold">INFO: {data1[0].pictures.toUpperCase()}</h4>
				<NavLink
					className="sidebar__linkbox__link margin2left cyrillicsamibold"
					to={`/art/${'micro'}`}
				>
					{data[0].title.toLowerCase()}
				</NavLink>
				<NavLink
					className="sidebar__linkbox__link margin2left marginbottom2 cyrillicsamibold"
					to={`/art/${'macro'}`}
				>
					{data[1].title.toLowerCase()}
				</NavLink>
				<h4 className="colorGreen cyrillicbold">SLIDE: {data1[0].pictures.toUpperCase()}</h4>
				<NavLink
					className="sidebar__linkbox__link margin2left cyrillicsamibold"
					to={`/swiper/${'micro'}`}
				>
					{data[0].title.toLowerCase()}
				</NavLink>
				<NavLink
					className="sidebar__linkbox__link margin2left marginbottom2 cyrillicsamibold"
					to={`/swiper/${'macro'}`}
				>
					{data[1].title.toLowerCase()}
				</NavLink>

				<NavLink className="sidebar__linkbox__link cyrillicbold colorGreen" to={'/about'}>
					{data1[0].about}
				</NavLink>
			</div>
			<div>
				<a className="cyrillicbold colorGreen margin2left" href="https://www.ivanetsvictor.site/">
					developer
				</a>
			</div>
			<button
				onClick={() => setHidden(!hidden)}
				className={className(
					'sidebar__hiddenbtn',
					{ hiddenbtnhid: !hidden === true ? true : false },
					[],
				)}
			>
				MENU
			</button>
		</aside>
	)
}
