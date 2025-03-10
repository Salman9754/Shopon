import React from "react";
import payement from '../assets/payments.png'
function Footer() {
  return (
    <div className="container-fluid footer_container pt-2 pb-2">
      <div className="container mt-5 d-flex justify-content-between">
        <div className="one">
          USEFUL LINKS
          <ul className="p-0 mt-3">
            <li>About us</li>
            <li>Gift certificates</li>
            <li>Our brands</li>
            <li>Sitemap</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="one">
          MY ACCOUNT
          <ul className="p-0 mt-3">
            <li>Sign in</li>
            <li>Create account</li>
          </ul>
        </div>
        <div className="one">
          CUSTOMER SERVICE
          <ul className="p-0 mt-3">
            <li>Payment & Shipping</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQs</li>
            <li>Returns & Exchanges</li>
            <li>About your order</li>
            <li>Wishlist</li>
            <li>Comparison list</li>
          </ul>
        </div>
        <div className="one">
          CONTACT US
          <ul className="p-0 mt-3">
            <li>, 15E Officers Colony Bosan Road Multan</li>
            <li>03336198169</li>
            <li>Mon-Sun 09:00 AM to 11:30 PM</li>
            <li>admin@shopon.pk</li>
            <li>View on map</li>
          </ul>
        </div>
        <div className="one">
          KEEP IN TOUCH
          <ul className="p-0 mt-3">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <p className="text-end"><img src={payement} alt="" width={200} height={30} /></p>
    </div>
  );
}
export default Footer;
