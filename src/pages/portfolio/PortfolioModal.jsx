import './portfolioModal.css'
import { GiRolledCloth } from 'react-icons/gi'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { WiDaySunny } from 'react-icons/wi'
function PortfolioModal({ item, onClose }) {
	return (
		<div className='modal container'>
			<div className='modal__image'>
				<img src={item.image} alt={item.title} className='modal-image' />
			</div>
			<div className='modal__info'>
				<h2 className='modal__info-title'>{item.title}</h2>
				<p className='modal__info-description'>{item.description}</p>
				<div className='ramka'>
					<GiRolledCloth className='icon' />
					<h3 className='modal__info-material'>
						Matosi <small>{item.material}</small>
					</h3>
				</div>
				<div className='ramka'>
					<WiDaySunny className='icon' />
					<h3 className='modal__info-mavsum'>
						Mavsum <small>{item.color}</small>
					</h3>
				</div>
				<div className='ramka'>
					<IoColorPaletteOutline className='icon' />
					<h3 className='modal__info-color'>
						Rangi <small>{item.color}</small>
					</h3>
				</div>
			</div>
			<button className='modal__btn' onClick={onClose}>
				x
			</button>
		</div>
	)
}

export default PortfolioModal
