import React, {Fragment, Component} from 'react'
import ReactDOM from 'react-dom'


class Subscribe extends Component {
  render(){
    return(
      <div class="col-md-4 col-12 my-md-0 my-3 pl-md-0 pl-5">
        <input type="text" class="form-control border-0 bg-light" placeholder="Enter Your email Address">
      </div>
      <div class="col-md-2 col-12 my-md-0 my-3 pl-md-0 pl-5">
        <button class="btn bg-primary-color text-white">Subscribe</button>
      </div>

    )
  }
}

export default Subscribe
