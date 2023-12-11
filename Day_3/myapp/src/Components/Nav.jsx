
// function Nav() Normal Function
// {

// }

// const Nav =()=>   Arrow Function
// {

// }


function Nav()
{
    return(
        <>
    <header>
      <nav class="navbar">
        <div class="nav-logo">
          <a href="#"><img src="C:\Users\VAISHNAVI.M\OneDrive\Documents\GitHub\React_IRC\Day_3\myapp\src\Assets\IMG\Nile logo.png"/></a>
        </div>
        <div class="address">
          <a href="#" class="deliver">Deliver</a>
          <div class="map-icon">
            <span class="material-symbols-outlined">location_on</span>
            <a href="#" class="location">India</a>
          </div>
        </div>

        <div class="nav-search">
          <select class="select-search">
            <option>All</option>
            <option>All Categories</option>
            <option>Nile Devices</option>
          </select>
          <input type="text" placeholder="Search Nile" class="search-input"/>
          <div class="search-icon">
            <span class="material-symbols-outlined">search</span>
          </div>
        </div>

        <div class="sign-in">
         <a href="#"> <p>Hello, sign in</p>
          <span>Account &amp; Lists</span></a>
        </div>

        <div class="returns">
          <a href="#"><p>Returns</p>
            <span>&amp; Orders</span></a>
        </div>

        <div class="cart">
          <a href="#">
            <span class="material-symbols-outlined cart-icon">shopping_cart</span>
            </a>
            <p>Cart</p>
        </div>
      </nav>
      
      <div class="banner">
        <div class="banner-content">
          <div class="panel">
            <span class="material-symbols-outlined">menu</span>
            <a href="#">All</a>
          </div>
  
          <ul class="links">
            <li><a href="#">Today's Deals</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Registry</a></li>
            <li><a href="#">Gift Cards</a></li>
            <li><a href="#">Sell</a></li>
          </ul>
          <div class="deals">
            <a href="#">Shop deals in Electronics</a>
          </div>
        </div>
      </div>
    </header>
        </>
    )
}


export default Nav;