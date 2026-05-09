import React from 'react'
import Dot from '../components/91.jpg'
function Rot() {
  return (
<>
    <style>
        {`
          .home-btn{
            transition: 0.3s;
              border: 2px solid orange;
            
          
          }

          .home-btn:hover{
            background-color: orange;
            color: white;
           
          }
              
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
<a href="#" style={{position: 'relative',bottom: '150px',textDecoration: 'none',left: '580px',color: 'green'}}>Home /</a>
<a href="#" style={{position: 'relative',bottom: '150px',textDecoration: 'none',left: '590px',color: 'green'}}>pages /</a>
<a href="#" style={{position: 'relative',bottom: '150px',textDecoration: 'none',left: '600px',color: 'white'}}>404</a>

<h1 class="text-center  display-6" style={{position: 'absolute',top: '200px',left: '580px',color: 'white'}}>404 Error</h1>

</div>

<i class="bi bi-exclamation-triangle display-1 " style={{color: 'orange',position: 'absolute',left: '620px',top: '500px'}}></i>
<h1 class="display-1" style={{position: 'absolute',left: '590px',top: '600px',color: '#45595b'}}>404</h1>
<h1 class="mb-4" style={{position: 'absolute',top: '690px',left: '500px',color: '#45595b'}}>Page Not Found</h1>
<p class="mb-4" style={{position: 'absolute',top: '760px',left: '420px',color: '#45595b'}}>We’re sorry, the page you have looked for does not exist in our website!  </p>
<p class="mb-4" style={{position: 'absolute',top: '780px',left: '480px',color: '#45595b'}}>Maybe go to our home page or try to use a search?</p>
  <a
        className="btn  rounded-pill py-3 px-5 home-btn"
        href="index.html" style={{ position: 'absolute',left: '560px',top: '830px'}}
      >
        Go Back To Home
      </a>
      <div className='card' style={{height: '610px',position: 'relative',top: '650px',backgroundColor: '#2E865F'}}>


   
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

export default Rot
