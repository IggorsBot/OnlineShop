import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom'
import axios from "axios"
import {Link, withRouter} from 'react-router-dom'

import MainSlider from './MainSlider'
import BestsellerBooks from './books/BestsellerBooks'


class IndexPage extends Component{




    render(){
        return(
          <Fragment>
          <MainSlider/>

            <div className="container">

              <BestsellerBooks/>
            </div>
          </Fragment>
        )
    }
}


export default IndexPage
