import React, { useState } from "react";
import Dot from '../components/91.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Milk from '../components/41.jpg'
import Bar from '../components/42.jpg'
import Lab from '../components/43.jpg'
import Banner from '../components/Banner.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';



function Ball() {
    const [value, setValue] = useState(0)

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sliderStyle = {
    WebkitAppearance: "none",
    width: "100%",
    height: "15px",
    borderRadius: "5px",
    background: "#d3d3d3",
    outline: "none",
    opacity: 0.7,
    transition: "opacity .2s"
    
  };

  const containerStyle = {
    width: "15%",
    position: "absolute",
    left: '100px',
    top: '940px'

   
   
  };



  return (
  <>
        <style>{`
        .pagination{
          display:flex;
        
          list-style:none;
          padding:0;
          position: absolute;
          top: 1800px;
          left: 160px;
        }

        .pagination li a{
          display:block;
          padding:8px 12px;
          text-decoration:none;
          border:1px solid orange;
          color:black;
          margin:0 2px;
          border-radius:5px;
        }

        .pagination li a:hover{
          background-color:green;
          color:white;
        }
      `}

       {`
          .bottom-border-example {
            width: 100%;
            border: 1px solid orange;
            height: 200px
          }
           
        `}
      </style>
  <div class="pov">
<img src={Dot} alt=''>

</img>

<h1 class="text-center text-white" style={{position: 'absolute',top: '200px',left: '580px'}}>Shop</h1>
<a href="#" style={{position: 'relative',bottom: '150px',left: '560px',textDecoration: 'none',color: 'green'}}>Home /</a>
<a href="#" style={{position: 'relative',bottom: '150px',left: '560px',textDecoration: 'none',color: 'green'}}> Pages /</a>
<a href="#" style={{position: 'relative',bottom: '150px',left: '560px',textDecoration: 'none',color: 'white'}}> Sohp </a>
</div>
<div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4" style={{width: '300px',position: 'absolute',top: '600px',left: '900px'}}>
                                    <label for="fruits">Default Sorting:</label>
                                    <select id="fruits" name="fruitlist" class="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="volvo">Nothing</option>
                                        <option value="saab">Popularity</option>
                                        <option value="opel">Organic</option>
                                        <option value="audi">Fantastic</option>
                                    </select>

                                </div>
                             
    <h1 class="mb-4" style={{position: 'absolute',left: '100px',top: '530px',color: '#45595b'}}>Fresh fruits shop</h1>
<input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" style={{width: '250px',position: 'absolute',top: '600px',left: '100px'}}></input>
<i class="fa fa-search" style={{position: 'absolute',top: '620px',left: '310px'}}></i>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '360px',top: '660px'}}>
  <img src="/imaes/5.jpg" alt='' style={{height: '100px'}}></img>
  <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
  <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
  <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
  <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '640px',top: '660px'}}>
    <img src="/imaes/5.jpg" alt='' style={{height: '100px'}}></img>
      <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
      <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
        <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
         <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '920px',top: '660px'}}>
    <img src="/imaes/2.jpg" alt='' style={{height: '100px'}}></img>
      <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
      <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
        <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
         <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '920px',top: '1000px'}}>
    <img src="/imaes/4.jpg" alt='' style={{height: '100px'}}></img>
      <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
      <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
        <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
         <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '640px',top: '1000px'}}>
   <img src="/imaes/3.jpg" alt='' style={{height: '100px'}}></img>
     <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
     <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
       <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
        <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '360px',top: '1000px'}}>
     <img src="/imaes/1.jpg" alt='' style={{height: '100px'}}></img>
       <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
       <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
         <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
          <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '920px',top: '1340px'}}>
     <img src="/imaes/1.jpg" alt='' style={{height: '100px'}}></img>
       <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
       <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
         <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
          <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '640px',top: '1340px'}}>
     <img src="/imaes/5.jpg" alt='' style={{height: '100px'}}></img>
       <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
       <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
         <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
          <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<div className='card' style={{position: 'absolute',width: '250px',height: '320px',left: '360px',top: '1340px'}}>
     <img src="/imaes/3.jpg" alt='' style={{height: '100px'}}></img>
       <h4 style={{position: 'absolute',top: '110px',left: '20px',color: '#45595b'}}>Grapes</h4>
       <p style={{position: 'absolute',top: '140px',left: '20px',color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
         <p class="text-dark fs-5 fw-bold mb-0" style={{position: 'absolute',top: '220px',left: '20px'}}>$4.99 / kg</p>
          <a href="#" class="btn border  rounded-pill px-3" style={{width: '150px',position: 'relative',top: '160px',left: '20px',color: 'green'}}><i class="fa fa-shopping-bag me-2 " style={{color: 'green'}}></i> Add to cart</a>
</div>
<h4 style={{position: 'absolute',left: '100px',top: '670px',color: '#45595b'}}>Categories</h4>
<a href="#" style={{position: 'absolute',left: '100px',top: '710px',textDecoration: 'none',color: 'green'}}><i class="fas fa-apple-alt me-2" ></i>Apples</a>
<span style={{position: 'absolute',left: '320px',top: '710px',color: 'gray'}}>(3)</span>
<a href="#" style={{position: 'relative',textDecoration: 'none',left: '100px',top: '320px',color: 'green'}} ><i class="fas fa-apple-alt me-2" ></i>Oranges</a>
<span style={{position: 'absolute',left: '320px',top: '745px',color: 'gray'}}>(5)</span>
<a href="#" style={{position: 'absolute',top: '780px',left: '100px',textDecoration: 'none',color: 'green'}} ><i class="fas fa-apple-alt me-2" ></i>Strawbery</a>
<span style={{position: 'absolute',left: '320px',top: '780px',color: 'gray'}}>(2)</span>
<a href="#" style={{position: 'absolute',top: '810px',textDecoration: 'none',left: '100px',color: 'green'}} ><i class="fas fa-apple-alt me-2" ></i>Banana</a>
<span style={{position: 'absolute',top: '810px',left: '320px',color: 'gray'}}>(8)</span>
<a href="#" style={{position: 'absolute',top: '840px',left: '100px',textDecoration: 'none',color: 'green'}}><i class="fas fa-apple-alt me-2" ></i>Pumpkin</a>
<span style={{position: 'absolute',top: '840px',left: '320px',color: 'gray'}}>(5)</span>
    <div>
     
<h4 style={{position: 'absolute',top: '900px',left: '100px',color: '#45595b'}}>Price</h4>
      <div style={containerStyle}>
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          style={sliderStyle}
          onChange={handleChange}
        />

        <p>
          <span>{value}</span>
        </p>
      </div>
    </div>
    <h4 style={{position: 'absolute',left: '100px',top: '1010px',color: '#45595b'}}>Additional</h4>
<div class="Pot" style={{position: 'absolute',left: '100px',top: '1050px'}}>
  <input type="radio" class="me-2" id="Categories-1" name="Categories-1" value="Beverages" ></input>
  <label for="Categories-1" style={{color: 'gray'}} > Organic</label>
</div>
<div class="Pot" style={{position: 'absolute',left: '100px',top: '1080px'}}>
  <input type="radio" class="me-2" id="Categories-1" name="Categories-1" value="Beverages" ></input>
  <label for="Categories-1" style={{color: 'gray'}} > Fresh</label>
</div>
<div class="Pot" style={{position: 'absolute',left: '100px',top: '1110px'}}>
  <input type="radio" class="me-2" id="Categories-1" name="Categories-1" value="Beverages" ></input>
  <label for="Categories-1" style={{color: 'gray'}} > Sales</label>
</div>
<div class="Pot" style={{position: 'absolute',left: '100px',top: '1140px'}}>
  <input type="radio" class="me-2" id="Categories-1" name="Categories-1" value="Beverages" ></input>
  <label for="Categories-1" style={{color: 'gray'}} > Discount</label>
</div>
<div class="Pot" style={{position: 'absolute',left: '100px',top: '1170px'}}>
  <input type="radio" class="me-2" id="Categories-1" name="Categories-1" value="Beverages" ></input>
  <label for="Categories-1" style={{color: 'gray'}} > Expired</label>
</div>
<h4 class="mb-3" style={{position: 'absolute',left: '100px',top: '1240px',color: '#45595b'}}>Featured products</h4>

<div class="Milk">
  <img src={Milk} alt="" style={{ width: '100px',height: '100px',top: '1290px',position: 'absolute',left: '100px'}}></img>
  <h6 class="mb-2" style={{position: 'absolute',left: '220px',top: '1290px',color: '#45595b'}}>Big Banana</h6>
  <div class="d-flex mb-2" style={{position: 'absolute',left: '220px',top: '1320px'}}>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
  <h5 class="fw-bold me-2" style={{position: 'absolute',left: '220px',top: '1340px'}}>2.99 $</h5>
</div>
<div class="Nilk">
  <img src={Bar} alt="" style={{ width: '100px',height: '100px',top: '1400px',position: 'absolute',left: '100px'}}></img>
   <h6 class="mb-2" style={{position: 'absolute',left: '220px',top: '1400px',color: '#45595b'}}>Big Banana</h6>
   <div class="d-flex mb-2" style={{position: 'absolute',left: '220px',top: '1430px'}}>
                                                    <i class="fa fa-start " style={{color: 'yellow'}}></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
<h5 class="fw-bold me-2" style={{position: 'absolute',left: '220px',top: '1450px'}}>2.99 $</h5>
</div>
<div class="Silk">
  <img src={Lab} alt="" style={{ width: '100px',height: '100px',top: '1510px',position: 'absolute',left: '100px'}}></img>
   <h6 class="mb-2" style={{position: 'absolute',left: '220px',top: '1510px',color: '#45595b'}}>Big Banana</h6>
   <div class="d-flex mb-2" style={{position: 'absolute',left: '220px',top: '1540px'}}>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star text-secondary"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
  <h5 class="fw-bold me-2" style={{position: 'absolute',left: '220px',top: '1560px'}}>2.99 $</h5>
</div>
<img src={Banner} alt="" style={{width: '240px',height: '200px',left: '100px',position: 'absolute',top: '1620px'}}></img>
   <ul className="pagination">
        <li><a href="#">&laquo;</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&raquo;</a></li>
      </ul>

       
<div className='card' style={{height: '610px',position: 'relative',top: '1540px',backgroundColor: '#2E865F'}}>


   
<input type="text" class="moo" style={{position: 'absolute',top: '100px',left: '350px',width: '650px',borderRadius: '20px'}}>
</input>

   
     
  

<div class="bottom-border-example"></div>
<button style={{width: '150px',backgroundColor: 'orange',position: 'absolute',top: '102px',left: '850px',borderRadius: '20px',border: 'orange',color: 'white'}}>Subscribe Now</button>
<h1 class="Voo mb-0" style={{position: 'absolute', color: 'orange',top: '70px',left: '100px'}}>Fruitables</h1>
<p class="Iov" style={{position: 'absolute',color: 'white',top: '120px',left: '100px'}}>Fresh products</p>
<a class="btn " style={{position: 'absolute',left: '1100px',top: '100px',color: 'white'}}><i class="fab fa-twitter"></i></a>
<a class="btn " style={{position: 'absolute',left: '1130px',top: '100px',color: 'white'}}><i class="fab fa-facebook-f"></i></a>
<a class="btn " style={{position: 'absolute',left: '1160px',top: '100px',color: 'white'}}><i class="fab fa-youtube"></i></a>
<a class="btn " style={{position: 'absolute',left: '1190px',top: '100px',color: 'white'}}><i class="fab fa-linkedin-in"></i></a>

<h4 className='text-light  ' style={{ position: 'absolute',left: '80px',top: '270px'}}>Why People Like us!</h4>
<h4 className='text-light  ' style={{ position: 'absolute' ,left: '420px',top: '270px'}}>Shop info</h4>
<h4 className='text-light ' style={{ position: 'absolute',left: '680px',top: '270px'}}>Account</h4>
<h4 className='text-light ' style={{ position: 'absolute',left: '980px',top: '270px'}}>Contact</h4>

  
   <div class="boo" style={{position: 'absolute',top: '350px',left: '80px'}}>
  <p>typesetting, remaining essentially</p>
  <p>unchanged. It was popularised in the </p>
  <p>1960s with the like Aldus PageMaker</p>
  <p>including of Lorem Ipsum.</p>
  </div>
  <div class="soo" style={{position: 'absolute',top: '350px',left: '420px'}}>
    <p>Contact Us</p>
    <p>FAQs & Help</p>
    <p>About Us</p>
    <p>Privacy Policy</p>
    <p>Terms & Condition</p>
    <p>Return Policy</p>
  </div>
    <div class="goo" style={{position: 'absolute',top: '350px',left: '680px'}}>
    <p>My Account</p>
    <p>Shop details</p>
    <p>Shopping Cart</p>
    <p>Wishlist</p>
    <p>Order History</p>
    <p>International Orders</p>
  </div>
     <div class="woo" style={{position: 'absolute',top: '350px',left: '980px'}}>
    <p>Address: 1429 Netus Rd, NY 48247</p>
    <p>Email: Example@gmail.com</p>
    <p>Phone: +0123 4567 8910</p>
    <p>Payment Accepted</p>

  </div>

 
</div>







                                </> 
  )
}

export default Ball



