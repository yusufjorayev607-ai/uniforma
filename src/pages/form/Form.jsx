import { useState } from 'react'
import { BsBriefcase } from 'react-icons/bs'
import { FiArrowRight, FiChevronDown, FiPhone, FiUser } from 'react-icons/fi'
import { GiSewingString, GiTie } from 'react-icons/gi'
import { MdOutlineCheckroom } from 'react-icons/md'
import { TbShirt } from 'react-icons/tb'
import './form.css'

const TG_TOKEN = '8736648245:AAHBXLr4_LnzJof8lMOeTku-RBvqbjKVqqE'
const TG_CHAT_ID = '5425502072'

const PRODUCTS = [
	{ icon: <MdOutlineCheckroom />, label: 'Ishchi forma', emoji: '🦺' },
	{ icon: <GiTie />, label: 'Korporativ forma', emoji: '👔' },
	{ icon: <GiSewingString />, label: 'Maxsus buyurtma', emoji: '🧵' },
	{ icon: <TbShirt />, label: 'Ommaviy kiyimlar', emoji: '👕' },
]

const EMPTY = { name: '', company: '', product: '', phone: '' }

const validPhone = p =>
	/^\+998\d{9}$/.test(p.replace(/\s/g, '')) ||
	/^998\d{9}$/.test(p.replace(/\s/g, '')) ||
	/^\d{9}$/.test(p.replace(/\s/g, ''))

export default function Form() {
	const [d, setD] = useState(EMPTY)
	const [open, setOpen] = useState(false)
	const [errs, setErrs] = useState({})
	const [status, setStatus] = useState('idle')

	const set = (k, v) => {
		setD(p => ({ ...p, [k]: v }))
		setErrs(p => ({ ...p, [k]: null }))
	}

	const validate = () => {
		const e = {}
		if (!d.name.trim()) e.name = 'Ismingizni kiriting'
		if (!d.company.trim()) e.company = 'Kompaniya nomini kiriting'
		if (!d.product) e.product = 'Mahsulot turini tanlang'
		if (!d.phone.trim()) e.phone = 'Telefon raqamini kiriting'
		else if (!validPhone(d.phone))
			e.phone = 'Format: +998 90 123 45 67 yoki 90 123 45 67'
		return e
	}

	const handleSubmit = async () => {
		const e = validate()
		if (Object.keys(e).length) {
			setErrs(e)
			return
		}
		setStatus('loading')
		try {
			const prod = PRODUCTS.find(p => p.label === d.product)
			const text =
				'📋 *Yangi ariza*\n\n' +
				'👤 *Ism:* ' +
				d.name +
				'\n' +
				'🏢 *Kompaniya:* ' +
				d.company +
				'\n' +
				(prod ? prod.emoji + ' *Mahsulot:* ' : '📦 *Mahsulot:* ') +
				d.product +
				'\n' +
				'📞 *Telefon:* ' +
				d.phone

			const res = await fetch(
				'https://api.telegram.org/bot' +
					TG_TOKEN +
					'/sendMessage?' +
					new URLSearchParams({
						chat_id: TG_CHAT_ID,
						text,
						parse_mode: 'Markdown',
					}),
			)
			const json = await res.json()
			if (!json.ok) throw new Error()
			setStatus('ok')
			setD(EMPTY)
		} catch {
			setStatus('fail')
		}
	}

	return (
		<section className='kk'>
			{status === 'ok' ? (
				<div className='kk-ok'>
					<div className='kk-ok-circle'>✓</div>
					<h3>Muvaffaqiyatli yuborildi!</h3>
					<p>Tez orada siz bilan bog'lanamiz.</p>
					<button className='kk-btn' onClick={() => setStatus('idle')}>
						Yangi ariza <FiArrowRight />
					</button>
				</div>
			) : (
				<div className='kk-body'>
					<F icon={<FiUser />} err={errs.name}>
						<input
							className={'kk-inp' + (errs.name ? ' e' : '')}
							placeholder='Ismingiz *'
							value={d.name}
							onChange={ev => set('name', ev.target.value)}
						/>
					</F>

					<F icon={<BsBriefcase />} err={errs.company}>
						<input
							className={'kk-inp' + (errs.company ? ' e' : '')}
							placeholder='Kompaniya nomi *'
							value={d.company}
							onChange={ev => set('company', ev.target.value)}
						/>
					</F>

					<F icon={<MdOutlineCheckroom />} err={errs.product}>
						<div
							className={'kk-drop' + (errs.product ? ' e' : '')}
							onClick={() => setOpen(v => !v)}
						>
							<span className={d.product ? '' : 'ph'}>
								{d.product || 'Qanday mahsulot kerak?'}
							</span>
							<FiChevronDown className={'arr' + (open ? ' up' : '')} />
						</div>
						{open && (
							<ul className='kk-list'>
								{PRODUCTS.map(p => (
									<li
										key={p.label}
										className={d.product === p.label ? 's' : ''}
										onClick={() => {
											set('product', p.label)
											setOpen(false)
										}}
									>
										<span className='li-ic'>{p.icon}</span>
										{p.label}
									</li>
								))}
							</ul>
						)}
					</F>

					<F icon={<FiPhone />} err={errs.phone}>
						<input
							className={'kk-inp' + (errs.phone ? ' e' : '')}
							type='tel'
							placeholder='+998 90 123 45 67'
							value={d.phone}
							onChange={ev => set('phone', ev.target.value)}
						/>
					</F>

					{status === 'fail' && (
						<p className='kk-fail'>Xatolik yuz berdi. Qayta urinib ko'ring.</p>
					)}

					<button
						className='kk-btn'
						onClick={handleSubmit}
						disabled={status === 'loading'}
					>
						{status === 'loading' ? (
							'Yuborilmoqda…'
						) : (
							<>
								<span>YUBORISH</span>
								<FiArrowRight />
							</>
						)}
					</button>
				</div>
			)}
		</section>
	)
}

function F({ icon, err, children }) {
	return (
		<div className='kk-f'>
			<span className='kk-ic'>{icon}</span>
			{children}
			{err && <span className='kk-err'>{err}</span>}
		</div>
	)
}
