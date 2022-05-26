import "./style.css";
import imga from "./img/slider-2.jpg";
import imgb from "./img/computer.jpg";
import imgc from "./img/phone.jpg";
import imgd from "./img/lamp.jpg";
import imge from "./img/desk.jpg";
import imgf from "./img/logo-white.png";
import imgg from "./img/art.jpg";
const services=()=>{
    return(
    <div>
            
            <div id="banner">
            <img src={imga} alt=""/>
            </div>
        <div class="wrapper">
	    	<div class="intro">
	    		<h1>Techihelper Services</h1>
	    		<div class="border-container">
	    			<div class="border"></div>
	    		</div>
	    		<p> what your business needs and how to execute it!  Reach out to us today to start the conversation about your marketing needs as we'd be happy to hear from you.</p>
	    	</div>

	    	<section class="three-col">
	    		<img src={imgb} alt=""/>
	    		<h2>Website Design</h2>
	    		<p>We're a local design company that specializes in providing people and companies with high-value websites, minus the crazy prices. We achieve this by keeping our team manageable in size, but the top of the line.</p>
	    		<div class="btn-container">
	    			<a href="#" class="btn btn-dark">Our Portfolio</a>
	    		</div>
	    	</section>

	    	<section>
	    		<img src={imgc} alt=""/>
	    		<h2>App Development</h2>
	    		<p>The bottom line is we work tirelessly to find the right solutions for your budget and time frame. As a team, we believe in pushing ourselves every day to be the best that we possibly can.</p>
	    		<div class="btn-container">
	    			<a href="#" class="btn btn-light">See the Apps</a>
	    		</div>
	    	</section>

	    	<section>
            <img src={imgd} alt=""/>
	    		<h2>Company Branding</h2>
	    		<p>At our Company, we pride ourselves on our ability to fit the needs of every client. No matter how large or small your company and online goals may be. Our SEO team works on a daily basis with industry leaders to ensure we stay cutting-edge.</p>
	    		<div class="btn-container">
	    			<a href="#" class="btn btn-dark">Our Clientele</a>
	    		</div>
	    	</section>
        

	    	<article>
	    		<img src={imge} alt=""/>
	    	</article>
	    	<aside>
	    		<h2>Techihelper Services</h2>
	    		<p>Our internet solutions and marketing strategies create new revenue opportunities for our clients who keep referring their own business associates and clients to us which we are so grateful for!</p>
	    		<p> Social Media and blogging staff we can take any site from zero to hero in a hurry.</p>
	    			<div class="btn-container">
	    				<a href="#" class="btn btn-dark">Learn More</a>
	    			</div>
	    	</aside>

	    </div>
	
	    <footer>

	    	<div class="wrapper">

	    		<section>
	    			<h3><b>Techihelper</b></h3>
	    			<p><b><a href="tel:+918960931439">8960931439</a></b><br></br>
	    			<b><a href="tel:+918948658885">8948658885</a></b><br></br>
	    			Grain market<br></br>
	    			Malout ,Punjab-152107<br></br>
	    			<a href="mailto:+me@ouragency.com">me@TechiHelper.com</a></p>
	    		</section>

	    		<section>
	    			<img class="footer-img" src={imgf} alt=""/>
                    <div class="social-center">
                        <ul class="social">
                            <li><a href="https://www.facebook.com/GTechDoctor/" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://twitter.com/GTechDoctor" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
                            <li><a href="https://www.instagram.com/beingsaurabhkatiyar/" target="_blank"><i class="fab fa-instagram-square"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-youtube-square"></i></a></li>
                            <li><a href="#" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
	    		</section>

	    		<section>
                <img class="last-img" src={imgg} alt=""/>
	    		</section>

	    	</div> 

	    </footer>
		
	    <footer class="socket">
	    	<p>©Copyright -Techihelper.</p>
	    </footer>
  


    </div>
    )
}
export default services;