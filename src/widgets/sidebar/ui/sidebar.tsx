import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng' //'../../app/Providers/ChangeLeng/useLeng'
import { NavLink } from 'react-router-dom'
import { ImainLeng, ua as ua1, en as en1, fr as fr1 } from '../../../shared/leng-lib/mailleng' ///'shared/leng-lib/mailleng'
import { en, fr, IPicleng, ua } from '../../../shared/leng-lib/picleng'
import { useChangeLeng } from '../../../shared/leng-lib/useChangeLeng' /// 'shared/leng-lib/useChangeLeng'
import { className } from '../../../shared/lib/helpers/classNames/classNames' ///'shared/lib/helpers/classNames/classNames'

export const Sidebar = (props: { hidden: boolean; setHidden: any }) => {
	const { hidden, setHidden } = props
	// const [hidden, setHidden] = useState(true)
	const { leng } = useLeng()
	const data1 = useChangeLeng<ImainLeng>(leng, ua1, en1, fr1)
	const data = useChangeLeng<IPicleng>(leng, ua, en, fr)

	return (
		<>
			<aside
				onClick={() => setHidden(!hidden)}
				className={className('sidebar', { sidebarhidden: hidden === true ? true : false }, [])}
			>
				<div
					onClick={(e) => {
						e.stopPropagation()
					}}
					className="sidebar__linkbox"
				>
					<NavLink className="sidebar__linkbox__link" to={'/'}>
						{data1[0].main}
					</NavLink>
					<NavLink className="sidebar__linkbox__link" to={`/art/${'micro'}`}>
						{data[0].title.toUpperCase()}
					</NavLink>
					<NavLink className="sidebar__linkbox__link" to={`/art/${'macro'}`}>
						{data[1].title.toUpperCase()}
					</NavLink>
					<NavLink className="sidebar__linkbox__link" to={'/about'}>
						{data1[0].about}
					</NavLink>
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
		</>
	)
}
