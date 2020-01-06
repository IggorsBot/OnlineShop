import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'


class Footer extends Component {
  render(){
    return(
      <Fragment>
        <div className="container-fluid news pt-5">
          <div className="row">
            <div className="col-md-6 col-12 pl-5">
              <h4 className="primary-color font-roboto m-0 p-0">
                Need Help? Call Our Award-Warning
              </h4>
              <p className="m-0 p-0 text-secondary">
                Support Team 24/7 At (844) 5555-8324
              </p>
            </div>
            <div className="col-md-4 col-12 my-md-0 my-3 pl-md-0 pl-5">
              <input type="text" className="form-control border-0 bg-light" placeholder="Enter Your email Address"/>
            </div>
            <div className="col-md-2 col-12 my-md-0 my-3 pl-md-0 pl-5">
              <button className="btn bg-primary-color text-white">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <p className="pg-">
            <img src="http://localhost:8000/media/assets/payment.png" alt="payment image" className="img-fluid"/>
          </p>
          <small className="text-secondary py-4">Daily Tution @ 2019 Tutorial Store. All Rights Reserved. Designed by Daily Tutorial</small>
        </div>

      </Fragment>
    )
  }
}

export default Footer
