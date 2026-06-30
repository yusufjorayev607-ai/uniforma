import About from './about/About'
import Contact from './contact/Contact'
import Form from './form/Form'
import Home from './home/Home'
import Partners from './partners/Partners'
import Portfolio from './portfolio/Portfolio'
import Process from './process/Process'
import Services from './services/Services'
import Stats from './stats/Stats'

function Pages() {
	return (
		<>
			<Home />
			<hr className='hr container' />
			<Partners />
			<hr className='hr container' />
			<Services />
			<hr className='hr container' />
			<Portfolio />
			<hr className='hr container' />
			<About />
			<hr className='hr container' />
			<Process />
			<hr className='hr container' />
			<Stats />
			<hr className='hr container' />
			<Contact />
			<hr className='hr container' />
			<Form />
		</>
	)
}

export default Pages
