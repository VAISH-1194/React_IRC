import {Route,Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
    return (
      <>
         <section class="home" id="home">
            
        <div class="row">
            <div class="content">
                <h3>upto 55% offers</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sapiente eos quisquam voluptatibus, cum quod.</p>
                <a href="" class="btn">shop now</a>
            </div>

            <div class="swiper books-list">
                <div class="swiper-wrapper">
                    <a href="" class="swiper-slide"><img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51W-r3VQlAL._SY445_SX342_.jpg" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTwRgr8PRLCPxDG2y3AbbqBlfqZD5z0g-pckjoj4qVO_tPaJUV2BvJmpBm8-sMJldl8gF4Io_V6nTyIQIqvViBQX8KjYD-jInB30di7hHDB&usqp=CAE" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS7paXal9945eetsOy49O6hG_dTeOHm8B8SdCM_G4q_zKMnz8Zv1gch6sS3Ifzqv7JzEtTw3AMoCpbcy1mfnM5KuBzAPsSpwJHK_17E6J4&usqp=CAE" alt=""/></a>

                    <a href="" class="swiper-slide"><img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTHSmJ6kNGnGh2RmtbPx4zRCT3N28lq7AMxA0d5ne4CjY6mAJZc8my_ZSJUOHZf_IwmwbDNEYAJx04vVAzseZwGEyJ0YTXYSw&usqp=CAY" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://m.media-amazon.com/images/I/51XJer4VDOL._AC_UF1000,1000_QL80_.jpg" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353325722i/16158817.jpg" alt=""/></a>

                    <a href="" class="swiper-slide"><img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91Qb2WtpE4L._AC_UY327_FMwebp_QL65_.jpg" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9TA4aFgcH6Wq2st4QuB-7IL5bU99FGNWYmPFA_eZKfpQ0JAaKK2REoYA3sArt9Qb7KBJxaj-M7g8ZLN2nKzYpxWUASP2Eu88QURu3Xck&usqp=CAE" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS4AGj2mS-0K0UyRR_DHiIN_ByHiSeE3mdn3hLnmZ_6Fs-mt4r_BOINydPDpx66OqgckPXPwvsB83IfbAb30uS-FyNL8AzDjb2yHv97obor&usqp=CAE" alt=""/></a>

                    <a href="" class="swiper-slide"><img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/610PYeHzOuL._AC_UY327_FMwebp_QL65_.jpg" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41f4NMrwTyL._SY445_SX342_.jpg" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51Zu0ZwT0jL._SY445_SX342_.jpg" alt=""/></a>
                </div>
            </div>
        </div>
    </section>

    <section class="icons-container">

        <div class="icons">
        <i class="fa-solid fa-book"></i>
            <div class="content">
                <h3>Vast Collections</h3>
                <p>Over 900,000 Book Collections</p>
            </div>
        </div>


        <div class="icons">
        <i class="fa-solid fa-truck-fast"></i>
            <div class="content">
                <h3>Free Shipping</h3>
                <p>Free Shipping inside TN</p>
            </div>
        </div>

        <div class="icons">
        <i class="fa-solid fa-clock"></i>
            <div class="content">
                <h3>Fast Delivery</h3>
                <p>Get Delivered within 3 days</p>
            </div>
        </div>

        <div class="icons">
            <i class="fa-solid fa-gift"></i>
            <div class="content">
                <h3>Special Gifts</h3>
                <p>Discounts on purchase over ₹2500</p>
            </div>
        </div>


    </section>
    <footer>
  <a href="#" class="footer-title">
    Back to top
  </a>
  <div class="footer-items">
    <ul>
      <h3>Get to Know Us</h3>
      <li><a href="#">About us</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Press Release</a></li>
      <li><a href="#">Nile Science</a></li>
    </ul>
    <ul>
      <h3>Connect with Us</h3>
      <li><a href="#">Facebook</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Instagram</a></li>
    </ul>
    <ul>
      <h3>Make Money with Us</h3>
      <li><a href="#">Sell on Nile</a></li>
      <li><a href="#">Sell under Nile Accelerator</a></li>
      <li><a href="#">Protect and Build Your Brand</a></li>
      <li><a href="#">Nile Global Selling</a></li>
      <li><a href="#">Become an Affiliate</a></li>
      <li><a href="#">Fulfillment by Nile</a></li>
      <li><a href="#">Advertise Your Products</a></li>
      <li><a href="#">Nile Pay on Merchants</a></li>
    </ul>
    <ul>
      <h3>Let Us Help You</h3>
      <li><a href="#">COVID-19 and Nile</a></li>
      <li><a href="#">Your Account</a></li>
      <li><a href="#">Return Centre</a></li>
      <li><a href="#">100% Purchase Protection</a></li>
      <li><a href="#">Nile App Download</a></li>
      <li><a href="#">Help</a></li>
    </ul>
      <div class="footer__socials">
                <a href="https://www.linkedin.com/in/vaishnavi-m-004246255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><i class="ri-linkedin-box-fill"></i></a>
                <a href="https://mail.google.com/mail/u/0/"><i class="ri-mail-fill"></i></a>
                <a href="https://github.com/VAISH-1194"><i class="ri-github-fill"></i></a>
                <a href="#contact"><i class="ri-file-text-fill"></i></a>
            </div>
  </div>
    <div class ="Footer">
        <h4><b>Copyright © Vaishnavi M - Founder of Yehdu++. All rights reserved.</b></h4>
    </div>
</footer>    

      </>
    );
  }
  
  export default Home;
  