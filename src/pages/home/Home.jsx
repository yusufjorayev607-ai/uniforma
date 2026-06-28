import { Link } from 'react-router-dom'
import './home.css'

function Home() {
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
					<button className='hero__info-btn'>BUYURTMA BERISH</button>
					<Link to='portfolio' className='hero__info-btn'>
						PORTFOLIO KO'RISH
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
