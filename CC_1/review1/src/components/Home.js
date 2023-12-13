import {Route,Routes} from "react-router-dom";
import { Link } from 'react-router-dom';


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
                    <a href="" class="swiper-slide"><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzDv2yframGatT9nlp8ep-xWNrxu9EG8PHVfn6dcUzJLhPh7wpTJGQSZ4DrU1q5FiJ419DMYMcxImIseYT6WIaQccOFZPh3lhUIS-Aw98&usqp=CAE" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR9TA4aFgcH6Wq2st4QuB-7IL5bU99FGNWYmPFA_eZKfpQ0JAaKK2REoYA3sArt9Qb7KBJxaj-M7g8ZLN2nKzYpxWUASP2Eu88QURu3Xck&usqp=CAE" alt=""/></a>
                    <a href="" class="swiper-slide"><img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS4AGj2mS-0K0UyRR_DHiIN_ByHiSeE3mdn3hLnmZ_6Fs-mt4r_BOINydPDpx66OqgckPXPwvsB83IfbAb30uS-FyNL8AzDjb2yHv97obor&usqp=CAE" alt=""/></a>
                    
                </div>

                <img class="stand" src="./image/stand.png" alt=""/>
            </div>
        </div>
    </section>

    <section class="icons-container">
        <div class="icons">
            <i class="fas fa-plane"></i>
            <div class="content">
                <h3>over payment</h3>
                <p>over payment $100</p>
            </div>
        </div>

        <div class="icons">
            <i class="fas fa-lock"></i>
            <div class="content">
                <h3>over payment</h3>
                <p>over payment $100</p>
            </div>
        </div>

        <div class="icons">
            <i class="fas fa-headset"></i>
            <div class="content">
                <h3>over payment</h3>
                <p>over payment $100</p>
            </div>
        </div>

    </section>

    

      </>
    );
  }
  
  export default Home;
  