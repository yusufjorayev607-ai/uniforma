import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/usefetch'
import './portfoliopage.css'
import { useState } from 'react'
import PortfolioModal from './PortfolioModal'
function PortfolioPage() {
	const { data, isPending, error } = useFetch('public/data/portfolio.json')
	const [selectedItem, setSelectedItem] = useState(null)
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
			<h2 className='title'>PORTFOLIO</h2>

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

			<Link to='/' className='portfolio__page-btn'>
				ORTGA
			</Link>
		</div>
	)
}

export default PortfolioPage
