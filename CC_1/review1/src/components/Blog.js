function Blog() {
    return (
      <>
          <section class="blogs" id="blogs">
        <div class="heading"><span>our blogs</span></div>

        <div class="swiper blog-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide box">
                    <div class="image">
                        <img src="./image/blog-1.jpg" alt=""/>
                    </div>

                    <div class="content">
                        <h3>blog title goes here</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat, provident quidem inventore.
                        </p>
                        <a href="" class="btn">read more</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="./image/blog-2.jpg" alt=""/>
                    </div>

                    <div class="content">
                        <h3>blog title goes here</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat, provident quidem inventore.
                        </p>
                        <a href="" class="btn">read more</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="./image/blog-3.jpg" alt=""/>
                    </div>

                    <div class="content">
                        <h3>blog title goes here</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat, provident quidem inventore.
                        </p>
                        <a href="" class="btn">read more</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="./image/blog-4.jpg" alt=""/>
                    </div>

                    <div class="content">
                        <h3>blog title goes here</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat, provident quidem inventore.
                        </p>
                        <a href="" class="btn">read more</a>
                    </div>
                </div>

                <div class="swiper-slide box">
                    <div class="image">
                        <img src="./image/blog-5.jpg" alt=""/>
                    </div>

                    <div class="content">
                        <h3>blog title goes here</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora placeat, provident quidem inventore.
                        </p>
                        <a href="" class="btn">read more</a>
                    </div>
                </div>

            </div>
        </div>
     </section>

     <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>our locations</h3>
                <a href=""><i class="fas fa-map-marker-alt"></i>india</a>
                <a href=""><i class="fas fa-map-marker-alt"></i>USA</a>
                <a href=""><i class="fas fa-map-marker-alt"></i>russia</a>
                <a href=""><i class="fas fa-map-marker-alt"></i>france</a>
                <a href=""><i class="fas fa-map-marker-alt"></i>japan</a>
                <a href=""><i class="fas fa-map-marker-alt"></i>africa</a>
            </div>

            <div class="box">
                <h3>quick links</h3>
                <a href=""><i class="fas fa-arrow-right"></i>home</a>
                <a href=""><i class="fas fa-arrow-right"></i>featured</a>
                <a href=""><i class="fas fa-arrow-right"></i>arrivals</a>
                <a href=""><i class="fas fa-arrow-right"></i>blogs</a>    
            </div>

            <div class="box">
                <h3>exatra links</h3>
                <a href=""><i class="fas fa-arrow-right"></i>account info</a>
                <a href=""><i class="fas fa-arrow-right"></i>ordered items</a>
                <a href=""><i class="fas fa-arrow-right"></i>privacy policy</a>
                <a href=""><i class="fas fa-arrow-right"></i>payment method</a>
                <a href=""><i class="fas fa-arrow-right"></i>our services</a>
            </div>

            <div class="box">
                <h3>contact info</h3>
                <a href=""><i class="fas fa-phone"></i>+123-356-546</a>
                <a href=""><i class="fas fa-phone"></i>+123-356-546</a>
                <a href=""><i class="fas fa-envelope"></i>john@gmail.com</a>
                <img src="./image/worldmap.png" alt="" class="map"/>
            </div>
        </div>

        <div class="share">
            <a href=""><i class="fa fa-facebook"></i></a>
            <a href=""><i class="fa fa-twitter"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-linkedin"></i></a>
            <a href=""><i class="fa fa-square-pinterest"></i></a>
        </div>

        {/* <div class="credit">created by <span>Vaishnavi M</span> | all rights reserved</div> */}
    </section>

      </>
    );
  }
  
  export default Blog;
  