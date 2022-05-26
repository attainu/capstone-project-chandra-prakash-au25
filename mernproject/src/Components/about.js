import './style.css';
import imga from "./img/art.jpg";
import imgb from "./img/slider-3.jpg";
import imgc from "./img/desk.jpg";
import imgd from "./img/logo-white.png";
const about=()=>{
    return(
        <div>
                <div id="banner">
            <img     src={imgb} alt="logo"/>
                </div>

	
    <div className="wrapper">

		
		<div className="intro">
			<h1>About Techihelper</h1>
			<div className="border-container">
				<div className="border"></div>
			</div>
			<p> what your business needs and how to execute it!  Reach out to us today to start the conversation about your marketing needs as we'd be happy to hear from you.</p>
		</div>

	
		<article>
			<img src={imgc} alt="lamp"/>
		</article>
		<aside>
			<h2>About Techihelper</h2>
			<p>Our internet solutions and marketing strategies create new revenue opportunities for our clients who keep referring their own business associates and clients to us which we are so grateful for!</p>
			<p> Social Media and blogging staff we can take any site from zero to hero in a hurry.</p>
		</aside>
		

	</div>
	

	
	<footer>

		
		<div className="wrapper">

			<section>
				<h3><b>Techihelper</b></h3>
				<b><a href="tel:+918960931439">8960931439</a></b><br></br>
				<b><a href="tel:+918948658885">8948658885</a></b><br></br>
				<p>Grain market <br></br>
				malout, punjab 152107<br></br>
				<a href="mailto:+me@Techihelper.com">me@Techihelper.com</a></p>
			</section>

			<section>
			<img className="footer-img" src={imgd} alt="flag"/>
                <div className="social-center">
                    <ul className="social">
                        <li><a href="https://www.facebook.com/GTechDoctor/" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a href="https://twitter.com/GTechDoctor" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://www.instagram.com/beingsaurabhkatiyar/" target="_blank"><i className="fab fa-instagram-square"></i></a></li>
                        <li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/feed/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
			</section>

			<section>
				<img className="last-img" src={imga} alt="logo"/>
			</section>

		
		</div>
	</footer>
		
	<footer className="socket">
		<p>©Copyright - Techihelper.</p>
	</footer>


    </div>
    )
}
export default about;