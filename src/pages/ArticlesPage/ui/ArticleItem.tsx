import { IImg } from '../../../shared/leng-lib/picleng'
import { PreLoader } from '../../../widgets/PreLoader/index'

const ArticleItem = (props: IImg) => {
	const { id, name, size, year } = props
	return (
		<div className="articles-item">
			<div className="articles-item__picbox">
				{<img className="articles-item__picbox__pic" src={`/bigl_${id}.jpg`} alt="" /> || (
					<PreLoader />
				)}
			</div>
			<div>
				<h3 className="colorLight">{name}</h3>
				<h4 className="colorLight">{year}</h4>
				<h4 className="colorLight">{size}</h4>
			</div>
		</div>
	)
}

export default ArticleItem
