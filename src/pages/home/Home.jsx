import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FormModal } from '../form/Form'
import './home.css'

function Home() {
	const [showForm, setShowForm] = useState(false)
	const { t } = useTranslation()
	return (
		<div className='hero container'>
			<div className='hero__info'>
				<h1 className='hero__info-title'>{t('hero.title')}</h1>
				<p className='hero__info-info'>{t('hero.description')}</p>
				<div className='btn__test'>
					<button onClick={() => setShowForm(true)} className='hero__info-btn'>
						{t('hero.orderBtn')}
					</button>
					<Link to='portfoliopage' className='hero__info-btn'>
						{t('hero.portfolioBtn')}
					</Link>
					{showForm && <FormModal onClose={() => setShowForm(false)} />}
				</div>
			</div>
		</div>
	)
}

export default Home
