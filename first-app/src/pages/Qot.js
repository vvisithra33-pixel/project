import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dot from '../components/91.jpg'

function Qot() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
         .coupon-btn:hover{
  background-color: orange;
  color: white;
  border-color: orange;

}
  .coupon-btn{
  position: absolute;
  left: 350px;
  top: 880px;
    border-color: orange;
  
}

           
      

           
        `}
      
      </style>

    <div>
     
        <img src={Dot} alt=''></img>
        <h1 class="text-center  display-6" style={{position: 'absolute',top: '100px',left: '580px',top: '200px',color: 'white'}}>Cart</h1>
        <a href="#" style={{textDecoration: 'none',position: 'relative',bottom: '150px',left: '540px', color: 'green'}}>Home /</a>
         <a href="#" style={{textDecoration: 'none',position: 'relative',bottom: '150px',left: '550px', color: 'green'}}>Pages /</a>
          <a href="#" style={{textDecoration: 'none',position: 'relative',bottom: '150px',left: '560px', color: 'green'}}>Cart</a>
      
      
      
  
      <table class="table" style={{position: 'absolute',top: '530px',position: 'absolute',left: '100px',width: '1100px'}}>
                        <thead >
                          <tr >
                            <th scope="col" style={{color: 'gray'}}>Products</th>
                            <th scope="col" style={{color: 'gray'}}>Name</th>
                            <th scope="col" style={{color: 'gray'}}>Price</th>
                            <th scope="col" style={{color: 'gray'}}>Quantity</th>
                            <th scope="col" style={{color: 'gray'}}>Total</th>
                            <th scope="col" style={{color: 'gray'}}>Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div class="d-flex align-items-center">
                                    <img src="/imaes/63.jpg" class="img-fluid me-5 rounded-circle"  alt="" style={{width: '75px'}}></img>
                                    </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>Big Banana</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>2.99 $</p>
                                </td>
                                <td>
                                    <div class="input-group quantity mt-4" >
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-minus rounded-circle bg-light border">
                                            <i class="fa fa-minus" style={{color: 'gray'}}></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm text-center border-0" value="1" style={{color: 'gray'}}></input>
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i class="fa fa-plus" style={{color: 'gray'}}></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>2.99 $</p>
                                </td>
                                <td>
                                    <button class="btn btn-md rounded-circle bg-light border mt-4">
                                        <i class="fa fa-times text-danger"></i>
                                    </button>
                                </td>
                            
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="d-flex align-items-center">
                                        <img src="/imaes/62.jpg" class="img-fluid me-5 rounded-circle"  alt="" style={{width: '75px'}}></img>
                                    </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>Potatoes</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>2.99 $</p>
                                </td>
                                <td>
                                    <div class="input-group quantity mt-4">
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-minus rounded-circle bg-light border">
                                            <i class="fa fa-minus" style={{color: 'gray'}}></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm text-center border-0" value="1" style={{color: 'gray'}}></input>
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i class="fa fa-plus" style={{color: 'gray'}}></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>2.99 $</p>
                                </td>
                                <td>
                                    <button class="btn btn-md rounded-circle bg-light border mt-4">
                                        <i class="fa fa-times text-danger"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="d-flex align-items-center">
                                        <img src="/imaes/61.jpg" class="img-fluid me-5 rounded-circle"  alt="" style={{width: '75px'}}></img>
                                    </div>
                                </th>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>Awesome Brocoli</p>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>2.99 $</p>
                                </td>
                                <td>
                                    <div class="input-group quantity mt-4" >
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-minus rounded-circle bg-light border">
                                            <i class="fa fa-minus" style={{color: 'gray'}}></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm text-center border-0" value="1" style={{color: 'gray'}}></input>
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-plus rounded-circle bg-light border">
                                                <i class="fa fa-plus" style={{color: 'gray'}}></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="mb-0 mt-4" style={{color: 'gray'}}>2.99 $</p>
                                </td>
                                <td>
                                    <button class="btn btn-md rounded-circle bg-light border mt-4">
                                        <i class="fa fa-times text-danger"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
      
    </div>
    <input type="text" class="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" style={{position: 'absolute',left: '100px',top: '880px'}}></input>
<button className="btn border-secondary rounded-pill px-4 py-3 text-success coupon-btn">
  Apply Coupon
</button>
<div class="bg-light rounded" style={{width: '350px',top: '1000px',position: 'absolute',left: '800px'}}>
                            <div class="p-4">
                                <h1 class="display-6 mb-4" style={{color: '#45595b'}}>Cart <span class="fw-normal">Total</span></h1>
                                <div class="d-flex justify-content-between mb-4">
                                    <h5 class="mb-0 me-4" style={{color: '#45595b'}}>Subtotal:</h5>
                                    <p class="mb-0" style={{color: 'gray'}}>$96.00</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h5 class="mb-0 me-4" style={{color: '#45595b'}}>Shipping</h5>
                                    <div class="">
                                        <p class="mb-0" style={{color: 'gray'}}>Flat rate: $3.00</p>
                                    </div>
                                </div>
                                <p class="mb-0 text-end" style={{color: 'gray'}}>Shipping to Ukraine.</p>
                            </div>
                            <div class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                <h5 class="mb-0 ps-4 me-4" style={{color: '#45595b'}}>Total</h5>
                                <p class="mb-0 pe-4" style={{color: 'gray'}}>$99.00</p>
                            </div>
                            <button class="btn border-secondary rounded-pill px-4 py-3 text-success text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button>
                            <button
                              class="btn btn-outline-danger rounded-pill px-4 py-3 text-uppercase mb-4 ms-3"
                              type="button"
                              onClick={() => navigate('/')}
                            >
                              Cancel
                            </button>
                        </div>
                        <div className='card' style={{height: '610px',position: 'relative',top: '1100px',backgroundColor: '#2E865F'}}>


   
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

export default Qot
