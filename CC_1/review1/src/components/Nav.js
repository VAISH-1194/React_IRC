import { Link } from 'react-router-dom';


function Nav() {
    return (
      <>

        {/* header1 */}

            <header class="header">
        <div class="header_one">
            <a href="" class="logo"><i class="fas fa-book">RBLY</i></a>

            <form action="" class="search-form">
                <input id="search-box" type="search" placeholder="search here..."/>
                <label for="" class="fas fa-search"></label>
            </form>

            <div class="icons">
                <div id="search-btn" class="fas fa-search"></div>
                <a href="" class="fas fa-heart"></a>
                <a href="" class="fas fa-shopping-cart"></a>

                <Link to='/login'>
                <div id="login-btn" class="fas fa-user"></div>
                </Link>

                <Link to='/'>
                    <div id="home" class="fa-solid fa-arrow-right-from-bracket"></div>
                </Link>
    
            </div>
        </div>

            {/* header2 */}

        <div class="header_two">
            
            <div class="navbar">
                <Link to='/'>
                    <a href="home">Home</a>
                </Link>

                <Link to='/featured'>
                    <a href="featured">Featured</a>
                </Link>

                {/* <Link to='/arrivals'>
                    <a href="arrivals">Arrivals</a>
                </Link> */}

                <a href="#reviews">Reviews</a>
                <a href="#blogs">Blogs</a>
            </div>
        </div>
    
    </header>

    {/* BNav  */}

    <div class="bottom-navbar">
            <a href="#home" class="fas fa-home"></a>
            <a href="#featured" class="fas fa-list"></a>
            <a href="#arrivals" class="fas fa-tags"></a>
            <a href="#blogs" class="fas fa-app-store"></a>
            </div>
      </>
    );
  }
  
  export default Nav;
  