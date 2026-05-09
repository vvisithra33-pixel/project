import React from 'react'
import { useNavigate } from 'react-router-dom'
import Dot from '../components/91.jpg'

function Wot() {
  const navigate = useNavigate();

  return (
    <>
          <style>

      {`
          .bottom-border-example {
            width: 100%;
            border: 1px solid orange;
            height: 200px
          }
           
        `}

      </style>
    <div>
      
<img src={Dot} alt=''></img>
<p style={{position: 'absolute',top: '230px',left: '550px',color: 'green'}}>Home /</p>
<p style={{position: 'absolute',top: '230px',left: '610px',color: 'green'}}>Pages /</p>
<p style={{position: 'absolute',top: '230px',left: '670px',color: 'green'}}>Checkout</p>
<h1 class="text-center display-6" style={{position: 'absolute',bottom: '350px',left: '550px',color: 'white'}}>Checkout</h1>

<input type="checkbox" class="form-check-input" id="Account-1" name="Accounts" value="Accounts" style={{position: 'absolute',left: '100px',top: '1400px'}}></input>
<label class="form-check-label" for="Account-1" style={{position: 'absolute',left: '130px',top: '1400px',color: 'gray'}}>Create an account?</label>
<input type="checkbox" class="form-check-input" id="Account-1" name="Accounts" value="Accounts" style={{position: 'absolute',left: '100px',top: '1460px'}}></input>
<label class="form-check-label" for="Account-1" style={{position: 'absolute',left: '130px',top: '1460px',color: 'gray'}}>Ship to a different address?</label>


<h1 class="mb-4" style={{position: 'absolute',left: '100px',top: '500px',color: '#45595b'}}>Billing details</h1>
<label class="form-label my-3" style={{position: 'absolute',left: '100px',top: '580px',color: 'gray'}}>First Name<sup>*</sup></label>
<input type="text" class="form-control" style={{position: 'absolute',width: '270px',top: '640px',left: '100px'}}></input>
<label class="form-label my-3" style={{position: 'absolute',left: '400px',top: '580px',color: 'gray'}}>Last Name<sup>*</sup></label>
<input type="text" class="form-control" style={{position: 'absolute',width: '270px',top: '640px',left: '400px'}}></input>
<label class="form-label my-3" style={{position: 'absolute',left: '100px',top: '680px', color: 'gray'}}>Company Name<sup>*</sup></label>
<input type="text" class="form-control" style={{position: 'absolute',left: '100px',width: '570px',top: '740px'}}></input>
<label class="form-label my-3" style={{position: 'absolute',left: '100px',top: '780px',color: 'gray'}}>Address <sup>*</sup></label>
<input type="text" class="form-control" placeholder="House Number Street Name" style={{position: 'absolute',width: '570px',left: '100px',top: '840px'}}></input>
<label class="form-label my-3" style={{position: 'absolute',left: '100px',top: '880px',color: 'gray'}}>Town/City* <sup>*</sup></label>
<input type="text" class="form-control" style={{position: 'absolute',left: '100px',width: '570px',top: '940px'}}></input>
<label class="form-label my-3" style={{position: 'absolute',left: '100px',top: '980px',color: 'gray'}}>Country* <sup>*</sup></label>
<input type="text" class="form-control" style={{position: 'absolute',left: '100px',width: '570px',top: '1040px'}}></input>
<label class="form-label my-3" style={{position: 'absolute',left: '100px',top: '1080px',color: 'gray'}}>Postcode/Zip* <sup>*</sup></label>
<input type="text" class="form-control" style={{position: 'absolute',left: '100px',width: '570px',top: '1140px'}}></input>
<label class="form-label my-3" style={{position: 'absolute',left: '100px',top: '1180px',color: 'gray'}}>Mobile* <sup>*</sup></label>
<input type="text" class="form-control" style={{position: 'absolute',left: '100px',width: '570px',top: '1240px'}}></input>
<label class="form-label my-3" style={{position: 'absolute',left: '100px',top: '1280px',color: 'gray'}}>Email Address* <sup>*</sup></label>
<input type="text" class="form-control" style={{position: 'absolute',left: '100px',width: '570px',top: '1340px'}}></input>
<p style={{ borderBottom: "2px solid #d3d3d3", marginLeft: "100px",position: 'relative',width: '570px',top: '1040px' }}></p>
<textarea name="text" class="form-control" spellcheck="false" cols="30" rows="11" placeholder="Oreder Notes (Optional)" style={{position: 'absolute',top: '1500px',left: '100px',width: '570px'}}></textarea>
<table class="table" style={{position: 'absolute',left: '800px',width: '200px',top: '580px'}}>
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{color: 'gray'}}>Products</th>
                                            <th scope="col" style={{color: 'gray'}}>Name</th>
                                            <th scope="col" style={{color: 'gray'}}>Price</th>
                                            <th scope="col" style={{color: 'gray'}}>Quantity</th>
                                            <th scope="col" style={{color: 'gray'}}>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div class="d-flex align-items-center mt-2">
                                                    <img src="/imaes/61.jpg" class="img-fluid rounded-circle"  ></img>
                                                </div>
                                            </th>
                                            <td class="py-5" style={{color: 'gray'}}>Awesome Brocoli</td>
                                            <td class="py-5" style={{color: 'gray'}}>$69.00</td>
                                            <td class="py-5" style={{color: 'gray'}}>2</td>
                                            <td class="py-5" style={{color: 'gray'}}>$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div class="d-flex align-items-center mt-2">
                                                    <img src="/imaes/62.jpg" class="img-fluid rounded-circle"  alt=""></img>
                                                </div>
                                            </th>
                                            <td class="py-5" style={{color: 'gray'}}>Potatoes</td>
                                            <td class="py-5"  style={{color: 'gray'}}>$69.00</td>
                                            <td class="py-5" style={{color: 'gray'}}>2</td>
                                            <td class="py-5" style={{color: 'gray'}}>$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div class="d-flex align-items-center mt-2">
                                                    <img src="/imaes/63.jpg" class="img-fluid rounded-circle"  alt=""></img>
                                                </div>
                                            </th>
                                            <td class="py-5" style={{color: 'gray'}}>Big Banana</td>
                                            <td class="py-5" style={{color: 'gray'}}>$69.00</td>
                                            <td class="py-5" style={{color: 'gray'}}>2</td>
                                            <td class="py-5" style={{color: 'gray'}}>$138.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td class="py-5"></td>
                                            <td class="py-5"></td>
                                            <td class="py-5">
                                                <p class="mb-0 text-dark py-3" style={{color: 'gray'}}>Subtotal</p>
                                            </td>
                                            <td class="py-5">
                                                <div class="py-3 border-bottom border-top">
                                                    <p class="mb-0 text-dark" style={{color: 'gray'}}>$414.00</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td class="py-5">
                                                <p class="mb-0 text-dark py-4" style={{color: 'gray'}}>Shipping</p>
                                            </td>
                                            <td colspan="3" class="py-5">
                                                <div class="form-check text-start">
                                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Shipping-1" name="Shipping-1" value="Shipping"></input>
                                                    <label class="form-check-label" for="Shipping-1" style={{color: 'gray'}}>Free Shipping</label>
                                                </div>
                                                <div class="form-check text-start">
                                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Shipping-2" name="Shipping-1" value="Shipping"></input>
                                                    <label class="form-check-label" for="Shipping-2" style={{color: 'gray'}}>Flat rate: $15.00</label>
                                                </div>
                                                <div class="form-check text-start">
                                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Shipping-3" name="Shipping-1" value="Shipping"></input>
                                                    <label class="form-check-label" for="Shipping-3" style={{color: 'gray'}}>Local Pickup: $8.00</label>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                            </th>
                                            <td class="py-5">
                                                <p class="mb-0 text-dark text-uppercase py-3" style={{color: 'gray'}}>TOTAL</p>
                                            </td>
                                            <td class="py-5"></td>
                                            <td class="py-5"></td>
                                            <td class="py-5">
                                                <div class="py-3 border-bottom border-top">
                                                    <p class="mb-0 text-dark" style={{color: 'gray'}}>$135.00</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="form-check text-start my-3" style={{position: 'absolute',left: '800px',top: '1530px'}}>
                                        <input type="checkbox" class="form-check-input bg-primary border-0" id="Transfer-1" name="Transfer" value="Transfer"></input>
                                        <label class="form-check-label" for="Transfer-1" style={{color: 'gray'}}>Direct Bank Transfer</label>
                                    </div>
                                    <p class="text-start " style={{color: 'gray',width: '400px',left: '800px',position: 'absolute',top: '1600px'}}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                     <div class="py-3 border-bottom " style={{width: '400px',position: 'absolute',left: '800px',top: '1700px'}}></div>
                                     <div class="form-check text-start my-3" style={{position: 'absolute',left: '800px',top: '1750px'}}>
                                        <input type="checkbox" class="form-check-input bg-primary border-0" id="Payments-1" name="Payments" value="Payments"></input>
                                        <label class="form-check-label" for="Payments-1" style={{color: 'gray'}}>Check Payments</label>
                                    </div>
                                     <div class="py-3 border-bottom " style={{width: '400px',position: 'absolute',left: '800px',top: '1800px'}}></div>
                           <div class="form-check text-start my-3" style={{position: 'absolute',left: '800px',top: '1850px'}}>
                                        <input type="checkbox" class="form-check-input bg-primary border-0" id="Delivery-1" name="Delivery" value="Delivery"></input>
                                        <label class="form-check-label" for="Delivery-1" style={{color: 'gray'}}>Cash On Delivery</label>

                                    </div>
                                     <div class="py-3 border-bottom " style={{width: '400px',position: 'absolute',left: '800px',top: '1900px'}}></div>
                                     <div class="form-check text-start my-3" style={{position: 'absolute',top: '1950px',left: '800px'}}>
                                        <input type="checkbox" class="form-check-input bg-primary border-0" id="Paypal-1" name="Paypal" value="Paypal"></input>
                                        <label class="form-check-label" for="Paypal-1" style={{color: 'gray'}}>Paypal</label>
                                    </div>
                                     <div class="py-3 border-bottom " style={{width: '400px',position: 'absolute',left: '800px',top: '2000px'}}></div>
                              <button
  type="button"
  className="btn border-secondary py-3 px-4 text-uppercase text-success"
  style={{ width: "400px",position: 'absolute',left: '800px',top: '2070px' }}
  onMouseOver={(e) => e.target.style.backgroundColor = "orange"}
  onMouseOut={(e) => e.target.style.backgroundColor = "white"}
>
  Place Order
</button>
                              <button
                                type="button"
                                className="btn btn-outline-danger py-3 px-4 text-uppercase"
                                style={{ width: "200px", position: 'absolute', left: '1210px', top: '2070px' }}
                                onClick={() => navigate('/cart')}
                              >
                                Cancel
                              </button>
<div className='card' style={{height: '610px',position: 'relative',top: '1800px',backgroundColor: '#2E865F'}}>


   
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



      
    </div>
    </>
  )
};

export default Wot
