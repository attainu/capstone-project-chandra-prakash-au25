import './style.css';
import slidera from './img/slider-1.jpg';
import sliderb from './img/slider-2.jpg';
import sliderc from './img/slider-3.jpg';
import sliderd from './img/slider-4.jpg';
import computer from './img/computer.jpg';
import phone from './img/phone.jpg';
import lamp from './img/lamp.jpg';
import art from './img/art.jpg';

import {Link} from 'react-router-dom';

const home=()=>{
    return(
        <div>
            
            <div id="slider">
        <figure>
            <img src={slidera} alt="logo"/>
            <img src={sliderb} alt="logo"/>
            <img src={sliderc} alt="logo"/>
            <img src={sliderd} alt="logo"/>
            <img src={slidera} alt="logo"/>

        </figure>
    </div>


    <div className="wrapper">


        <div className="intro">
            <h1>Welcome to Techihelper!</h1>
            <div className="border-container">
                <div className="border"></div>
            </div>
            <p> what your business needs and how to execute it!  Reach out to us today to start the conversation about your marketing needs as we'd be happy to hear from you.</p>
        </div>

		
		<section className="four-col">
			<img src={computer} alt=""/>
			<h2>Website Design</h2>
			<p>We're a local design company that specializes in providing people and companies with high-value websites, minus the crazy prices. We achieve this by keeping our team manageable in size, but the top of the line.</p>
			<div className="btn-container">
				<Link to="userneed" className="btn btn-dark">Fill-Order</Link>
			</div>
		</section>

		<section>
			<img src={phone} />
			<h2>App Development</h2>
			<p>The bottom line is we work tirelessly to find the right solutions for your budget and time frame. As Link team, we believe in pushing ourselves every day to be the best that we possibly can.
				we have direct contact with developer.
			</p>
			<div className="btn-container">
				<Link to="userneed" className="btn btn-light">Fill Order</Link>
			</div>
		</section>

		<section>
			<img src={lamp} alt=""/>
			<h2>Company Branding</h2>
			<p>At our TechiHelper team, we pride ourselves on our ability to fit the needs of every client. No matter how large or small your company and online goals may be.
				if you need anything regarding to improve your bussiness contactUs </p>
			<div className="btn-container">
				<Link to="userneed" className="btn btn-dark">Fill-Order</Link>
			</div>
		</section>
	

	</div>
	

	
	<footer>

		
		<div className="wrapper">

			<section>
				<h3><b>Techihelper</b></h3>
				<p>
				<b><a href="tel:+918960931439">8960931439</a></b><br></br>
				<b><a href="tel:+918960931439">8948658885</a></b><br></br>
				Grain market<br/>
				malout, Punjab 152107<br/>
				<a href="mailto:me@Techihelper.com">me@TechiHelper.com</a><br></br>
				<a href="mailto:me@Techihelper.com">cp150496@gmail.com</a></p>

			</section>
			

			<section>
            <img className="last-img" src={art} alt=""/>
			</section>

		</div> 

	</footer>
		
	<footer className="socket">
		<p>©Copyright - TechiHelper.</p>
	</footer>


        </div>
    )
}
export default home;