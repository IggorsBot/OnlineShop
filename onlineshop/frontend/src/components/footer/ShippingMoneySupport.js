import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

function ShippingMoneySupport(){
    return(
      <Fragment>
      <div className="container-fluid p-0">
        <div className="site-info">
          <div className="row text-center py-3 bg-primary-color m-0">
            <div className="col-md-4 col-sm-12 my-md-O my-4">
              <div className="row justify-content-center-center text-light">
                <i className="fas fa-rocket fa-4x px-4"></i>
                <div className="py-2 font-roboto text-left">
                  <h6 className="m-0">Free Shipping & Return</h6>
                  <small>Free Shipping on order over $49</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 my-md-0 my-4">
              <div className="row justify-content-center-center text-light">
                <i className="fas fa-hand-holding-usd fa-4x px-4"></i>
                <div className="py-2 font-roboto text-left">
                  <h6 className="m-0">Money Guarantee</h6>
                  <small>30 days money back guarantee</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 my-md-0 my-4">
              <div className="col-md-4 col-md-12 my-md-O my-4">
                <div className="row justify-content-center-center text-light">
                  <i className="fas fa-headphones-alt fa-4x px-4"></i>
                  <div className="py-2 font-roboto text-left">
                    <h6 className="m-0">Online Support</h6>
                    <small>We support online 24 hours a day</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    )
}

export default ShippingMoneySupport
