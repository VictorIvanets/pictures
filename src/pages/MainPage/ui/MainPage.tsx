import { useLeng } from '../../../app/Providers/ChangeLeng/useLeng'
import { memo, useEffect, useState } from 'react'
import { className } from '../../../shared/lib/helpers/classNames/classNames'

import { IPicleng, ua, en, fr } from '../../../shared/leng-lib/picleng'
import { IAboutleng, ua as ua1, en as en1, fr as fr1 } from '../../../shared/leng-lib/aboutleng'

import { useChangeLeng } from '../../../shared/leng-lib/useChangeLeng'
import { NavLink } from 'react-router-dom'

export const MainPage = memo(() => {
	const { leng } = useLeng()
	const data1 = useChangeLeng<IAboutleng>(leng, ua1, en1, fr1)
	const data = useChangeLeng<IPicleng>(leng, ua, en, fr)
	console.log(leng)
	const [uatext, setUatext] = useState('')

	useEffect(() => {
		if (leng === 'ua') {
			setUatext('cyrillicextrabold')
		} else {
			setUatext('')
		}
	}, [leng])

	return (
		<article className={className('mainpage', {}, [])}>
			<div className="mainpage__boxcontent">
				<h1 className={`mainpage__header ${uatext}`}>{data1[0].main_head}</h1>
				<h1 className="mainpage__title cyrillicbold">{data1[0].main_title}</h1>
			</div>
			<div className="mainpage__links">
				<NavLink className="sidebar__linkbox__link cyrillicbold" to={`/art/${'micro'}`}>
					{data[0].title}
				</NavLink>{' '}
				<br />
				<NavLink className="sidebar__linkbox__link cyrillicbold" to={`/art/${'macro'}`}>
					{data[1].title}
				</NavLink>
			</div>
		</article>
	)
})

export default MainPage
