import './about.css'
import { FaCheck } from 'react-icons/fa'
function About() {
	return (
		<div className='about container'>
			<div className='about__info'>
				<span className='about__label'>Biz haqimizda</span>
				<h2 className='about__info-title'>
					Tajriba va sifatga asoslangan ishlab chiqarish
				</h2>
				<p className='about__info-description'>
					Kompaniyamiz korporativ ishchi formalar, maxsus kiyimlar va individual
					buyurtmalarni ishlab chiqarishka ixtisoslashgan
				</p>
				<ul className='about__info-features'>
					<li className='about__info-item'>
						<FaCheck className='about__info-icon' />
						Sifatli matolar
					</li>
					<li className='about__info-item'>
						<FaCheck className='about__info-icon' />
						Tajribali mutaxassislar
					</li>
					<li className='about__info-item'>
						<FaCheck className='about__info-icon' />
						O'z vaqtida yetkazib berish
					</li>
					<li className='about__info-item'>
						<FaCheck className='about__info-icon' />
						Individual yondashuv
					</li>
				</ul>
				<button className='about__info-btn'>KO'PROQ MALUMOT</button>
			</div>
			<div className='about__image'>
				<img src='/image/partfolio.png' alt='' className='about__image-img' />
			</div>
		</div>
	)
}

export default About
