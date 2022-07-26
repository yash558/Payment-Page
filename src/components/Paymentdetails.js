import React from 'react'
import paypal from '../assets/paypal.png'
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import discover from '../assets/discover.png'
import dhl from '../assets/dhl.jpg'
import dpd from '../assets/dpd.png'
import fedx from '../assets/fedx.png'
import payment from '../assets/payment.png'
import gateway from '../assets/gateway.png'


const Paymentdetails = () => {
  return (
    <div className="row-2 d-flex flex-row">
      <div className="shipping-details">
        <div className="button-details d-flex mx-5">
          <button className="mx-4 btn btn-success fs-5 ">Login</button>
          <button className="mx-4 btn btn-outline-success fs-5">Sign-Up</button>
        </div>
        <h4 className='mx-5 my-4 px-3'>Shipping Information</h4>
        <form action="" className="d-flex flex-col px-4 my-2">
          <div className="col-4">
            <div class="mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>
            <div class="mb-3">
              <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
            </div>
            <div class="mb-3">
              <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
            </div>
            <div class="mb-3">
              <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="Phone No" />
            </div>
          </div>
          <div className="col-2 px-5">
            <div class="mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
            </div>
            <div class="mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="City" />
            </div>
            <div class="mb-3">

              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Postal Code" />
            </div>
            <div class="mb-3">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Country" />
            </div>
          </div>
        </form>
        <button className="btn mx-5 mt-5">🡸 Back</button>
      </div>
      <div className="d-flex flex-column">
        <div className="payment-methods">
          <h4>Payment Methods</h4>
          <div className="row">
            <div className="payment-buttons1 my-2">
              <button className="mx-3 btn btn-outline-primary"><img src={paypal} alt="" height={40} width={100} /></button>
              <button className="mx-3 btn btn-outline-primary"><img src={visa} alt="" height={40} width={100} /></button>
              <button className="mx-3 btn btn-outline-primary"><img src={mastercard} alt="" height={40} width={100} /></button>
            </div>
            <div className="payment-buttons2">
              <button className="mx-3 btn btn-outline-primary"><img src={payment} alt="" height={40} width={100} /></button>
              <button className="mx-3 btn btn-outline-primary"><img src={discover} alt="" height={40} width={100} /></button>
              <button className="mx-3 btn btn-outline-primary"><img src={gateway} alt="" height={40} width={100} /></button>
            </div>
          </div>
        </div>
        <div className="Delivery-methods mt-3">
          <h4>Delivery Methods</h4>
          <div className="row">
            <div className="payment-buttons1 my-2">
              <button className="mx-3 btn btn-outline-dark fw-bolder"><img src={dpd} alt="" height={40} width={135} />$20.00</button>
              <button className="mx-3 btn btn-outline-dark fw-bolder"><img src={paypal} alt="" height={40} width={135} />$20.00</button>
            </div>
            <div className="payment-buttons2">
              <button className="mx-3 btn btn-outline-dark fw-bolder"><img src={dhl} alt="" height={40} width={135} />$20.00</button>
              <button className="mx-3 btn btn-outline-dark fw-bolder"><img src={fedx} alt="" height={40} width={135} />$20.00</button>
            </div>
          </div>
        </div>
      </div>
      <div className="customer-details">
        <h4 className="cart-title mr-3">Cart</h4>
        <div className='cart-Information mt-3'>
          <div className="cart1 mx-3 d-flex flex-row">
            <div className="img">
              <img src="https://www.bing.com/th?id=OIP.vHzmiuV12LAMHP3Qfs8IcwHaNJ&w=120&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" className='rounded-circle' alt="" height={50} width={50}></img>
            </div>
            <div className="d-flex  flex-column">
              <h6 className="title">T-shirt</h6>
              <div className="carty d-flex flex-row">
                <h6>Summer Vibes</h6>
                <h6 className="charge">$89.99</h6>
              </div>
              <p>#261311</p>
            </div>
          </div>
          <div className="cart1 mx-3 mt-3 d-flex flex-row">
            <div className="img">
              <img src="https://www.bing.com/th?id=OIP.vHzmiuV12LAMHP3Qfs8IcwHaNJ&w=120&h=170&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" className='rounded-circle' alt="" height={50} width={50}></img>
            </div>
            <div className="d-flex  flex-column">
              <h6 className="title">T-shirt</h6>
              <div className="carty d-flex flex-row">
                <h6>Summer Vibes</h6>
                <h6 className="charge">$89.99</h6>
              </div>
              <p>#261311</p>
            </div>
          </div>
        </div>
        <button className="costbtn">Total Cost <span className="fw-bolder">$159.98</span></button>
        <div className="truck-details d-flex flex-row mx-5 mt-4">
          <div className="truck-icon fs-3 mx-3"><i class="fa fa-truck" aria-hidden="true"></i></div>
          <div className="truck-para"><p>You are $30.02 away <br/>from free spinning</p></div>
        </div>
        <div className="truck-btn d-flex flex-row">
          <button className="btn shop ">Continue Shopping</button>
          <button className="btn shop1 btn-success"><a href="https://rzp.io/l/jIKvo84zn"> Proceed to Payment</a></button>
        </div>
      </div>
    </div>
  )
}

export default Paymentdetails