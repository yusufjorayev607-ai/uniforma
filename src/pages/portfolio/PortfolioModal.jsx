import { useTranslation } from 'react-i18next'
import { GiRolledCloth } from 'react-icons/gi'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { WiDaySunny } from 'react-icons/wi'
import './portfolioModal.css'
function PortfolioModal({ item, onClose }) {
	const { t } = useTranslation()
	return (
		<div className='modal container'>
			<div className='modal__image'>
				<img src={item.image} alt={item.title} className='modal-image' />
			</div>
			<div className='modal__info'>
				<h2 className='modal__info-title'>
					{t(`portfolio.${item.slug}.title`)}
				</h2>
				<p className='modal__info-description'>
					{t(`portfolio.${item.slug}.description`)}
				</p>
				<div className='ramka'>
					<GiRolledCloth className='icon' />
					<h3 className='modal__info-material'>
						Matosi <small>{t(`portfolio.${item.slug}.material`)}</small>
					</h3>
				</div>
				<div className='ramka'>
					<WiDaySunny className='icon' />
					<h3 className='modal__info-mavsum'>
						Mavsum <small>{t(`portfolio.${item.slug}.color`)}</small>
					</h3>
				</div>
				<div className='ramka'>
					<IoColorPaletteOutline className='icon' />
					<h3 className='modal__info-color'>
						Rangi <small>{t(`portfolio.${item.slug}.season`)}</small>
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
