import React from "react";
import logo from "../images/logo.png"
const Contact = () => {
    return (
      <main>
      <div class="contactcontainer">
        <h1 class="title">"RAGING-APE"</h1>
        <div class="wrapper">
          <div class="company-info">
              <img src={logo} alt="logo"/>
            <h2>"RAGING-APE"</h2>
            <br/><p><i class="fa fa-map-marker" aria-hidden="true"></i> 227 W College St, Charlotte NC<br/><i class="fa fa-phone" aria-hidden="true"></i> (704)-983-2617<br/><i class="fa fa-envelope" aria-hidden="true"></i> support@ragingape.com</p>
        </div>
        <div class="contact">
          <h3>email us</h3>
          <form action="https://formsubmit.co/8ee9817eff6b4697f88be4436386df4c" method="POST">
            <p>
              <label>Name</label>
              <input type="text" name="name" required />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name="email" required></input>
            </p>
            <p>
              <label>Phone Number</label>
              <input type="tel" name="phone" required></input>
            </p>
            <p>
              <label>Message</label>
              <textarea name="message" rows="5" required></textarea>
            </p>
            <p>
              <button>SUBMIT</button>
            </p>
          </form>
        </div>
      </div>
      </div>
      <div class="grow"></div>
    </main>
    )
}

export default Contact