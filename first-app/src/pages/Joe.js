import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import wo from '../components/15.jpg'
import so from '../components/16.jpg'
import no from '../components/17.jpg'



function App() {
  return (
    <div className='card' style={{width: '300px',height: '300px',backgroundColor: 'orange',position: 'absolute', top: '3000px',left: '120px'}}>
         <img src={wo} alt='' style={{width: '300px',height: '200px'}}/>

         <div className='card' style={{width: '300px',height: '300px',backgroundColor: 'gray',position: 'absolute', top: '0px',left: '380px'}}>
          <img src={so} alt='' style={{width: '300px',height: '200px'}}/>
          <div className='card' style={{width: '300px',height: '300px',backgroundColor: 'green',position: 'absolute',left: '370px'}}>
                      <img src={no} alt='' style={{width: '300px',height: '200px'}}/>
                                         <div className='card' style={{width: '200px',height: '75px',position: 'absolute',bottom: '70px',backgroundColor: 'white',right: '420px'}} />
                   <div className='card' style={{width: '200px',height: '75px',position: 'relative', right: '700px',bottom: '50px',backgroundColor: 'green'}} />
                               
          </div>
                            
         <h4 style={{position: 'absolute',right: '380px',fontSize: '20px',width: '200px',top: '160px',color: 'white'}}>Fresh Apple</h4>
         <h4 style={{position: 'absolute',right: '380px',fontSize: '20px',width: '200px',top: '190px'}}>20% OFF</h4>
                  <h4 style={{position: 'absolute',left: '80px',top: '160px',color: 'green'}}>Tasty Fruits</h4>
                  <h4 style={{position: 'absolute',left: '80px',top: '190px'}}>Free delivery</h4>
                  <div className='card' style={{width: '200px',height: '75px',position: 'absolute',left: '430px',top: '160px',backgroundColor: 'orange'}}/>
                  <h4 style={{position: 'absolute',left: '450px',width: '200px',top: '170px',color: 'white'}}>Exotic Vegitable</h4>
                  <h4 style={{position: 'absolute',left: '450px',width: '200px',top: '200px'}}>Discount 30$</h4>
                          

         </div>
         

   
  
  
 
    </div>
  )
}

export default App


