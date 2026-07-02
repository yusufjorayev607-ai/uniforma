import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './portfolio.css'
function Portfolio() {
	const { data, isPending, error } = useFetch('/data/portfolio.json')
	const { t } = useTranslation()
	{
		isPending && <div>Loader ...</div>
	}
	{
		error && <div>{error}</div>
	}

	return (
		<div className='portfolio container' id='portfolio'>
			<h2 className='title'>{t('portfolio.title')}</h2>
			<div className='portfolio__image'>
				{data &&
					data.portfolio.slice(0, 5).map(item => {
						return (
							<div className='portfolio__image-item' key={item.id}>
								<img
									src={item.image}
									alt={item.image}
									className='portfolio__image-img'
								/>
							</div>
						)
					})}
			</div>
			<Link to='portfoliopage' className='portfolio__btn'>
				{t('portfolio.viewAllBtn')}
			</Link>
		</div>
	)
}

export default Portfolio
