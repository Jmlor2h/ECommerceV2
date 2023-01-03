import React from 'react'
import Slideshow from './RAslideshow'
import f1 from '../footerimages/fbook.png'
import f2 from '../footerimages/instagram.png'
import f4 from "../footerimages/twitter.png"
import f5 from '../images/heroimage.png'
import {Link} from 'react-router-dom';


const Home = () => {
    return(
      <div>
        <br></br>
      <main class="homepage">
      <section>
        <div class="description">
          <img src={f5} alt="RAGING APE"/>
        </div>
        <p class="desc"><strong>"RAGING-APE"</strong><br/><strong>by "APES" for "HUMANS" </strong></p>
      </section>
      <div id="slidetitle"><b>What will you wear?</b></div>
      <section id="TOPPICKS">
      <Slideshow/>
        <div><Link class="shopnow" to='/products'>See what we've got</Link></div>
      </section>
      <br /><br />
      <section class="aboutbg">
        <div class="aboutus1">ABOUT US!</div>
        <div class="aboutus">
          <p>
              Founded in 2022 by Jacob Mlo<br />We strive to provide high
              quality clothing at an affordable price<br /> Come see us in person and be helped out by a member of our wonderful staff team <br/> or place an order online!
          </p>
        </div>
      </section>
      <br/><br/>
      <section class="socialbg1">KEEP UP</section>
      <section class="socialbg">
        <div class="socialimg">
          <a href="http://www.twitter.com"><img src={f4} alt="twitter"/></a>
        </div>
        <div class="socialimg">
          <a href="http://www.facebook.com"><img src={f1} alt="fbook"/></a>
        </div>
        <div class="socialimg">
          <a href="http://www.instagram.com"><img src={f2} alt="the gram"/></a>
        </div>
      </section>
    </main> 
    </div>
    )
}

export default Home;