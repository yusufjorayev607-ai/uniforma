import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormModal } from '../form/Form'
import './home.css'

function Home() {
	const [showForm, setShowForm] = useState(false)
	return (
		<div className='hero container'>
			<div className='hero__info'>
				<h1 className='hero__info-title'>
					Korxonangiz uchun professional maxsus kiyimlar ishlab chiqaramiz
				</h1>
				<p className='hero__info-info'>
					Artel, AKFA, Lukoil, Murad Buildings, Royal va boshqa yirik
					kompaniyalar ishonchli hamkori
				</p>
				<div className='btn__test'>
					<button onClick={() => setShowForm(true)} className='hero__info-btn'>
						BUYURTMA BERISH
					</button>
					<Link to='portfolio' className='hero__info-btn'>
						PORTFOLIO KO'RISH
					</Link>
					{showForm && <FormModal onClose={() => setShowForm(false)} />}
				</div>
			</div>
		</div>
	)
}

export default Home
