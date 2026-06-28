import { FaTelegramPlane } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import './contact.css'
function Contact() {
	return (
		<section className='contact container'>
			<h2 className='contact__title title'>ALOQA</h2>
			<div className='contact__cards'>
				<a href='tel: +998938212137' className='contact__card-link'>
					<div className='contact__icons'>
						<FiPhone />
					</div>
					<h3 className='contact__card-title'>Telifon</h3>
					<p className='contact__card-value'>+99893 821 21 37</p>
					<p className='contact__card-info'>
						Dushanba-Shanba <br /> 09:00-19:00
					</p>
				</a>
				<a
					href='https://t.me/classic_321'
					target='_blank'
					rel='noopener noreferrer'
					className='contact__card-link'
				>
					<div className='contact__icons'>
						<FaTelegramPlane />
					</div>
					<h3 className='contact__card-title'>Telegram</h3>
					<p className='contact__card-value'>classic_321</p>
					<p className='contact__card-info'>Tezkor javob</p>
				</a>
				<a
					href='mailto:info@elegand.uz'
					target='_blank'
					className='contact__card-link'
				>
					<div className='contact__icons'>
						<FiMail />
					</div>
					<h3 className='contact__card-title'>Gmail</h3>
					<p className='contact__card-value'>yusufjorayev607@gmail.com</p>
					<p className='contact__card-info'>24 soat ichida javob</p>
				</a>
				<a
					href='https://maps.google.com/?q=Shayxontohur,Toshkent'
					target='_blank'
					rel='noopener noreferrer'
					className='contact__card-link'
				>
					<div className='contact__icons'>
						<HiOutlineLocationMarker />
					</div>
					<h3 className='contact__card-title'>Manzil</h3>
					<p className='contact__card-value'>Toshken sh.</p>
					<p className='contact__card-info'>Shayxontohur tumani</p>
				</a>
			</div>
		</section>
	)
}

export default Contact
