import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import PortfolioModal from './PortfolioModal'
import './portfoliopage.css'

function PortfolioPage() {
	const { data, isPending, error } = useFetch('/data/portfolio.json')
	const [selectedItem, setSelectedItem] = useState(null)
	const { t } = useTranslation()
	{
		isPending && <div>Loader ...</div>
	}
	{
		error && <div>{error}</div>
	}

	if (selectedItem) {
		return (
			<PortfolioModal
				item={selectedItem}
				onClose={() => setSelectedItem(null)}
			/>
		)
	}

	return (
		<div className='portfolio__page-test container'>
			<div className='portfolio__test'>
				<h2 className='title'>{t('portfolioPage.title')}</h2>
				<Link to='/#portfolio' className='portfolio__page-headr-btn'>
					{t('portfolioPage.backBtn')}
				</Link>
			</div>

			<div className='portfolio__page'>
				{data &&
					data.portfolio.map(item => (
						<button
							key={item.id}
							onClick={() => setSelectedItem(item)}
							className='portfolio__page-img-btn'
						>
							<img src={item.image} alt={item.title} width={300} />
						</button>
					))}
			</div>

			<Link to='/#portfolio' className='portfolio__page-btn'>
				{t('portfolioPage.backBtn')}
			</Link>
		</div>
	)
}

export default PortfolioPage
